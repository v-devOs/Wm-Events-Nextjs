import { AuthLayout } from '@/components'
import React from 'react'

const HomePage = () => {
  return (
    <AuthLayout title='Registra tu codigo' desc='Pagina encargada de registrar los codigos de las preventas'>
      <form>
        <div className="container-form-inputs">
          <div className="user-box">
            <input autoFocus placeholder='WM-Events' />
            <label>Nombre y Apellidos</label>
          </div>
          <div className="user-box">
            <input placeholder='12345' ></input>
            <label>Codigo de preventa</label>
          </div>
        </div>

        <div className="container-form-btn">
          <button type='submit' className='border-radius-in'>Registrar codigo</button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default HomePage