import { FC, ReactNode, useReducer } from 'react';
import { CodeContext, codeReducer } from './';
import { ICode } from '@/interfaces';
import { wmApi } from '@/api';

interface Props {
  children: ReactNode
}

export interface CodeState {
  codes: {
    allCodes: ICode[],
    registerCodes: ICode[],
    pendingCodes: ICode[]
  },

  error: {
    message: string,
    isError: boolean
  }
}

const Code_INITIAL_STATE : CodeState = {
  codes: {
    allCodes: [],
    registerCodes: [],
    pendingCodes: [],
  },

  error: {
    message: '',
    isError: false
  }
}

export const CodeProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(codeReducer, Code_INITIAL_STATE)

  
  const getCodes = async () => {
    const { data } = await wmApi.get<ICode[]>('/codes')

    if( !data ){
      dispatch({ type: '[Code] - Set Error', payload: 'Error al obtener los codigos' })
    }

    dispatch({ type: '[Code] - Set Codes', payload: data })
  }

  return (
    <CodeContext.Provider value={{
      ...state,

      // Methods
      getCodes,
    }}>
    { children }
    </CodeContext.Provider>
  )
}