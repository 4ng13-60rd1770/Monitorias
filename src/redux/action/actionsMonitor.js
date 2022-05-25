import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { monitores } from "../types/types"

export const addMonitor = (monitor)=>{
  return async(dispatch)=>{
    await addDoc(collection(db, 'monitores'), monitor)
    .then(() =>{
        dispatch(registerMonitor(monitor))
    })
    .catch(error=>{
        console.log(error)
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


