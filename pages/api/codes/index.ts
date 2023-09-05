import type { NextApiRequest, NextApiResponse } from 'next'
import { ICode } from '@/interfaces'

type Data = { message: string } | ICode[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  switch (req.method) {
    case 'GET':
      return getCodesFromDatabase( req, res )
    case 'POST':
      return setCodesInDatabase( req, res )
    case 'PUT':
      return updateCodeInDatabse( req, res )
    case 'DELETE':
      return deleteCodesFromDatabase( req, res )
  
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  
}


const setCodesInDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

  
}


const updateCodeInDatabse = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  
}

const deleteCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  
}