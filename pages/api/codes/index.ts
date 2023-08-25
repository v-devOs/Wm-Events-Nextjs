import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  

  switch (req.method) {
    case 'GET':
      return getCodesFromDatabase( req, res )
    case 'POST':
      return setCodesInDatabase( req, res )
    case 'DELETE':
      return deleteCodesFromDatabase( req, res )
  
    default:
      return res.status(400).json({ message: 'Bad request' })
  }
}

const getCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  throw new Error('Function not implemented.')
}


const setCodesInDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  throw new Error('Function not implemented.')
}


const deleteCodesFromDatabase = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  throw new Error('Function not implemented.')
}
