import styled from "styled-components";

export const FormWrapperMonitorias = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding: 0 10px;
`;
export const FormularioMonitorias = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
`;
export const CamposMonitorias = styled.input`
  width: 40%;
  height: 2.5em;
  border: 0 solid #ffff;
  border-radius: 10px;
  font-size: 20px;
  background-color: #fff;
  margin:.5em;
  padding-left: .5rem;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
`;
export const Agregar = styled.button`
  display: block;
  background-color: rgb(148 180 59);
  color: #ffff;
  border: 0px;
  border-radius: 30px;
  height: 48px;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  box-sizing: border-box;
  width: 50%;
  margin-top: 0.5em;
  font-family: "Marcellus", serif;
`;