import { CodeState } from './';
import { ICode } from '@/interfaces';

type CodeActionType = 
| { type: '[Code] - Set Codes', payload: ICode[]} 
| { type: '[Code] - Set Error', payload : string} 

export const codeReducer = ( state: CodeState, action: CodeActionType ): CodeState => {
  
  switch (action.type) {
    case '[Code] - Set Codes':
      return{
        ...state,
        codes: {
          allCodes: action.payload,
          registerCodes: action.payload.filter( c => c.attendace ),
          pendingCodes: action.payload.filter( c => !c.attendace )
        }
      }
    
    case '[Code] - Set Error':
      return {
        ...state,
        error: {
          message: action.payload,
          isError: true
        }
      }

    default:
      return state;
  }
}