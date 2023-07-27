import React from 'react'
import Dashboard from '../sidebarComponent/Dashboard'
import Sidebar from './Sidebar'
import "../Style/Homepage.css"

const Homepage = () => {
    return (
        <div className='homeContainer'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='dashboard'>
                <Dashboard />
            </div>
        </div>
    )
}

export default Homepage
