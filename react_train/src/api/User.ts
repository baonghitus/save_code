import type { UserType } from '@/types/index'

export const getUser = async (userId: number | undefined) => {
  const result: UserType | null = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return null
    })
  return result
}
