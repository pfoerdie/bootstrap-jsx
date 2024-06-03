import { Props, Element, joinNames } from '@util/components'

export type AlertProps = Props<{
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}>

export type AlertElement = Element<AlertProps>

export default function Alert({ variant, children, className }: AlertProps): AlertElement {
  return <div className={joinNames('alert', `alert-${variant}`, className)} role='alert'>
    {children}
  </div>
}