import { useEffect, useRef } from "react";
import { GLView } from "expo-gl";
import type { ExpoWebGLRenderingContext } from "expo-gl";
import chroma from "chroma-js";
import { useThemeColors } from "../../styles/theme";
import { View } from "tamagui";
import { atoms } from "../../styles/alf";

const BUBBLE_COUNT = 28;

interface Bubble {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  drift: number;
  phase: number;
  // 揺れ用
  swayPhase: number; // 横揺れの位相
  bobPhase: number; // 上下動の位相
  bobAmp: number; // 上下動の振幅(px)
  pulsePhase: number; // 半径脈動の位相
  pulseAmp: number; // 半径脈動の振幅(px)
}

/** [r, g, b, a]（rgb は 0〜1） */
type RGBA = [number, number, number, number];

/**
 * chroma で扱える色（hex / 名前 / chroma インスタンスなど）を RGBA(0〜1) に変換するヘルパ。
 * @param color chroma.js が解釈できる任意の色
 * @param alpha 0〜1 で上書きしたい場合に指定（省略時は color 側のアルファ、なければ 1）
 */
export function toRGBA(color: chroma.ChromaInput, alpha?: number): RGBA {
  const c = chroma(color);
  const [r, g, b] = c.rgb(); // 0〜255
  const a = alpha ?? c.alpha();
  return [r / 255, g / 255, b / 255, a];
}

/**
 * 背景の明暗だけを見て、決め打ちの泡パレットを返す。
 * 背景色との相対計算はしない。
 *
 * - 背景が明るい(L>0.5) → 決め打ちの青（シアン寄り）
 * - 背景が暗い(L<=0.5)  → 決め打ちの白
 *
 * inner→mid→out で明度を変えて球の奥行きを出す。
 */
function deriveBubbleColors(bgColor: chroma.ChromaInput) {
  const L = chroma(bgColor).luminance(); // 0〜1
  const isLight = L > 0.5;

  if (isLight) {
    // 明背景: 青いバブル。中心は淡く明るい水色、縁にかけて濃い青。
    return {
      inner: toRGBA("#dff3ff", 0.92), // ごく淡い水色
      mid: toRGBA("#7cc4f0", 0.55), // 水色
      out: toRGBA("#2f86d6", 0.86), // 濃い青
      ring: toRGBA("#1f6fc0", 0.9), // 輪郭はさらに濃い青
      highlight: toRGBA("#ffffff", 0.9), // 光沢は白
    };
  }

  // 暗背景: 白いバブル。
  return {
    inner: toRGBA("#ffffff", 0.92),
    mid: toRGBA("#eaf2f8", 0.5),
    out: toRGBA("#cfe0ec", 0.22),
    ring: toRGBA("#ffffff", 0.7),
    highlight: toRGBA("#ffffff", 0.85),
  };
}

interface Props {
  /** 光沢の強さ 0〜1（既定 0.9） */
  gloss?: number;
  /** 輪郭の歪み（震え）の強さ 0〜1（既定 1。0 で真円） */
  wobble?: number;
}

/** uniform 設定に必要な解決済みの値 */
interface ResolvedColors {
  inner: RGBA;
  mid: RGBA;
  out: RGBA;
  ring: RGBA;
  highlight: RGBA;
  gloss: number;
  wobble: number;
}

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
	vUv = aPos * 0.5 + 0.5;
	gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

// 背景は透明。全バブルを 1 パスで描画し、色とアルファを累積する。
const FRAG = `
precision highp float;
varying vec2 vUv;

uniform vec2 uRes;
uniform int uCount;
// x, y, r, opacity を bubble ごとに格納
uniform vec4 uBubbles[${BUBBLE_COUNT}];

// バブルの3ストップ色（rgb + alpha）
uniform vec4 uInner;
uniform vec4 uMid;
uniform vec4 uOut;
// 輪郭線・ハイライトの色と強度（rgb + 強度）
uniform vec4 uRing;
uniform vec4 uHighlight;
// 光沢の全体強度
uniform float uGloss;
// 輪郭の歪み強度と時間
uniform float uWobble;
uniform float uTime;

void main() {
	// vUv.y は下が 0。Canvas 座標系（上が 0）に合わせて反転。
	vec2 px = vec2(vUv.x * uRes.x, (1.0 - vUv.y) * uRes.y);

	// 背景は透明。色とアルファを累積していく。
	vec3 col = vec3(0.0);
	float alpha = 0.0;

	for (int i = 0; i < ${BUBBLE_COUNT}; i++) {
		if (i >= uCount) break;
		vec4 b = uBubbles[i];
		vec2 c = b.xy;
		float r = b.z;
		float op = b.w;

		// バブル中心からの相対ベクトルと角度
		vec2 rel = px - c;
		float ang = atan(rel.y, rel.x);
		float dist = length(rel);

		// 角度に応じて半径を小刻みに震わせる（高めの角周波数 + 速い時間変動）。
		// uWobble で強度調整（0 で真円）。ごく控えめな振幅。
		float wob =
			sin(ang * 7.0 + uTime * 0.006 + b.x * 0.07) * 0.5 +
			sin(ang * 11.0 - uTime * 0.008 + b.y * 0.07) * 0.5;
		float rDyn = r * (1.0 + uWobble * 0.02 * wob);

		float d = dist;
		if (d > rDyn + 1.5) continue;

		// 放射状グラデーション（中心オフセットあり）
		vec2 lightCenter = c + vec2(-rDyn * 0.3, -rDyn * 0.3);
		float ld = distance(px, lightCenter) / rDyn;

		vec3 inner = uInner.rgb;
		vec3 midC  = uMid.rgb;
		vec3 outC  = uOut.rgb;

		float aInner = uInner.a, aMid = uMid.a, aOut = uOut.a;
		vec3 fillCol;
		float fillA;
		if (ld < 0.4) {
			float k = ld / 0.4;
			fillCol = mix(inner, midC, k);
			fillA = mix(aInner, aMid, k);
		} else {
			float k = clamp((ld - 0.4) / 0.6, 0.0, 1.0);
			fillCol = mix(midC, outC, k);
			fillA = mix(aMid, aOut, k);
		}

		// 円の縁を滑らかに（アンチエイリアス）
		float edge = 1.0 - smoothstep(rDyn - 1.0, rDyn + 1.0, d);
		float a = fillA * op * edge;
		col = mix(col, fillCol, a);
		alpha = alpha + a * (1.0 - alpha);

		// リム反射（縁に沿った明るい帯）— 球感を強める
		float rim = smoothstep(rDyn * 0.82, rDyn, d) * (1.0 - smoothstep(rDyn, rDyn + 1.0, d));
		float rimA = rim * 0.35 * uGloss * op;
		col = mix(col, uHighlight.rgb, rimA);
		alpha = alpha + rimA * (1.0 - alpha);

		// 輪郭線
		float ring = smoothstep(rDyn - 1.4, rDyn - 0.2, d) * (1.0 - smoothstep(rDyn, rDyn + 1.0, d));
		float ringA = ring * uRing.a * op;
		col = mix(col, uRing.rgb, ringA);
		alpha = alpha + ringA * (1.0 - alpha);

		// メインのハイライト（左上の大きめソフト光）
		vec2 hl = c + vec2(-rDyn * 0.28, -rDyn * 0.32);
		float hd = distance(px, hl);
		float hr = rDyn * 0.28;
		float hlA = (1.0 - smoothstep(hr * 0.2, hr, hd)) * uHighlight.a * op;
		col = mix(col, uHighlight.rgb, hlA);
		alpha = alpha + hlA * (1.0 - alpha);

		// 鋭いスペキュラ光沢（小さく強い光点）— ガラス球らしさ
		vec2 sp = c + vec2(-rDyn * 0.34, -rDyn * 0.4);
		float sd = distance(px, sp);
		float sr = rDyn * 0.1;
		float specA = (1.0 - smoothstep(0.0, sr, sd)) * uGloss * op;
		col = mix(col, uHighlight.rgb, specA);
		alpha = alpha + specA * (1.0 - alpha);

		// 下側の弱い反射光（環境光の回り込み）
		vec2 lo = c + vec2(rDyn * 0.22, rDyn * 0.34);
		float lod = distance(px, lo);
		float lor = rDyn * 0.3;
		float loA = (1.0 - smoothstep(lor * 0.2, lor, lod)) * 0.18 * uGloss * op;
		col = mix(col, uHighlight.rgb, loA);
		alpha = alpha + loA * (1.0 - alpha);
	}

	gl_FragColor = vec4(col, alpha);
}
`;

/** 再設定に使う uniform location 群 */
interface UniformLocs {
  uInner: WebGLUniformLocation | null;
  uMid: WebGLUniformLocation | null;
  uOut: WebGLUniformLocation | null;
  uRing: WebGLUniformLocation | null;
  uHighlight: WebGLUniformLocation | null;
  uGloss: WebGLUniformLocation | null;
  uWobble: WebGLUniformLocation | null;
}

export function BubbleBackground({ gloss = 0.9, wobble = 1 }: Props) {
  const t = useThemeColors();

  const bubblesRef = useRef<Bubble[]>([]);
  const baseRRef = useRef<number[]>([]);
  const sizeRef = useRef({ w: 1, h: 1 });

  // GL コンテキスト・プログラム・uniform location を保持し、
  // useEffect から色などを再設定できるようにする。
  const glRef = useRef<ExpoWebGLRenderingContext | null>(null);
  const progRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<UniformLocs | null>(null);

  // 色・光沢・歪みの解決済み値を ref に保持（draw からも参照可能）
  const resolvedRef = useRef<ResolvedColors>({
    ...deriveBubbleColors(t.bg),
    gloss,
    wobble,
  });

  /** ref に保持中の gl/program/uniform へ色などを書き込む */
  const applyUniforms = () => {
    const gl = glRef.current;
    const prog = progRef.current;
    const u = uniformsRef.current;
    if (!gl || !prog || !u) return;

    const r = resolvedRef.current;
    gl.useProgram(prog);
    if (u.uInner) gl.uniform4f(u.uInner, ...r.inner);
    if (u.uMid) gl.uniform4f(u.uMid, ...r.mid);
    if (u.uOut) gl.uniform4f(u.uOut, ...r.out);
    if (u.uRing) gl.uniform4f(u.uRing, ...r.ring);
    if (u.uHighlight) gl.uniform4f(u.uHighlight, ...r.highlight);
    if (u.uGloss) gl.uniform1f(u.uGloss, r.gloss);
    if (u.uWobble) gl.uniform1f(u.uWobble, r.wobble);
  };

  // テーマ背景色・props が変わったら解決済み値を更新して即反映。
  // draw ループは回り続けているので、uniform 上書きで次フレームから効く。
  useEffect(() => {
    resolvedRef.current = {
      ...deriveBubbleColors(t.bg),
      gloss,
      wobble,
    };
    applyUniforms();
  }, [t.bg, gloss, wobble]);

  const onContextCreate = (gl: ExpoWebGLRenderingContext) => {
    const w = gl.drawingBufferWidth;
    const h = gl.drawingBufferHeight;
    sizeRef.current = { w, h };

    // バブル初期化（座標系は px、上が 0）
    const bubbles: Bubble[] = [];
    for (let i = 0; i < BUBBLE_COUNT; i++) {
      bubbles.push({
        x: Math.random() * w,
        y: h + Math.random() * 300,
        r: 20 + Math.random() * 60,
        speed: 0.28 + Math.random() * 0.45,
        opacity: 0.18 + Math.random() * 0.22,
        drift: (Math.random() - 0.5) * 0.7,
        phase: Math.random() * Math.PI * 2,
        swayPhase: Math.random() * Math.PI * 2,
        bobPhase: Math.random() * Math.PI * 2,
        bobAmp: 1.5 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseAmp: 1 + Math.random() * 2.5,
      });
    }
    bubblesRef.current = bubbles;
    baseRRef.current = bubbles.map((b) => b.r);

    // シェーダーコンパイル
    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // 透明描画のためのブレンド設定
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    // フルスクリーン三角形（2 枚）
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uCount = gl.getUniformLocation(prog, "uCount");
    const uBubbles = gl.getUniformLocation(prog, "uBubbles");
    const uTime = gl.getUniformLocation(prog, "uTime");

    // 再設定で使う location をまとめて保持
    const u: UniformLocs = {
      uInner: gl.getUniformLocation(prog, "uInner"),
      uMid: gl.getUniformLocation(prog, "uMid"),
      uOut: gl.getUniformLocation(prog, "uOut"),
      uRing: gl.getUniformLocation(prog, "uRing"),
      uHighlight: gl.getUniformLocation(prog, "uHighlight"),
      uGloss: gl.getUniformLocation(prog, "uGloss"),
      uWobble: gl.getUniformLocation(prog, "uWobble"),
    };

    glRef.current = gl;
    progRef.current = prog;
    uniformsRef.current = u;

    gl.uniform2f(uRes, w, h);
    gl.uniform1i(uCount, BUBBLE_COUNT);

    // 初回の色など設定（以後は useEffect → applyUniforms で更新）
    applyUniforms();

    const data = new Float32Array(BUBBLE_COUNT * 4);

    const draw = (time: number) => {
      const { w, h } = sizeRef.current;
      const bs = bubblesRef.current;
      const baseR = baseRRef.current;

      gl.clear(gl.COLOR_BUFFER_BIT);

      for (let i = 0; i < bs.length; i++) {
        const b = bs[i];
        b.y -= b.speed;

        b.x +=
          Math.sin(time * 0.0008 + b.phase) * b.drift +
          Math.sin(time * 0.0005 + b.swayPhase) * 0.25;

        b.y += Math.sin(time * 0.0011 + b.bobPhase) * b.bobAmp * 0.02;

        const r =
          baseR[i] + Math.sin(time * 0.0009 + b.pulsePhase) * b.pulseAmp;

        if (b.y + r < -20) {
          b.y = h + r + Math.random() * 100;
          b.x = Math.random() * w;
        }
        data[i * 4 + 0] = b.x;
        data[i * 4 + 1] = b.y;
        data[i * 4 + 2] = r;
        data[i * 4 + 3] = b.opacity;
      }

      gl.uniform1f(uTime, time);
      gl.uniform4fv(uBubbles, data);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.flush();
      gl.endFrameEXP();

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
      transition={{
        backgroundImage: "bouncy",
      }}
      backgroundImage="linear-gradient(180deg, $bgBubbleGradientStart 0%, $bgBubbleGradientEnd 100%)"
    >
      <GLView
        style={[atoms.w_full, atoms.h_full, { backgroundColor: "transparent" }]}
        onContextCreate={onContextCreate}
      />
    </View>
  );
}
