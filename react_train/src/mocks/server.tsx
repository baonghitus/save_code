import { setupServer } from 'msw/node'
import { handlers } from './handlers'
// require('dotenv').config()

// const SERVER_URL =

export const server = setupServer(...handlers)
