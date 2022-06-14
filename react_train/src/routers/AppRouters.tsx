import { BrowserRouter, Routes, Route } from 'react-router-dom'
import type { FC } from 'react'

// routers
import Layout from '@/components/shared/Layout'
import Task from '@/pages/Task'
import Post from '@/pages/Post'
import PostDetail from '@/pages/PostDetail'

const AppRouters: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Task />} />
          <Route path="post" element={<Post />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters
