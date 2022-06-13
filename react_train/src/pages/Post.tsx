import type { FC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useQueryPosts } from '@/hooks/usePost'

const Post: FC = () => {
  const { status, data: postList } = useQueryPosts()

  return (
    <div className="content">
      <div className="text-3xl font-bold">POST</div>
      <div>
        <li>
          {postList?.map((post) => (
            <li key={post.id} className="my-3">
              <Link to={`/post/${post.id}`} className="underline">
                <span className="font-bold">{post.title}</span>
              </Link>
            </li>
          ))}
        </li>
      </div>
      <div className="grid grid-cols-1 gap-40"></div>
      <Link className="mt-2 flex flex-col items-center justify-center" to="/">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>TASK PAGE</p>
      </Link>
    </div>
  )
}

export default Post
