import { useQuery } from "@tanstack/react-query";
import { WordType } from "./DATA";

interface DictionaryApiProps {
    word: string;
}

export type DictionaryApiData = WordType


export interface DictionaryApiError {
    title: string
    message: string
    resolution: string
}

async function fetchDictionaryApi(word: string) {    
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();

    if (!res.ok) {
        throw data as DictionaryApiError
    }

    return data as WordType
}

export function useDictionaryApi({ word }: DictionaryApiProps) {
    return useQuery<DictionaryApiData, DictionaryApiError>({
        queryKey: ["dictionary", word],
        queryFn: () => fetchDictionaryApi(word),
        enabled: !!word,
        retry: 0,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })
}