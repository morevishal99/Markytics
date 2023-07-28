import React from 'react'
// import Routes from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import CounterPage from '../Pages/CounterPage'
import Dashboard from '../Pages/Dashboard'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import Todo from '../Pages/Todo'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<SignupPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default AllRoutes
