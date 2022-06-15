import { useQuery } from 'react-query'
import { getPost, getPostList, getUser } from '@/api/index'

export const useQueryPostList = () => {
  return useQuery({
    queryKey: 'postList',
    queryFn: getPostList,
    staleTime: 6000
  })
}

export const useQueryPost = (postId: string) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    staleTime: 6000
  })
}

export const useQueryUser = (userId: number | undefined) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    staleTime: 6000,
    enabled: !!userId
  })
}
