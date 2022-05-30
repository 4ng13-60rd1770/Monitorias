import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { monitorias } from "../types/typesMonitorias"


export const getMonitorias = () => {
    return async(dispatch) =>{
        const querySnapshot = await getDocs(collection(db, "monitorias"));
        let dataM = []
        querySnapshot.forEach((doc) => {
            dataM.push(doc.data())
        })
        dispatch(getMonitoresAsync(dataM));
    }
}

const getMonitoresAsync = (data) => {
    return {
        type: monitorias.get,
        payload: data
    }
}


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

export const registerMonitorias=(monitoria)=>{
    return{
        type:monitorias.register,
        payload:monitoria
    }
}

