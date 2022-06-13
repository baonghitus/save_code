import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

const PostDetail: FC = () => {
  return (
    <div className="">
      <div className="text-3xl font-bold">POST DETAIL</div>
      <Link className="mt-2 flex flex-col items-center justify-center" to="/post">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>POST PAGE</p>
      </Link>
    </div>
  )
}

export default PostDetail
