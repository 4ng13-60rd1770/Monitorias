import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  CamposRegister,
  FormularioRegister,
  FormWrapperRegister,
  Registro,
  TituloRegister,
} from "../styles/registerStyles";
import { registerEmail } from "../redux/action/actionsLogin";


const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            passwordrepeat:""
        },

        onSubmit: (data)=>{
            dispatch(registerEmail(data))
        },
        validationSchema : Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().oneOf([Yup.ref('passwordrepeat')], 'Las contraseñas no coinciden'),
            passwordrepeat:Yup.string().required().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        })
    });

  return (
    <>
      <FormWrapperRegister>
        <FormularioRegister onSubmit={formik.handleSubmit}>
          <TituloRegister>
            <img
              className="logo"
              src="https://res.cloudinary.com/dgzfc4clj/image/upload/v1653247137/Logo_iha7gc.png"
              style={{ width: "100px", display: "flex", align: "center" }}
              alt="logo"
            />
            <h2>Registrate a Monitorias</h2>
          </TituloRegister>
          <CamposRegister
            type="name"
            name="name"
            placeholder="Nombre & Apellido"
            autoComplete='"off'
            onChange={formik.handleChange}
          />
          <CamposRegister
            type="email"
            name="email"
            placeholder="Correo Electronico"
            autoComplete='"off'
            onChange={formik.handleChange}
          />
          <CamposRegister
            type="password"
            name="password"
            placeholder="Contraseña"
            autoComplete="off"
            onChange={formik.handleChange}
          />
          <CamposRegister
            type="password"
            name="passwordrepeat"
            placeholder="Contraseña"
            autoComplete='"off'
            onChange={formik.handleChange}
          />
          <Registro type="submit">Registro</Registro>
          <Link to="/login">
            <h5>Regresar</h5>
          </Link>
        </FormularioRegister>
      </FormWrapperRegister>
    </>
  );
};

export default Register;
