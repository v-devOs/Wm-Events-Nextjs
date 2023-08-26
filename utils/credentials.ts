export const checkCredentials =  ( password: string, verifySuperAdmin: boolean ) => {
  
  let isValidCredeantials = false

  const passwordToCompare = verifySuperAdmin
    ? process.env.ADMIN_PASSWORD || ''
    : process.env.SUPER_ADMIN_PASSWORD || ''

  if( passwordToCompare === '')
    return null

  return passwordToCompare === password 
}