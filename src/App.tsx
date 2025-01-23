import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { UIContextProvider } from './context/UIContext'
import classes from './App.module.css'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UIContextProvider>
          <div className={classes.layout}>
            <Header />
            <Main />
          </div>
        </UIContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
