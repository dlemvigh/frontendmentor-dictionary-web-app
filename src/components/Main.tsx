import { useCallback } from 'react'
import { SearchInput } from './inputs/SearchInput'

import { DATA } from './DATA'
import { DictionaryResult } from './dictionary/DictionaryResult'

export function Main() {
    const dictionaryResult = DATA

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()
        // TODO get search text from submit event
        // TODO fetch data from API
        // TODO set data to state
    }, [])

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <SearchInput
                    name="search"
                    // value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    placeholder="Search for any word..."
                />
                <DictionaryResult data={dictionaryResult} />
            </form>

        </main>
    )
}