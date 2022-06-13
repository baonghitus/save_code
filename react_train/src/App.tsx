import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
// import css
import '@/styles/App.scss'

// routers
import Layout from '@/components/shared/Layout'
import Task from '@/pages/Task'
import Post from '@/pages/Post'
import PostDetail from '@/pages/PostDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Task />} />
            <Route path="post" element={<Post />} />
            <Route path="/post/:postId" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
