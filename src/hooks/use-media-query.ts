'use client'

import { useState, useEffect } from 'react'

export const useMediaQuery = (query: string): boolean => {
    const isClient = typeof window !== 'undefined'

    const [matches, setMatches] = useState(
        isClient ? window.matchMedia(query).matches : false
    )

    useEffect(() => {
        if (!isClient) {
            return
        }
        const mediaQueryList = window.matchMedia(query)
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        setMatches(mediaQueryList.matches)

        mediaQueryList.addEventListener('change', listener)

        return () => {
            mediaQueryList.removeEventListener('change', listener)
        }
    }, [query, isClient])

    return matches
}
