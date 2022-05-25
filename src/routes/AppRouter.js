
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, {useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { getMonitores } from "../redux/action/actionsMonitor";
import DashboarRouters from "./DashboarRouter";
import PrivateRouters from "./PrivateRouters";
import { PublicRouters } from "./PublicRouters";
import '../styles/styles.css'
const AppRouter = () => {

  const [checking, setChecking]= useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useDispatch();

  useEffect(()=>{
    const auth = getAuth()
    onAuthStateChanged(auth,(user)=>{
      if (user?.uid){
        setIsAuth(true);
        dispatch(getMonitores())
      } else {
        setIsAuth(false);
      }
      setTimeout(() => {
        setChecking(false);
      }, 1500);
    });
  }, [setIsAuth,setChecking])

  if(checking){
    return(
      <img
      className="spinner"
      src="https://res.cloudinary.com/dgzfc4clj/image/upload/v1653247137/Logo_iha7gc.png"
      style={{ width: "100px", display: "flex", align: "center" }}
      alt="spinner"
    />
    )
  }


  return (
    <BrowserRouter>
      <Routes>
        {/*Publicas*/}
        <Route
          path="/login"
          element={<PublicRouters isAuth={isAuth}>{<Login/>}</PublicRouters>}
        />
        <Route
          path="/register"
          element={<PublicRouters isAuth={isAuth}>{<Register/>}</PublicRouters>}
        />

        {/*Privadas*/}
          <Route
          path="/*" element={<PrivateRouters isAuth={isAuth}><DashboarRouters/></PrivateRouters>}/>
        {/*Redirección*/}
        <Route path="*/"element={<Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
