import 'components/logo/index.less'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(): JSX.Element {
  return <Link to={'/'} className={'logo'} />
}
