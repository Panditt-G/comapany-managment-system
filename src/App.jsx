import React, { useState } from 'react'
import Login from './compotent/Auth/Login.jsx'
import EmployeeDashboard from './compotent/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './compotent/Dashboard/AdminDashboard.jsx'
import { getlocalStorage, setlocalStorage } from './utilitis/localStorage.jsx'

const App = () => {

 const [user, setuser] = useState('')

//  const handleLogin=(user,password)=>{
//   const data= getlocalStorage()
//   const foundUser = data.find(
//     (u) => u.employeeName === user && u.password === password
//   );
//   if (foundUser) {
//     setuser(foundUser);
//   } else {
//     alert("Invalid credentials");
//   }
//  }

const handlelogin = (email, password) => {
  if(email === "admin@a" && password === "123") {
    setuser("admin");
  } else if (email === "user@u" && password === "123") {
    setuser("user");
  }
  else {
    alert("Invalid credentials");
  }

}

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : 
   user ==="admin"? <AdminDashboard />: <EmployeeDashboard />}      
    </>
  )
}

export default App
