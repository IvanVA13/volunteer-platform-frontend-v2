import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders Vite + React text', () => {
  const { getByText } = render(<App />)
  expect(getByText(/vite \+ react/i)).toBeInTheDocument()
})
