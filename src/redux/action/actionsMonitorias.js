import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { monitorias } from "../types/typesMonitorias"



export const addMonitorias =(monitoria)=>{
    return async(dispatch) =>{
        await addDoc(collection(db,'monitorias'),monitoria)
        .then(()=>{
            dispatch(registerMonitorias(monitoria))
            alert('agregado')
        })
        .catch (error=>{
            console.log(error)
        })
    }
}

export const registerMonitorias=()=>{
    return{
        type:monitorias.add,
        payload:monitorias
    }
}