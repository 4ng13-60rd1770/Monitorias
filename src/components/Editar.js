import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { editMonitores } from "../redux/action/actionsMonitor";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Agregar,
  CamposMonitores,
  FormularioMonitores,
} from "../styles/monitoresStyles";
import { useFormik } from "formik";


const Edit = ({ data, setModal }) => {

  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const formik = useFormik({
    initialValues: {
      name: setModal ? data.name : "",
      cedula: setModal ? data.cedula : "",
      celular: setModal ? data.celular : "",
      email: setModal ? data.email : ""
    },
    onSubmit: (formValue) => {
      console.log(formValue)
      dispatch(editMonitores(formValue.cedula, formValue))
      handleClose()
    }
  })


useEffect(()=> {
  setShow( setModal )

  console.log( data )
}, [setModal, data])

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Monitor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioMonitores onSubmit={formik.handleSubmit} margin={50}>
              <CamposMonitores
                type="name"
                name="name"
                placeholder="Nombre y Apellido"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            <CamposMonitores
              type="number"
              name="cedula"
              placeholder="Cedula"
              autoComplete="off"
              value={formik.values.cedula}
              readOnly
            />
            <h3>Información de contacto</h3>
            <CamposMonitores
              type="number"
              name="celular"
              placeholder="Celular"
              autoComplete="off"
              value={formik.values.celular}
              onChange={formik.handleChange}
            />
            <CamposMonitores
              type="email"
              name="email"
              placeholder="Correo Electronico"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              />
            <Agregar type="submit">Editar</Agregar>
          </FormularioMonitores>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
