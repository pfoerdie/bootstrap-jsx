import { CSSProperties, HTMLAttributes } from 'react'
import { Props, Element, joinNames, joinStyles } from '@util/components'
import { TextOptions, classifyTextOptions, styliseTextOptions } from '@util/text'

export type GenericProps<P = unknown> = Props<P & {
  classNames?: Array<string>
  styles?: Array<CSSProperties>
  text?: TextOptions
} & HTMLAttributes<HTMLDivElement>>

export default function GenericComponent<P extends GenericProps>(props: P): Element<P> {
  const classNames: Array<string | undefined> = [
    props.className, ...(props.classNames ?? []),
    ...(props.text ? classifyTextOptions(props.text) : [])
  ]
  const styles: Array<CSSProperties | undefined> = [
    props.style, ...(props.styles ?? []),
    (props.text && styliseTextOptions(props.text))
  ]
  return <div {...props}
    className={joinNames(...classNames)}
    style={joinStyles(...styles)}>
    {props.children}
  </div>
}
