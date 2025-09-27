import React, { useContext, useState } from 'react'
import Login from './compotent/Auth/Login.jsx'
import EmployeeDashboard from './compotent/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './compotent/Dashboard/AdminDashboard.jsx'
import { getlocalStorage, setlocalStorage } from './utilitis/localStorage.jsx'
import { AuthContext } from './context/Authprovider.jsx'

const App = () => {
  
  setlocalStorage();
  const authdata = useContext(AuthContext);
  const person = authdata?.admin || [];
 const [user, setuser] = useState('')
const handleLogin = (name, password) => {
  if (name === person.employeeName && password === person.password) {
    setuser("admin")
  } else {
    const emp = authdata?.employees || []
    const empdata = emp.find((el) => el.employeeName === name && el.password === password)
    if (empdata) {
      setuser(empdata.employeeName)
    } else {
      alert("Invalid Credentials")
    }
  }
}
 

  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : 
   user ==="admin"? <AdminDashboard />: <EmployeeDashboard />}      
    </>
  )
}

export default App
