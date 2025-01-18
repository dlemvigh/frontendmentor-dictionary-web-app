import { useState } from 'react'
import { Header } from './components/Header'
import { SearchInput } from './components/inputs/SearchInput'
import { UIContextProvider } from './context/UIContext'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <UIContextProvider>
        <div style={{ display: 'flex', flexDirection: "column", gap: "3rem" }}>
          <Header />
          <SearchInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for any word..."
        />
        </div>
      </UIContextProvider>
    </>
  )
}

export default App
