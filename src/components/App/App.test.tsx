import React from 'react'
import { render } from '@testing-library/react'
import { App } from 'src/components/App/App'

test('App is rendering', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toBeDefined()
})
