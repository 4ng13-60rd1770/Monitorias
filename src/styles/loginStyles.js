import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  display: flex;
  background: #ffff;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;
export const Formulario = styled.form`
    width:100%
    max-width:700px;
    padding:40px;
    background-color:#FFF;
    border-radius:10px;
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
`;
export const Titulo = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  display:flex;
`;
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Google = styled.button`
  background-color: #ea4335;
  border: 0px solid #ea4335;
  color: #ffff;
  width: 20%;
  height: 48px;
  border-radius: 10px;
  margin-top: 2em;
  margin-left: 2em;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0);
`;
export const Facebook = styled.button`
  background-color: #3b5998;
  color: #ffff;
  border: 0px solid #3b5998;
  margin-left: 2em;
  width: 20%;
  height: 48px;
  border-radius: 10px;
  margin-top: 2em;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
`;
export const Campos = styled.input`
 width: 100%;
 height:2.4em;
 border:0 solid #ffff;
 border-radius: 10px;
 font-size:20px;
 background-color:#FFF;
 margin-bottom:1em;
 margin-top:1em;
 box-sizing: border-box;
 box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
`;

export const Inicio = styled.button`
display: block;
background-color:rgb(148 180 59);
color: #FFFF;
border: 0px;
border-radius:30px ; 
height: 48px;
align-items:center;
font-size: 18px;
cursor:pointer;
box-sizing: border-box;
width:100%;
margin-top: 0.5em;
font-family: 'Marcellus', serif;
`