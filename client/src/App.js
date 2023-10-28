import React from 'react'
import { ForgotPassword, Home, Login, ResetPassword, Verify } from './pages'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/user/verify/:token' element={<Verify />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App