import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './configs/api'
import { login, setLoading } from './app/features/authSlice'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const dispatch = useDispatch()

  const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
      if(token){
        const { data } = await api.get('/api/users/data', { headers: { Authorization: token } })
        if(data.user){
          dispatch(login({ token, user: data.user }))
        }
      }
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error.message)
      dispatch(setLoading(false))
    }
  }

  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Login, Register, Forgot Password, Reset Password */}
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<Login />} /> {/* Handle token via URL */}

        {/* App routes */}
        <Route path='app' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        {/* Preview */}
        <Route path='view/:resumeId' element={<Preview />} />
      </Routes>
    </>
  )
}

export default App
