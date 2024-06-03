export const dimensions = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

export const infixes = Object.keys(dimensions)

export type Breakpoint = keyof typeof dimensions