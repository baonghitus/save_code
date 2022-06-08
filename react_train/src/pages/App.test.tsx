import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { server } from '@/mocks/server'

import App from '@/pages/App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders vite link', () => {
  render(<App />)
  const linkElement = screen.getByText(/vite docs/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders button count is', () => {
  const { getByText } = render(<App />)
  const button = getByText(/count is/)

  expect(button).toBeInTheDocument()
})

test('button can click', () => {
  const { getByText } = render(<App />)
  const button = getByText(/count is/)

  expect(button).not.toBeDisabled()
})

test('button can click2', async () => {
  const { getByText, findByText } = render(<App />)
  const button = getByText(/get Frend/)

  await fireEvent.click(button)

  expect(await findByText(/John/)).toBeInTheDocument()
})

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())
