import { ICode } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps {
  codes: {
    allCodes: ICode[],
    registerCodes: ICode[],
    pendingCodes: ICode[],
  }

  error: {
    message: string,
    isError: boolean
  }

  // Methods
  getCodes: () => Promise<void>
}

export const CodeContext = createContext({} as ContextProps)