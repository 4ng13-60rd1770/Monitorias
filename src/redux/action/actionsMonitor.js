import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { monitores } from "../types/types"

export const addMonitor = (monitor)=>{
  return async(dispatch)=>{
    await addDoc(collection(db, 'monitores'), monitor)
    .then(() =>{
        dispatch(registerMonitor(monitor))
        alert('agregado')
    })
    .catch(error=>{
        alert('error')
    })
  }

}



export const registerMonitor = (monitor)=>{
    return{
        type: monitores.register,
        payload:monitor
    }
}

export const getMonitores = () => {
    return async(dispatch) =>{
        const querySnapshot = await getDocs(collection(db, "monitores"));
        let dataA = []
        querySnapshot.forEach((doc) => {
            dataA.push(doc.data())
        })
        dispatch(getMonitoresAsync(dataA));
    }
}

const getMonitoresAsync = (data) => {
    return {
        type: monitores.get,
        payload: data
    }
}


export const deleteMonitor =(cedula)=>{
    return async(dispatch)=>{

        const collectionListar = collection(db, "monitores")
        const q = query(collectionListar, where('cedula', '==', cedula))
        const datosQ = await getDocs(q)
        console.log(datosQ)
        datosQ.forEach(docu => {
            deleteDoc(doc(db, 'monitores', docu.id))

        })
    }
}


export const deleteMonitoresAsync = (cedula)=>{
    return{
        type: monitores.delete,
        payload:cedula
    }
}