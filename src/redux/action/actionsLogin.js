import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore";
import { db, facebook, google } from "../../firebase/firebaseConfig";
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

export const registerAsync = (email,pass,nombre)=>{
    return async (dispatch)=>{
        const auth = getAuth();
        try{
            const newUsr = await createUserWithEmailAndPassword(auth, email,pass)
            const results = await setDoc(doc(collection(db,"usuarios"),newUsr.user.uid),{
                nombre,
                email
            })
            alert('Usuario registrado exitosamente')
            dispatch(register(newUsr.user.uid, nombre, email))
        }
        catch(error){
            alert('El email ya esta en uso')
        }
        

    }
}





const register = (email,pass,name)=>{
    return{
        type:types.register,
        payload:{
            email,pass,name
        }
    }
}