import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('app is rendering', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toBeDefined()
})
