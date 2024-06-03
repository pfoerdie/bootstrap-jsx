import { Props, Element, joinNames } from '@util/components'

export type ContainerProps = Props<{
  type?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
}>

export type ContaineElement = Element<ContainerProps>

export default function Container({ children, className, type }: ContainerProps): ContaineElement {
  return <div className={joinNames(type && type !== 'xs' ? `container-${type}` : 'container', className)}>
    {children}
  </div>
}