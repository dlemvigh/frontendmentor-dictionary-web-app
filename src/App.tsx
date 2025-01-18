import { Header } from './components/Header'
import { UIContextProvider } from './context/UIContext'

function App() {

  return (
    <>
      <UIContextProvider>
        <Header />
      </UIContextProvider>
    </>
  )
}

export default App
