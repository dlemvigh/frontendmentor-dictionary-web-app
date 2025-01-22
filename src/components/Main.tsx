import { useState } from 'react'
import { SearchInput } from './inputs/SearchInput'

import { DictionaryResult } from './dictionary/DictionaryResult'
import { useForm } from 'react-hook-form'
import { useDictionaryApi } from '../hooks/useDictionaryApi'
import { DictionaryLookupError } from './dictionary/DictionaryLookupError'

type FormValues = {
    search: string
}

const DEFAULT_VALUE = ""

export function Main() {
    const [search, setSearch] = useState(DEFAULT_VALUE)

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: { search: DEFAULT_VALUE }
    })
    const { data, error, isSuccess, isError } = useDictionaryApi({ word: search })

    const onSubmit = handleSubmit((data: FormValues) => {
        setSearch(data.search)
    })

    return (
        <main>
            <form onSubmit={onSubmit}>
                <SearchInput
                    {...register('search', { required: "Whoops, can't be empty..." })}
                    placeholder="Search for any word..."
                    error={errors.search?.message}
                />

                {isSuccess && <DictionaryResult data={data} />}
                {isError && <DictionaryLookupError error={error} />}    
            </form>

        </main>
    )
}