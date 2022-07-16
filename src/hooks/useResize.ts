import { useCallback, useRef } from 'react'

const useResize = resizeCallback => {
  const ref = useRef()
  const observer = useRef(new ResizeObserver(entries => resizeCallback(entries[0].target)))

  const setRef = useCallback(node => {
    // Stop observing current node
    if (ref.current) {
      observer.current.unobserve(ref.current)
    }

    // Attach the resize observer
    if (node) {
      observer.current.observe(node)
    }

    ref.current = node
  }, [])

  return setRef
}

export default useResize
