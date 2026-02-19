'use client'

import { useEffect, useRef, useState, RefObject } from 'react'

interface Options {
  threshold?: number
  once?: boolean
}

export function useInView<T extends Element = Element>(
  ref: RefObject<T>,
  options: Options = {}
): boolean {
  const { threshold = 0, once = true } = options
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observerRef.current?.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    observerRef.current.observe(ref.current)

    return () => observerRef.current?.disconnect()
  }, [ref, threshold, once])

  return inView
}
