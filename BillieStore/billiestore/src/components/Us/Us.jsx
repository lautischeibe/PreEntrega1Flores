import React from 'react'
import './Us.css'
import { useForm } from 'react-hook-form'

const Us = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className='container'>
            <h1 className='main-title'>Nosotros</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
                <input type="email" placeholder='Ingresa tu email' {...register("email")}/>

                <button type='submit'>Enviar</button>
        
            </form>
        </div>
    )
}

export default Us 