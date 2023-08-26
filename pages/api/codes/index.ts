import type { NextApiRequest, NextApiResponse } from 'next'
import { ICode } from '@/interfaces'
import { codes } from '@/database'

type Data = { message: string } | ICode[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  switch (req.method) {
    case 'GET':
      return getCodesFromDatabase( req, res )
    case 'POST':
      return setCodesInDatabase( req, res )

    case 'PATCH':
      return aupdateCodeInDatabse( req, res )
    case 'DELETE':
      return deleteCodesFromDatabase( req, res )
  
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const data = await codes.getCodes() as ICode[] 

  return data
    ? res.status(200).json( data )
    : res.status(400).json({ message: 'Error al obtener los codigos' })
}


const setCodesInDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { numberOfCodesToCreate } = req.body as { numberOfCodesToCreate: number}
  const codesToSave = await codes.createCodes( numberOfCodesToCreate )

  if( !codesToSave ) return res.status(400).json({message: 'Error al generar los codigos'})

  const codesSaved = await codes.saveCodes( codesToSave )

  return codesSaved
    ? res.status(200).json( codesSaved )
    : res.status(400).json({ message: 'Error al guardar los codigos' })
}


const deleteCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const resp = await codes.deleteAllCodes()

  return resp
   ? res.status(200).json({ message: 'Codigos eliminados correctamente' })
   : res.status(500).json({ message: 'Error del servidor al eliminar los codigos'})
}

const aupdateCodeInDatabse = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { code, name } = req.body as { code: string, name: string }

  const resp = await codes.updateCode( code, name )

  return resp
    ? res.status(200).json({ message: 'Codigo actualizado correctamente' })
    : res.status(400).json({ message: 'Error al actualizar codigo' })
}

