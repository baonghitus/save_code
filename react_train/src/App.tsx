import { QueryClient, QueryClientProvider } from 'react-query'

// routers
import AppRouters from '@/routers/AppRouters'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRouters></AppRouters>
      </QueryClientProvider>
    </div>
  )
}

export default App
