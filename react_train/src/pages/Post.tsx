import type { FC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useQueryPostList } from '@/hooks/usePost'
import Loading from '@/components/shared/Loading'

const Post: FC = () => {
  const { status, data: postList } = useQueryPostList()

  if (status === 'loading' || status === 'idle') return <Loading />
  if (status === 'error') return <div className="content">Error</div>

  return (
    <div className="content">
      <div className="text-3xl font-bold pageTitle">POST</div>
      <div className="grid grid-cols-1 px-10 pt-10">
        {postList?.map((post) => (
          <ul key={post.id} className="my-3 text-left ">
            <Link to={`/post/${post.id}`} className="underline">
              <span className="font-bold">{post.title}</span>
            </Link>
          </ul>
        ))}
      </div>
      <Link className="mt-10 flex flex-col items-center justify-center" to="/">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>TASK PAGE</p>
      </Link>
    </div>
  )
}

export default Post
