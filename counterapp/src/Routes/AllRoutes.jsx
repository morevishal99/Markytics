import React from 'react'
// import Routes from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import CounterPage from '../Pages/CounterPage'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/' element={<SignupPage/>} />
        <Route path='/counter' element={<CounterPage/>} />
      </Routes>
    </>
  )
}

export default AllRoutes
