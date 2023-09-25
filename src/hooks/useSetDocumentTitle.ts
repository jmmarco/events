import { useEffect } from 'react'
import { VITE_APP_NAME } from '../constants'

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${VITE_APP_NAME}`
    } else {
      document.title = VITE_APP_NAME
    }
  }, [title])
  return null
}
