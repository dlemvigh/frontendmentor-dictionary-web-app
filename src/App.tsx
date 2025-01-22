import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { UIContextProvider } from './context/UIContext'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UIContextProvider>
          <Header />
          <Main />
        </UIContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
