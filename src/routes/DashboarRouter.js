import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import '../styles/Dashboard.scss'
import Principal from '../pages/Principal'
import Sidebar from '../components/Sidebar'
import Monitorias from '../pages/Monitorias'
import Monitores from '../pages/Monitores'



const DashboarRouters = () => {
  return (
    <div>
      <div>
      <Sidebar />
      <Outlet />
    </div>
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route index element={<Principal/>}/>
            <Route path='/monitorias' element={<Monitorias/>}/>
            <Route path='/monitores' element={<Monitores/>}/>
            <Route path='/user' element={<Principal/>}/>
            <Route path='/order' element={<Principal/>}/>
        </Routes>

    </div>
  )
}

export default DashboarRouters