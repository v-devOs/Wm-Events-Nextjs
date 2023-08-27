export const checkCredentials =  ( password: string, verifySuperAdmin: string ) => {
  
  const passwordToCompare = verifySuperAdmin !== 'yes'
    ? process.env.ADMIN_PASSWORD || ''
    : process.env.SUPER_ADMIN_PASSWORD || ''

  if( passwordToCompare === '')
    return null

  return passwordToCompare === password 
}