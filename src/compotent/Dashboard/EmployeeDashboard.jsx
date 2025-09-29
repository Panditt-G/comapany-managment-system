import React from 'react'
import Header from '../Subcomponet/header'
import Tasklistcounter from '../Subcomponet/Tasklistcounter'
import Tasklist from '../TaskLIst/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-1 bg-[#1c1c1c] h-screen'>
      <Header data={data}/>
      <Tasklistcounter data={data} />
      <Tasklist data={data} />

    </div>
  )
}

export default EmployeeDashboard
