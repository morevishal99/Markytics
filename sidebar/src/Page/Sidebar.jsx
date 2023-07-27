import React, { useState } from 'react'
import { AiOutlineUser, AiTwotoneBell } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import Dashboard from '../sidebarComponent/Dashboard'
import Notification from '../sidebarComponent/Notification';
import Profile from '../sidebarComponent/Profile'
import "../Style/Homepage.css"
const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState("dashboard");

    const handleComponentClick = (componentName) => {
        setActiveComponent(componentName);
    };
    return (
        <>
            <div className="sidebar">

                <div className='sidebarMenu'>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('profile')} >
                        <li ><AiOutlineUser /></li>
                        <li>Profile</li>
                    </ul>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('dashboard')}>
                        <li ><RxDashboard /></li>
                        <li>Dashboard</li>
                    </ul>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('notification')} >
                        <li ><AiTwotoneBell /></li>
                        <li>Notification</li>
                    </ul>
                </div>

                <div className="sidebarContent">
                    {activeComponent === 'dashboard' && <Dashboard />}
                    {activeComponent === 'profile' && <Profile />}
                    {activeComponent === 'notification' && <Notification />}
                </div>

            </div>
        </>
    )
}

export default Sidebar
