import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Campos, Formulario, FormWrapper, Inicio, Titulo } from '../styles/registerStyles'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { registerAsync } from '../redux/action/actionsLogin'
const Register = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValue:{
            nombre:"",
            email:"",
            password:"",
            passwordrepeat:""

        },
        onSubmit:(data)=>{
            dispatch(registerAsync(data))
        },
            validationSchema: Yup.object({
                nombre: Yup.string()
                .min(2, 'El nombre es muy corto')
                .max(50,'El nombre es muy largo')
                .required('Este campo es requerido'),

                email:Yup.string().email('El email debe de ser tipo abcdf@gmail.com').required('Este campo es requerido'),
                password:Yup.string()
                .min(6,'Clave muy corta')
                .max(10, 'Clave muy larga')
                .required('Este campo es requerido').oneOf([Yup.ref('passwordrepeat')], 'Las Contraseñas no coinciden'),
                passwordrepeat:Yup.string()
                .min(6, 'Clave muy corta')
                .max(10, 'Contraseña muy larga')
                .required('Este campo es requerido').oneOf([Yup.ref('password')], 'Las Contraseñas no coinciden')
            })
    });

  return (
    <>
        <FormWrapper>
           
                <Formulario onSubmit={formik.handleSubmit}>
                <Titulo>
                <img className="logo" src = "https://res.cloudinary.com/dgzfc4clj/image/upload/v1653247137/Logo_iha7gc.png" style={{width:'100px', display:'flex',align:'center'}} alt='logo'/>
                <h2>Registrate a Monitorias</h2>
                </Titulo>
                <Campos type="text" name= "nombre" placeholder="Nombre & Apellido" autoComplete='"off' onChange={formik.handleChange}></Campos>
                <Campos type="email" name= "email" placeholder="Correo Electronico" autoComplete='"off' onChange={formik.handleChange}></Campos>
                
                <Campos type="password" name= "password" placeholder="Contraseña" autoComplete="off" onChange={formik.handleChange}></Campos>
                <Campos type="password" name= "passwordrepeat" placeholder="Contraseña" autoComplete='"off' onChange={formik.handleChange}></Campos>
                <Inicio type = 'submit'>Registro</Inicio>
                <Link to="/login"><h5>Regresar</h5></Link>
            </Formulario>
            
           
        </FormWrapper>
    </>
  )
}

export default Register