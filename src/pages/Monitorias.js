import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buscador from "../components/Buscador";
import { addMonitor } from "../redux/action/actionsMonitor";
import { CamposMonitoresSelect } from "../styles/monitoresStyles";
import {
  Agregar,
  CamposMonitorias,
  FormularioMonitorias,
  FormWrapperMonitorias,
} from "../styles/monitoriasStyles";

const Monitorias = () => {

    const { monitores } = useSelector( state => state.monitor)

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          materia: '',
          monitor: '',
          date: '',
          salon: ''
        },
        onSubmit: (monitoria)=> {
            console.log(monitoria)
        dispatch(addMonitor(monitoria))
        }
      })

  return (
    <div style={{ padding: "50px 0px 0px 370px" }}>
          <Buscador/>
      <FormWrapperMonitorias>
        <FormularioMonitorias>
          <h2>Monitorias</h2>
          <CamposMonitorias
            type="text"
            name="materia"
            placeholder="Materia"
            autoComplete='"off'
          />
          <CamposMonitoresSelect
            type="text"
            name="monitor"
            placeholder="Semestre"
            autoComplete='off'
            onChange={formik.handleChange}
            defaultValue='default'
          >
          <option value='default' disabled>Monitores</option>
            {
                monitores.map( (sem, i) => (
                <option value={sem?.name} key={i}>{sem?.name}</option>
              ))
            }
          </CamposMonitoresSelect>
          <CamposMonitorias
            type="date"
            name="date"
            placeholder="Fecha"
            autoComplete='"off'
          />
          <CamposMonitorias
            type="text"
            name="salon"
            placeholder="Salón"
            autoComplete='"off'
          />
          <Agregar type="submit">Agregar Monitorias</Agregar>
        </FormularioMonitorias>
      </FormWrapperMonitorias>
    </div>
  );
};

export default Monitorias;
