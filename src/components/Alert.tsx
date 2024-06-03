'use client'

import { Props, Element, joinNames } from '@util/components'
import { useEffect, useRef } from 'react'
// import * as bootstrap from 'bootstrap/js/index.esm'
import BSAlert from 'bootstrap/js/dist/alert'

export type AlertProps = Props<{
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  dismissible?: boolean
}>

export type AlertElement = Element<AlertProps>

export default function Alert({ variant, dismissible, children, className }: AlertProps): AlertElement {
  const alertRef = useRef(null)

  useEffect(() => {
    if (!alertRef.current) return
    const bsAlert = new BSAlert(alertRef.current)
    return () => bsAlert.dispose()
  }, [alertRef])

  // TODO wip

  return <div ref={alertRef} className={joinNames('alert', `alert-${variant}`, dismissible ? 'alert-dismissible' : undefined, className)} role='alert'>
    {children}
    {dismissible && <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>}
  </div>
}