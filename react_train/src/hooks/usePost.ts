import { useQuery } from 'react-query'
import { getPost, getPostList, getUser } from '@/api/index'

export const useQueryPosts = () => {
  return useQuery({
    queryKey: 'postList',
    queryFn: getPostList,
    staleTime: 6000
  })
}

export const useQueryPost = (postId: string) => ({
  queryKey: ['post', postId],
  queryFn: getPost(postId),
  staleTime: 6000
})

export const useQueryUser = (userId: number | undefined) => ({
  queryKey: ['user', userId],
  queryFn: () => getUser(userId),
  staleTime: 6000,
  enabled: !!userId
})
