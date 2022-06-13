import type { FC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Post: FC = () => {
  return (
    <div className="content">
      <div className="text-3xl font-bold">POST</div>
      <Link className="mt-2 flex flex-col items-center justify-center" to="/">
        <ChevronDoubleLeftIcon className="h-5 w-5 text-blue-500 cursor-pointer" />
        <p>TASK PAGE</p>
      </Link>
    </div>
  )
}

export default Post
