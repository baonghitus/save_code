import type { PostType } from '@/types/index'

export const getPostList = async () => {
  const result: PostType[] = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return []
    })
  return result
}

export const getPost = async (postId: string) => {
  const result: PostType = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return []
    })
  return result
}
