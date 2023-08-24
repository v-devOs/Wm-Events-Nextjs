import { AuthLayout } from '@/components'
import React from 'react'

const SuperAdminPage = () => {
  return (
    <AuthLayout title='Inicia Sesion' desc='Pagina para que los super administradores puedan crear y borrar los codigos ya creados'>
      <form>
        <div className="container-form-inputs">
          <div className="user-box">
            <input autoFocus placeholder='WM-Events' type='password'/>
            <label>Password</label>
          </div>
          
        </div>

        <div className="container-form-btn">
          <button type='submit'>Iniciar sesion</button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default SuperAdminPage