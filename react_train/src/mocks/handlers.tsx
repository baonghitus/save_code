// src/mocks/handlers.js
import { rest } from 'msw'
require('dotenv').config()

// interface LoginBody {
//   username: string
// }

interface LoginResponse {
  username: string
  firstName: string
}

export const handlers = [
  // Handles a GET /user request
  rest.get<any, LoginResponse>(`${process.env.REACT_APP_SERVER_URL}/getUser`, (req, res, ctx) => {
    // const { username } = req.body
    return res(
      ctx.json({
        username: 'test',
        firstName: 'John'
      })
    )
  })
  // rest.get<any, LoginResponse>(`https://randomuser.me/api`, (req, res, ctx) => {
  //   // const { username } = req.body
  //   return res(
  //     ctx.json({
  //       {
  //       gender: 'female',
  //       name: {
  //         title: 'Mrs',
  //         first: 'Holly',
  //         last: 'Morgan'
  //       }
  //     }
  //     })
  //   )
  // })
]
