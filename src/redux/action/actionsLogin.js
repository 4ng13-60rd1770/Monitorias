import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore";
import {  db, facebook, google } from "../../firebase/firebaseConfig";
import { types } from "../types/types"

export const loginEmailPassword = (email,password)=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(LoginSync(user.uid,user.displayname)
            )
            console.log('Bienvenido');
        })
        .catch (e =>{
            console.log(e);
            alert('el usuario no existe')
        })

    }
}

export const LoginFacebook = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth,facebook)
        .then(({user})=>{
            dispatch(LoginSync(user.uid,user.displayname)
            )
            console.log('Bienvenido')
        })
        .catch(e=>{
            console.log(e);
            
        })
    }
}



export const LoginGoogle = () =>{
    return(dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user})=>{
            dispatch(LoginSync(user.uid,user.displayname))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}





export const LoginSync = (id, displayname)=>{
    return {
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}

export  const  registerEmail = ({ name, email, password })=>{
    return async  ( dispatch) => {
        const auth = getAuth( );

        try {
           const newUser = await createUserWithEmailAndPassword(auth,email,password)
           const results = await setDoc(doc(collection(db,"usuarios"),newUser.user.uid), {
               name,
               email
           })
           alert ("usuario registrado")
           dispatch(register(newUser.user.uid,name,email))
        } catch (error) {
            alert('usuario en uso ')
        }
    };
}
const register = (id,name,email ) => {
   return {
       type: types.register,
       payload: { id, name, email}
      }
}