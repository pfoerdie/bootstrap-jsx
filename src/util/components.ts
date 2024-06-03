import { PropsWithChildren, ReactElement, CSSProperties } from 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--bs-${string}`]: string | number
  }
}

export type Props<P = unknown> = PropsWithChildren<P & {
  className?: string
  style?: CSSProperties
}>

export type Element<P extends Props = any> = ReactElement<P, 'div'>
export type InlineElement<P extends Props = any> = ReactElement<P, 'span'>

export type Component<P extends Props> = (props: P) => Element<P>
export type InlineComponent<P extends Props> = (props: P) => InlineElement<P>

export function joinNames(...names: Array<string | undefined>): string {
  return Array.from(new Set(
    names.flatMap(val => val?.split(' ') ?? '').filter(val => val))
  ).sort().join(' ')
}

export function joinStyles(...styles: Array<CSSProperties | undefined>): CSSProperties {
  return styles.reduce((acc, val) => ({ ...val, ...acc })) ?? {}
}