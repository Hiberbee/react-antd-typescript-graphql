import 'src/components/Logo/Logo.less'

import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function Logo(): ReactElement {
  return <Link to={'/'} className={'logo'} />
}
