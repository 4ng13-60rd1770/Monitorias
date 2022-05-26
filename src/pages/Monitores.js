import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Listar from "../components/Listar";
import { addMonitor } from "../redux/action/actionsMonitor";
import {
    Agregar,
  CamposMonitores,
  CamposMonitoresSelect,
  FormularioMonitores,
  FormWrapperMonitores,
} from "../styles/monitoresStyles";


const Monitores = () => {

  const { carreras } = useSelector( state => state.monitor)

  const semestres = [1,2,3,4,5,6,7,8,9,10];

  const dispatch = useDispatch();


  

  const formik = useFormik({
    initialValues: {
      name: '',
      programa: '',
      semestre: '',
      cedula: '',
      celular: '',
      email: ''
    },
    onSubmit: (monitor)=> {
      dispatch(addMonitor(monitor))
    }
  })


    
  return (
    <div style={{ padding: "60px 0px 0px 350px" }}>
      <FormWrapperMonitores>
        <FormularioMonitores onSubmit={formik.handleSubmit}>
          <h2>Monitores</h2>
          <CamposMonitores
            type="name"
            name="name"
            placeholder="Nombre & Apellido"
            autoComplete="off"
            onChange={formik.handleChange}
          />
          <CamposMonitoresSelect
            type="text"
            name="programa"
            placeholder="Programa Academico"
            autoComplete='off'
            onChange={formik.handleChange}
            defaultValue='default'
          >
          <option value='default' disabled>Programa Academico</option>
            {
              carreras.map( (car, i) => (
                <option value={car} key={i}>{car}</option>
              ))
            }
          </CamposMonitoresSelect>
          <CamposMonitoresSelect
            type="text"
            name="semestre"
            placeholder="Semestre"
            autoComplete='off'
            onChange={formik.handleChange}
            defaultValue='default'
          >
          <option value='default' disabled>Semestre</option>
            {
              semestres.map( (sem, i) => (
                <option value={sem} key={i}>{sem}</option>
              ))
            }
          </CamposMonitoresSelect>
          <CamposMonitores
            type="number"
            name="cedula"
            placeholder="Cedula"
            autoComplete='off'
            onChange={formik.handleChange}
          />
          <h3>Información de contacto</h3>
          <CamposMonitores
            type="number"
            name="celular"
            placeholder="Celular"
            autoComplete='off'
            onChange={formik.handleChange}
          />
          <CamposMonitores
            type="email"
            name="email"
            placeholder="Correo Electronico"
            autoComplete='off'
            onChange={formik.handleChange}
          />
          <Agregar type="submit">Agregar</Agregar>
        </FormularioMonitores>
      </FormWrapperMonitores>
        <Listar/>
    </div>
  );
};

export default Monitores;
