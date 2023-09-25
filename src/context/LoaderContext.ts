import { createContext } from 'react'

type LoaderContextProps = {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoaderContext = createContext<LoaderContextProps>({
  loading: false,
  setLoading: () => {},
})

export default LoaderContext
