import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buscador from "../components/Buscador";
import { addMonitorias } from "../redux/action/actionsMonitorias";
import {
  Agregar,
  CamposMonitorias,
  CamposMonitoriasSelect,
  FormularioMonitorias,
  FormWrapperMonitorias,
} from "../styles/monitoriasStyles";

const Monitorias = () => {
    const salones = [109,112,113,114,115,220,222,308,313,414,431,506,507,546];
    
    const { monitores } = useSelector( state => state.monitor)

    const { carreras } = useSelector( state => state.monitor)
    
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          programa: '',
          monitor: '',
          date: '',
          salon: ''
        },
        onSubmit: (monitoria)=> {
        dispatch(addMonitorias(monitoria))
        }
      })

  return (
    <div style={{ padding: "50px 0px 0px 370px" }}>
          <Buscador/>
      <FormWrapperMonitorias>
        <FormularioMonitorias onSubmit={formik.handleSubmit}> 
          <h2>Monitorias</h2>

          <CamposMonitoriasSelect
            type="text"
            name="programa"
            placeholder="Materia"
            autoComplete='off'
            onChange={formik.handleChange}
            defaultValue='default'
          >
          <option value='default' disabled>Materias</option>
            {
                carreras.map( (car, i) => (
                <option value={car} key={i}>{car}</option>
              ))
            }
            </CamposMonitoriasSelect>
          <CamposMonitoriasSelect
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
          </CamposMonitoriasSelect>
          <CamposMonitorias
            type="date"
            name="date"
            placeholder="Fecha"
            autoComplete='off'
            onChange={formik.handleChange}
          />
          <CamposMonitoriasSelect
            type="text"
            name="salon"
            placeholder="Salón"
            autoComplete='off'
            onChange={formik.handleChange}
            defaultValue='default'
          >
          <option value='default' disabled>Salón</option>
            {
                salones.map( (sal, i) => (
                <option value={sal} key={i}>{sal}</option>
              ))
            }
          </CamposMonitoriasSelect>
          <Agregar type="submit">Agregar Monitorias</Agregar>
        </FormularioMonitorias>
      </FormWrapperMonitorias>
    </div>
  );
};

export default Monitorias;
