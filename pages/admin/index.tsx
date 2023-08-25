import { AuthLayout } from '@/components'
import React from 'react'

const AdminPage = () => {
  return (
    <AuthLayout title='Inicia Sesion' desc='Pagina para que los administradores puedan iniciar sesion y ver los usuarios registrados'>
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

export default AdminPage