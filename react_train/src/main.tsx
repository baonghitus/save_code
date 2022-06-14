import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

// import css
import '@/styles/index.scss'

// routers
import AppRouters from '@/routers/AppRouters'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRouters></AppRouters>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
)
