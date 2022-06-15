import type { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useQueryPost, useQueryUser } from '@/hooks/usePost'
import Loading from '@/components/shared/Loading'

const PostDetail: FC = () => {
  const { postId } = useParams() as { postId: string }
  const { status: postStatus, data: post } = useQueryPost(postId)

  const userId = post?.userId
  const { status: userStatus, data: user } = useQueryUser(userId)

  if (postStatus === 'loading' || postStatus === 'idle' || userStatus === 'loading' || userStatus === 'idle')
    return <Loading />
  if (postStatus === 'error' || userStatus === 'error') return <div className="content">Error</div>

  return (
    <div className="content">
      <div className="text-3xl font-bold pageTitle">POST DETAIL</div>
      <div className="text-lg max-w-prose mx-auto mt-5 text-center tracking-tight leading-8 font-extrabold">
        <span className="mt-2 block text-gray-900 sm:text-2xl">{post?.title}</span>
        <span className="mt-2 block text-gray-600 sm:text-xl">User: {user?.username}</span>
      </div>
      <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>{post?.body}</p>
      </div>
      <Link className="mt-10 flex flex-col items-center justify-center" to="/post">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>POST PAGE</p>
      </Link>
    </div>
  )
}

export default PostDetail
