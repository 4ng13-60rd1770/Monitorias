import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { FaSignOutAlt } from 'react-icons/fa'
import { app } from '../firebase/firebaseConfig'
const auth = getAuth(app)
const User = () => {
  return (
    <div style={{ padding: "50px 0px 0px 370px" }}>
      <Button variant="danger" size="lg"  onClick ={()=> signOut(auth)}><FaSignOutAlt/></Button>
    </div>
  )
}

export default User