import { Header } from './components/Header'
import { Main } from './components/Main'
import { UIContextProvider } from './context/UIContext'

function App() {

  return (
    <>
      <UIContextProvider>
        <Header />
        <Main />
      </UIContextProvider>
    </>
  )
}

export default App
