import { Header } from './components/Header'
import { DarkModeProvider } from './context/DarkModeContext'

function App() {

  return (
    <>
      <DarkModeProvider>
        <Header />
      </DarkModeProvider>
    </>
  )
}

export default App
