import { CSSProperties } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type TextAlign = 'start' | 'center' | 'end'
export type TextOverflow = 'wrap' | 'overflow' | 'word-break'
export type TextTransform = 'lowercase' | 'uppercase' | 'capitalize'
export type TextDecoration = 'underline' | 'line-through' | 'none'
export type TextColor = 'reset' | 'primary' | 'primary-emphasis' | 'secondary' | 'secondary-emphasis' | 'success' | 'success-emphasis' | 'danger' | 'danger-emphasis' | 'warning' | 'warning-emphasis' | 'info' | 'info-emphasis' | 'light' | 'light-emphasis' | 'dark' | 'dark-emphasis' | 'body' | 'body-emphasis' | 'body-secondary' | 'body-tertiary' | 'black' | 'white'
export type TextOpacity = 0 | .05 | .1 | .15 | .2 | .25 | .3 | .35 | .4 | .45 | .5 | .55 | .6 | .65 | .7 | .75 | .8 | .85 | .9 | .95 | 1
export type FontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
export type FontWeight = 'bold' | 'bolder' | 'semibold' | 'medium' | 'normal' | 'light' | 'lighter'
export type FontStyle = 'normal' | 'italic' | 'monospace' | 'monospace-italic'
export type LineHeight = '1' | 'sm' | 'base' | 'lg'

export type TextOptions = {
  align?: TextAlign | Record<Breakpoint, TextAlign>
  overflow?: TextOverflow
  transform?: TextTransform
  decoration?: TextDecoration
  color?: TextColor
  opacity?: TextOpacity
  size?: FontSize
  weight?: FontWeight
  style?: FontStyle
  height?: LineHeight
}

export function classifyTextOptions(options?: TextOptions): Array<string> {
  const textClasses: Array<string> = []
  if (!options) return textClasses
  if (options.align) {
    if (typeof options.align === 'string') textClasses.push(`text-${options.align}`)
    else Object.entries(options.align).forEach(([breakpoint, align]) => textClasses.push(`text-${breakpoint}-${align}`))
  }
  switch (options.overflow) {
    case 'wrap': textClasses.push('text-wrap'); break
    case 'overflow': textClasses.push('text-nowrap'); break
    case 'word-break': textClasses.push('text-break'); break
  }
  if (options.transform) textClasses.push(`text-${options.transform}`)
  if (options.decoration) textClasses.push(`text-decoration-${options.decoration}`)
  if (options.color) textClasses.push(`text-${options.color}`)
  if (options.size) textClasses.push(`fs-${options.size.replace('h', '')}`)
  if (options.weight) textClasses.push(`fw-${options.weight}`)
  switch (options.style) {
    case 'normal': textClasses.push('fst-normal'); break
    case 'italic': textClasses.push('fst-italic'); break
    case 'monospace': textClasses.push('font-monospace'); break
    case 'monospace-italic': textClasses.push('font-monospace', 'fst-italic'); break
  }
  if (options.height) textClasses.push(`lh-${options.height}`)
  return textClasses
}

export function styliseTextOptions(options?: TextOptions): CSSProperties {
  const textStyle: CSSProperties = {}
  if (!options) return textStyle
  if (options.opacity !== undefined) textStyle['--bs-text-opacity'] = `${options.opacity}`
  return textStyle
}