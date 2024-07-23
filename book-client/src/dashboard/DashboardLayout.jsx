import React from 'react'
import { Outlet } from 'react-router-dom'
import Slidebar from './Slidebar'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <Slidebar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
