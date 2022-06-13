import type { PostType } from '@/types/index'
import { useQuery } from 'react-query'
import axios from 'axios'

export const getPostList = async () => {
  const result: PostType[] = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .catch((error) => {
      console.error(error)
      return []
    })
  return result
}

export const useQueryPosts = () => {
  return useQuery({
    queryKey: 'postList',
    queryFn: getPostList,
    staleTime: 6000
  })
}
