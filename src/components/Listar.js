import React, { useEffect } from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMonitor, getMonitores } from '../redux/action/actionsMonitor';
import { CardCedula, CardCelular, CardCorreo, CardNombre, CardPrograma, CardSemestre, ConstainerCard, Editar, Eliminar } from '../styles/CardStyles'


const Listar = () => {
    const dispatch = useDispatch();

    const {monitores} = useSelector(store => store.monitor);
    console.log(monitores)

    useEffect(()=>{
        dispatch(getMonitores());
    },[dispatch])
  return (

    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    {
        monitores.map((m, index)=>(
            <section key={index}>
            <ConstainerCard>

            <CardPrograma>
               {m.programa}
            </CardPrograma>

            <CardNombre>
               {m.name}
            </CardNombre>

            <CardSemestre>
                Semestre:{m.semestre}
            </CardSemestre>

            <CardCedula>
                Cedula:{m.cedula}
            </CardCedula>

            <CardCelular>
                Celular:{m.celular}
            </CardCelular>

            <CardCorreo>
                {m.email}
            </CardCorreo>
            <Eliminar onClick={()=>dispatch(deleteMonitor(m.cedula))}><FaTrashAlt/></Eliminar>
            <Editar><FaPencilAlt/></Editar>
        </ConstainerCard>

            </section>
        ))
    }

    </div>
  )
}

export default Listar