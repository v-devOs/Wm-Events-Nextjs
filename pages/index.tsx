import React, { useEffect, useState } from 'react'
import { AuthLayout } from '@/components'
import { useForm } from 'react-hook-form'


type FormData = {
  name: string,
  code: string
}


const HomePage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()


  const onSubmitData = ( data: FormData ) => {
    console.log({data})
  }


  return (
    <AuthLayout title='Registra tu codigo' desc='Pagina encargada de registrar los codigos de las preventas'>
      <form onSubmit={ handleSubmit( onSubmitData )}>
        <div className="container-form-inputs">

          <div className="user-box">
            <input 
              autoFocus 
              placeholder='WM-Events'
              {
                ...register('name', {
                  required: 'Este campo es requerido',
                  minLength: { value: 18, message: 'Ingresa nombre y apellidos'}
                })
              }
            />
            <label>Nombre y Apellidos:</label>
            <span 
              style={{ display: errors.name?.message ? 'flex' : 'none'}}
              className='chip-error flex '>
              <p>
              { errors.name?.message }
              </p>
            </span>
          </div>

          <div className="user-box">
            <input 
              placeholder='12345'
              {
                ...register('code', {
                  required: 'Este campo es requerido',
                  maxLength: { value: 5, message: 'El codigo debe de ser de 5 digitos'},
                  minLength: { value: 5, message: 'El codigo debe de ser de 5 digitos'}
                })
              }
            />
            <label>Codigo de preventa:</label>
            <span 
              style={{ display: errors.code?.message ? 'flex' : 'none'}}
              className='chip-error' >
              { errors.code?.message}
            </span>
          </div>
        </div>

        <div className="container-form-btn">
          <button
            type='submit'
            >
              Registrar codigo
            </button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default HomePage