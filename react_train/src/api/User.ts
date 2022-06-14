import type { UserType } from '@/types/index'

export const getUser = async (userId: number | undefined) => {
  const result: UserType | undefined = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return undefined
    })
  return result
}
