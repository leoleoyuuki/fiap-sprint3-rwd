import { createContext, useContext, useState } from 'react'

const ScrollLockContext = createContext()

export function ScrollLockProvider({ children }) {
  const [scrollLocked, setScrollLocked] = useState(false)

  const lockScroll = () => {
    document.body.style.overflow = 'hidden'
    setScrollLocked(true)
  }

  const unlockScroll = () => {
    document.body.style.overflow = 'visible'
    setScrollLocked(false)
  }

  return (
    <ScrollLockContext.Provider
      value={{ scrollLocked, lockScroll, unlockScroll }}
    >
      {children}
    </ScrollLockContext.Provider>
  )
}

export function useScrollLock() {
  return useContext(ScrollLockContext)
}
