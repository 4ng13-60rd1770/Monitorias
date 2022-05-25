import React from 'react'
import { FaFilter } from 'react-icons/fa'

const Buscador = () => {
  return (
    <form style={{padding:'50px 0px 0px 370px'}}>
    <input name = "search" placeholder = "Monitores o Monitorias"/>
    <button type = "submit"><FaFilter/></button>
    </form>
  )
}

export default Buscador