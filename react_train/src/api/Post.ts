import type { PostType } from '@/types/index'

const serverURL: string | undefined = process.env.REACT_APP_SERVER_URL

export const getPostList = async () => {
  const result: PostType[] = await fetch(`${serverURL}/posts`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return []
    })
  return result
}

export const getPost = async (postId: string) => {
  const result: PostType | undefined = await fetch(`${serverURL}/posts/${postId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return undefined
    })
  return result
}
