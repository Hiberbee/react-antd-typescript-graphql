import React from 'react'
import { render } from 'react-dom'
import { App } from 'src/components/App/App'
import { register } from 'src/serviceWorker'

render(<App />, document.getElementById('root'))
register()
