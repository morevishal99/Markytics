import React, { useState } from 'react'
import { Switch } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { AiOutlineUser, AiTwotoneBell } from "react-icons/ai";
import Dashboard from '../sidebarComponent/Dashboard'
import { RxDashboard } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineNotes } from "react-icons/md";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import Notification from '../sidebarComponent/Notification';
import Profile from '../sidebarComponent/Profile'
import "../Style/SideBar.css"
import Todo from '../sidebarComponent/Todo';
import CounterPage from '../sidebarComponent/Counter';
const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState("dashboard");
    const handleComponentClick = (componentName) => {
        setActiveComponent(componentName);
    };
    const [isChecked, setIsChecked] = useState(true);
    // console.log('isChecked: ', isChecked);
    const handleChangeTheme = () => {
        setIsChecked(!isChecked);
    };
    const light = {
        backgroundColor: 'aliceblue',
        color: 'black'
    }
    const dark = {
        backgroundColor: 'black',
        color: 'grey',
        marginTop: "20px"
    }
    return (
        <>
            <div className="sidebar" >

                <div className='sidebarMenu' style={isChecked === true ? light : dark} >
                    <div className='userName'  >{"Vishal"}
                    </div>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('profile')} >
                        <li ><AiOutlineUser /></li>
                        <li>Profile</li>
                    </ul>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('todo')}>
                        <li ><MdOutlineNotes /></li>
                        <li>Todo</li>
                    </ul>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('counter')}>
                        <li ><PiClockCounterClockwiseFill /></li>
                        <li>Counter</li>
                    </ul>
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('dashboard')}>
                        <li ><RxDashboard /></li>
                        <li>Dashboard</li>
                    </ul>
                    
                    <ul className='sidebarMenu_ul' onClick={() => handleComponentClick('notification')} >
                        <li ><AiTwotoneBell /></li>
                        <li>Notification</li>
                    </ul>

                    {/* theme toggle button */}
                    <div className='toggleTheme sidebarMenu_ul'>
                        <FormControl display='flex'  >
                            <FormLabel htmlFor='swicththeme' mb='0' display='flex' gap={"20px"} >
                                {isChecked === true ? <BiMoon /> : <BsSun />} {isChecked === true ? "Dark Mode" : "Ligth Mode"}
                            </FormLabel>
                            <Switch
                                id="theme"
                                isChecked={isChecked}
                                onChange={handleChangeTheme} />
                        </FormControl>
                    </div>
                </div>

                <div className="sidebarContent" style={isChecked === true ? light : dark} >
                    {activeComponent === 'dashboard' && <Dashboard />}
                    {activeComponent === 'profile' && <Profile />}
                    {activeComponent === 'notification' && <Notification />}
                    {activeComponent === 'todo' && <Todo />}
                    {activeComponent === 'counter' && <CounterPage />}
                </div>

            </div>
        </>
    )
}

export default Sidebar
