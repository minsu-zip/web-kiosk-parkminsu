import React, { useEffect, useRef } from 'react'

const useClickAway = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleEvent = (e: MouseEvent) => {
      !element.contains(e.target as HTMLDivElement) && handler()
    }

    document.addEventListener('mousedown', handleEvent)

    return () => document.removeEventListener('mousedown', handleEvent)
  }, [])

  return ref
}

export default useClickAway
