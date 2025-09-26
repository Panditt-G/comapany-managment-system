import React from 'react'
import Header from '../Subcomponet/header'
import Tasklistcounter from '../Subcomponet/Tasklistcounter'
import Tasklist from '../TaskLIst/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-1 bg-[#1c1c1c] h-screen'>
      <Header/>
      <Tasklistcounter/>
      <Tasklist/>

    </div>
  )
}

export default EmployeeDashboard
