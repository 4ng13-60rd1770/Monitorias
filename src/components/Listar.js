import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteMonitor, getMonitores } from "../redux/action/actionsMonitor";
import {
  CardCedula,
  CardCelular,
  CardCorreo,
  CardNombre,
  CardPrograma,
  CardSemestre,
  ConstainerCard,
  Editar,
  Eliminar,
} from "../styles/CardStyles";
import Edit from "./Editar";

const Listar = () => {
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false);

    const [datos, setDatos] = useState([]);


  const { monitores } = useSelector((store) => store.monitor);

  useEffect(() => {
    dispatch(getMonitores());
  }, [dispatch, monitores]);

  const editar = (monitor) => {
    setDatos(monitor);
    setModal(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {monitores.map((m, index) => (
        <section key={index}>
          <ConstainerCard>
            <CardPrograma>{m.programa}</CardPrograma>

            <CardNombre>{m.name}</CardNombre>

            <CardSemestre>Semestre:{m.semestre}</CardSemestre>

            <CardCedula>Cedula:{m.cedula}</CardCedula>

            <CardCelular>Celular:{m.celular}</CardCelular>

            <CardCorreo>{m.email}</CardCorreo>
            <Eliminar onClick={() => dispatch(deleteMonitor(m.cedula))}>
              <FaTrashAlt />
            </Eliminar>

            <Editar onClick={() => editar(m)}>
              <FaEdit />
            </Editar>
          </ConstainerCard>
        </section>
      ))}
       { modal ? (<Edit data={datos} setModal={modal} />) : "" }
    </div>
  );
};

export default Listar;
