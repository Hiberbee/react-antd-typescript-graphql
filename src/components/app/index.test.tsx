import { render, screen } from '@testing-library/react'
import AppProvider from 'components'
import React from 'react'

test('Index is rendering', async () => {
  render(<AppProvider />)
  expect(screen.getByText(/home/i)).toHaveAttribute('href', '/')
})
