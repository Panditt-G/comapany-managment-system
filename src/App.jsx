import React, { useContext, useState } from 'react'
import Login from './compotent/Auth/Login.jsx'
import EmployeeDashboard from './compotent/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './compotent/Dashboard/AdminDashboard.jsx'
import { getlocalStorage, setlocalStorage } from './utilitis/localStorage.jsx'
import { AuthContext } from './context/Authprovider.jsx'

const App = () => {
  
  setlocalStorage();
  const authdata = useContext(AuthContext);
  
  
  const admindata = authdata?.admin || [];
  const emp = authdata?.employees || []
 const [user, setuser] = useState('')
 const [data, setdata] = useState(null)
const handleLogin = (name, password) => {
  if (name === admindata.email && password === admindata.password) {
    setdata(admindata)
    setuser("admin")
  } else {
    const empdata = emp.find((el) => el.email === name && el.password === password)
    if (empdata) {
      setdata(empdata)
      setuser(empdata.employeeId)
      //
      setuser(empdata.employeeName)
    } else {
      alert("Invalid Credentials")
    }
  }
}
 

  return (
    <>
      {!user ? <Login handlelogin={handleLogin} /> : 
   user ==="admin"? <AdminDashboard data={admindata}/>: <EmployeeDashboard data={data}/>}      
    </>
  )
}

export default App
