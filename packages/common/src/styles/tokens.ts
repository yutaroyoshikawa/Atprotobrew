/**
 * Do not edit directly.
 */

export const tokens = {
  "border": {
    "heavy": {
      "color": "#000000",
      "width": "4px",
      "style": "solid"
    },
    "wireframe": {
      "color": "#dd6b20",
      "width": "8px",
      "style": "dashed"
    }
  },
  "color": {
    "black": "#000000",
    "white": "#ffffff",
    "orange": {
      "100": "#fffaf0",
      "200": "#feebc8",
      "300": "#fbd38d",
      "400": "#f6ad55",
      "500": "#ed8936",
      "600": "#dd6b20",
      "700": "#c05621",
      "800": "#9c4221",
      "900": "#7b341e"
    }
  },
  "font": {
    "family": {
      "sans": "Open Sans, sans-serif",
      "serif": "Times New Roman, serif"
    },
    "size": {
      "body": "16px",
      "heading": "28px"
    },
    "weight": {
      "light": "thin",
      "regular": "regular",
      "bold": "extra-bold"
    },
    "lineHeight": {
      "normal": 1.2,
      "large": 1.8
    }
  },
  "shadow": {
    "sm": {
      "color": "#000000",
      "offsetX": "0px",
      "offsetY": "4px",
      "blur": "12px"
    },
    "lg": {
      "color": "#000000",
      "offsetX": "0px",
      "offsetY": "8px",
      "blur": "16px"
    }
  },
  "size": {
    "0": "0px",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "7": "28px",
    "8": "32px",
    "9": "36px",
    "10": "40px",
    "11": "44px",
    "12": "48px",
    "13": "52px",
    "14": "56px",
    "15": "60px",
    "max": "9999px"
  },
  "transition": {
    "duration": {
      "instant": "0ms",
      "short": "100ms",
      "medium": "300ms",
      "long": "600ms"
    },
    "easing": {
      "accelerate": [
        0.5,
        0,
        1,
        1
      ],
      "decelerate": [
        0,
        0,
        0.5,
        1
      ]
    },
    "emphasis": {
      "duration": "300ms",
      "delay": "0ms",
      "timingFunction": [
        0.5,
        0,
        1,
        1
      ]
    },
    "fade": {
      "duration": "600ms",
      "delay": "0ms",
      "timingFunction": [
        0,
        0,
        0.5,
        1
      ]
    }
  }
} as const

export type Tokens = typeof tokens
