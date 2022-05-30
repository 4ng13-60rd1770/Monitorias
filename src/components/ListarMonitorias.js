import React, { useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector} from "react-redux";
import { getMonitorias } from "../redux/action/actionsMonitorias";
import { CardDia, CardMonitores, CardPrograma, CardSalon, ConstainerCard, Editar, Eliminar } from "../styles/CardsMonitoriasStyled";

const ListarMonitorias = () => {
  const dispatch = useDispatch();

  const { monitorias} = useSelector((store) => store.monitorias);
  console.log(monitorias)

  useEffect(() => {
    dispatch(getMonitorias());
  }, [dispatch,monitorias]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {monitorias.map((n,index) => (
        <section key={index}>
          <ConstainerCard>
            <CardPrograma>{n.programa}</CardPrograma>

            <CardMonitores>{n.monitor}</CardMonitores>

            <CardDia>Dia:{n.date}</CardDia>

            <CardSalon>Salon:{n.salon}</CardSalon>

            <Eliminar>
              <FaTrashAlt />
            </Eliminar>

            <Editar>
              <FaEdit />
            </Editar>
          </ConstainerCard>
        </section>
      ))}
    </div>
  );
};

export default ListarMonitorias;
