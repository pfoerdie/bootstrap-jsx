import { Props, Element, joinNames } from '@util/components'
import GenericComponent, { GenericProps } from '@/util/GenericComponent'

export type ContainerType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'

export type ContainerProps = GenericProps<{
  type?: ContainerType
}>

export default function Container({ children, classNames, type }: ContainerProps): Element<ContainerProps> {
  return <GenericComponent classNames={[type && type !== 'xs' ? `container-${type}` : 'container', ...(classNames || [])]}>
    {children}
  </GenericComponent>
}