import StyleDictionary from 'style-dictionary'

// ============================================================
// 汎用ユーティリティ
// ============================================================
const stripPx = (v) =>
  typeof v === 'string' && /^-?\d+(\.\d+)?px$/.test(v) ? parseFloat(v) : v

const FONT_WEIGHT_MAP = {
  thin: '100', 'extra-light': '200', light: '300', regular: '400',
  medium: '500', 'semi-bold': '600', bold: '700', 'extra-bold': '800', black: '900',
}

// ============================================================
// TS向け transforms(型で判定、中身は見ない)
// ============================================================

// dimension: "16px" → 16
StyleDictionary.registerTransform({
  name: 'ts/dimension',
  type: 'value',
  filter: (t) => t.type === 'dimension',
  transform: (t) => stripPx(t.value),
})

// fontWeight: "extra-bold" → "800"
StyleDictionary.registerTransform({
  name: 'ts/fontWeight',
  type: 'value',
  filter: (t) => t.type === 'fontWeight',
  transform: (t) => FONT_WEIGHT_MAP[t.value] ?? t.value,
})

// shadow: 構造を保ちつつ内部のpxを剥がす
StyleDictionary.registerTransform({
  name: 'ts/shadow',
  type: 'value',
  filter: (t) => t.type === 'shadow',
  transform: (t) => ({
    color: t.value.color,
    offsetX: stripPx(t.value.offsetX),
    offsetY: stripPx(t.value.offsetY),
    blur: stripPx(t.value.blur),
  }),
})

// border: 構造を保ちつつ width を数値化
StyleDictionary.registerTransform({
  name: 'ts/border',
  type: 'value',
  filter: (t) => t.type === 'border',
  transform: (t) => ({
    color: t.value.color,
    width: stripPx(t.value.width),
    style: t.value.style,
  }),
})

// transition: timingFunction を cubic-bezier文字列に
StyleDictionary.registerTransform({
  name: 'ts/transition',
  type: 'value',
  filter: (t) => t.type === 'transition',
  transform: (t) => ({
    duration: t.value.duration,
    delay: t.value.delay,
    timingFunction: Array.isArray(t.value.timingFunction)
      ? `cubic-bezier(${t.value.timingFunction.join(', ')})`
      : t.value.timingFunction,
  }),
})

// cubicBezier 単体
StyleDictionary.registerTransform({
  name: 'ts/cubicBezier',
  type: 'value',
  filter: (t) => t.type === 'cubicBezier',
  transform: (t) => `cubic-bezier(${t.value.join(', ')})`,
})

// ============================================================
// CSS向け transforms(型ごとにshorthand文字列に)
// ============================================================

StyleDictionary.registerTransform({
  name: 'css/fontWeight',
  type: 'value',
  filter: (t) => t.type === 'fontWeight',
  transform: (t) => FONT_WEIGHT_MAP[t.value] ?? t.value,
})

StyleDictionary.registerTransform({
  name: 'css/shadow',
  type: 'value',
  filter: (t) => t.type === 'shadow',
  transform: (t) => {
    const { offsetX, offsetY, blur, color } = t.value
    return `${offsetX} ${offsetY} ${blur} ${color}`
  },
})

StyleDictionary.registerTransform({
  name: 'css/border',
  type: 'value',
  filter: (t) => t.type === 'border',
  transform: (t) => `${t.value.width} ${t.value.style} ${t.value.color}`,
})

StyleDictionary.registerTransform({
  name: 'css/transition',
  type: 'value',
  filter: (t) => t.type === 'transition',
  transform: (t) => {
    const tf = Array.isArray(t.value.timingFunction)
      ? `cubic-bezier(${t.value.timingFunction.join(', ')})`
      : t.value.timingFunction
    return `${t.value.duration} ${tf} ${t.value.delay ?? '0ms'}`
  },
})

StyleDictionary.registerTransform({
  name: 'css/cubicBezier',
  type: 'value',
  filter: (t) => t.type === 'cubicBezier',
  transform: (t) => `cubic-bezier(${t.value.join(', ')})`,
})

// ============================================================
// Formatter(変更なし)
// ============================================================
StyleDictionary.registerFormat({
  name: 'typescript/nested-object',
  format: ({ dictionary }) => {
    const build = (tokens) => {
      const result = {}
      tokens.forEach((token) => {
        let cursor = result
        token.path.forEach((key, i) => {
          if (i === token.path.length - 1) cursor[key] = token.value
          else {
            cursor[key] = cursor[key] ?? {}
            cursor = cursor[key]
          }
        })
      })
      return result
    }
    return `/**\n * Do not edit directly.\n */\n\nexport const tokens = ${JSON.stringify(
      build(dictionary.allTokens), null, 2
    )} as const\n\nexport type Tokens = typeof tokens\n`
  },
})

// ============================================================
// TransformGroups(順序を明示して登録)
// ============================================================
StyleDictionary.registerTransformGroup({
  name: 'tamagui-ts',
  transforms: [
    'attribute/cti',
    'name/camel',
    'color/hex',
    'ts/dimension',
    'ts/fontWeight',
    'ts/cubicBezier',
    'ts/shadow',
    'ts/border',
    'ts/transition',
  ],
})

StyleDictionary.registerTransformGroup({
  name: 'tamagui-css',
  transforms: [
    'attribute/cti',
    'name/kebab',
    'color/css',
    'css/fontWeight',
    'css/cubicBezier',
    'css/shadow',
    'css/border',
    'css/transition',
  ],
})

// ============================================================
// Config
// ============================================================
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'tamagui-ts',
      buildPath: 'packages/common/src/styles/',
      files: [{ destination: 'tokens.ts', format: 'typescript/nested-object' }],
    },
    css: {
      transformGroup: 'tamagui-css',
      buildPath: 'packages/common/src/styles/',
      files: [{ destination: 'variables.css', format: 'css/variables' }],
    },
  },
}