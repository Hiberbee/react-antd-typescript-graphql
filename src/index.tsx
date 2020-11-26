import App from 'components'
import React from 'react'
import { render } from 'react-dom'
import { register } from 'serviceWorker'
import reportWebVitals from 'setupWebVitals'

render(<App />, document.getElementById('root'))
register()
reportWebVitals()
