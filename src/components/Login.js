import React from 'react'
import { Campos, Facebook, Formulario, Google, Inicio, Redes, StyledFormWrapper, Titulo } from '../styles/loginStyles'
import { FaFacebookF, FaGoogle} from "react-icons/fa";
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginEmailPassword, LoginFacebook, LoginGoogle } from '../redux/action/actionsLogin';
import { Link } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch();

    const [formValue,handleInputChange,rest]= useForm({
        email:'',
        password:''
    })
    const {email, password}=formValue;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(loginEmailPassword(email, password));
        
    }
    const handleGoogle = ()=>{
    dispatch(LoginGoogle());
}

const handleFacebook = () => {
    dispatch(LoginFacebook() )
}
  return (
    <StyledFormWrapper>
        <Formulario onSubmit={handleLogin}>
            <Titulo>
                <img className="logo" src = "https://res.cloudinary.com/dgzfc4clj/image/upload/v1653247137/Logo_iha7gc.png" style={{width:'100px', display:'flex',align:'center'}} alt='logo'/>
                <h2>Bienvenido a  Monitorias</h2>
            </Titulo>
            <Campos type="email" name= "email" placeholder="Correo Electronico" autoComplete='"off' value={email} onChange={handleInputChange}></Campos>
            <Campos type="password" name= "password" placeholder="Contraseña" autoComplete='"off' value = {password} onChange={handleInputChange}></Campos>
            <Inicio type = 'submit'>Iniciar Sesión</Inicio>
            
               <h5> No tienes cuenta Ingrese con</h5>
            <Redes>
            <Google onClick={handleGoogle}>
               <FaGoogle/>oogle
            </Google>
            <Facebook onClick={handleFacebook}>
                <FaFacebookF/>acebook
            </Facebook>
            </Redes>
            <Link to="/register"><h5>Registrate</h5></Link>
                
        </Formulario>

    </StyledFormWrapper>
  )
}

export default Login