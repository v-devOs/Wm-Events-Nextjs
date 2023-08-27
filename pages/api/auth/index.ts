import { credentials } from '@/utils'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string } | { isValidCredentials: boolean }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'POST':
      return checkCredentials( req, res )
  
    default:
      return res.status(400).json({message: 'Bad request'})
  }
}

const checkCredentials = (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { password, verifySuperAdmin } = req.body as { password: string, verifySuperAdmin: string }

  const resp = credentials.checkCredentials(password, verifySuperAdmin)

  return resp
    ? res.status(200).json({ isValidCredentials: true })
    : res.status(400).json({ isValidCredentials: false })
}
