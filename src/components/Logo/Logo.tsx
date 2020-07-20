import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import 'src/components/Logo/Logo.css'

export function Logo(): ReactElement {
  return <Link to={'/'} className={'logo'} />
}
