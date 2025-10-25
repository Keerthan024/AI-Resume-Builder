import { Lock, Mail, User2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()

  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const resetToken = query.get('token')

  const [state, setState] = useState(urlState || 'login')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [tokenValid, setTokenValid] = useState(false)
  const [resetPassword, setResetPassword] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const GOOGLE_CLIENT_ID = '651275209963-da9llrklg8j8pgsbajb96gipmbvtk4h7.apps.googleusercontent.com'

  // --- Handle login/register submit ---
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // --- Forgot Password ---
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!forgotPasswordEmail) return toast.error('Please enter your email')
    setIsLoading(true)
    try {
      const { data } = await api.post('/api/users/forgot-password', { email: forgotPasswordEmail })
      toast.success(data.message)
      setShowForgotPassword(false)
      setForgotPasswordEmail('')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Error sending reset email')
    } finally {
      setIsLoading(false)
    }
  }

  // --- Reset Password ---
  const handleResetPassword = async (e) => {
    e.preventDefault()
    if (!resetPassword) return toast.error('Enter a new password')
    if (resetPassword.length < 6) return toast.error('Password must be at least 6 characters')

    setIsLoading(true)
    try {
      const { data } = await api.post('/api/users/reset-password', {
        token: resetToken,
        password: resetPassword
      })
      toast.success(data.message)
      setResetPassword('')
      setTokenValid(false)
      setState('login')
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Error resetting password')
    } finally {
      setIsLoading(false)
    }
  }

  // --- Verify token on mount ---
  useEffect(() => {
    const verifyToken = async () => {
      if (!resetToken) return
      try {
        const { data } = await api.post('/api/users/verify-reset-token', { token: resetToken })
        if (data.success) setTokenValid(true)
      } catch (error) {
        setTokenValid(false)
        toast.error(error?.response?.data?.message || 'Invalid or expired token')
      }
    }
    verifyToken()
  }, [resetToken])

  // --- Google OAuth ---
  const handleGoogleResponse = async (response) => {
    try {
      const { data } = await api.post('/api/users/google-auth', { credential: response.credential })
      if (data.token) {
        dispatch(login(data))
        localStorage.setItem('token', data.token)
        toast.success(data.message || 'Logged in with Google!')
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const initializeGoogleSignIn = () => {
    if (window.google) { setupGoogleButton(); return }
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = setupGoogleButton
    document.head.appendChild(script)
  }

  const setupGoogleButton = () => {
    if (!window.google) return
    window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleResponse })
    const buttonContainer = document.getElementById('googleSignInButton')
    if (buttonContainer) window.google.accounts.id.renderButton(buttonContainer, { theme: 'outline', size: 'large', width: '100%', text: 'continue_with' })
  }

  useEffect(() => { initializeGoogleSignIn() }, [])

  // --- Render Forgot Password Modal ---
  if (showForgotPassword) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className="sm:w-[400px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-12 bg-white">
          <h2 className="text-2xl font-semibold mb-2">Forgot Password?</h2>
          <p className="text-gray-600 mb-6">Enter your email to receive a reset link.</p>
          <form onSubmit={handleForgotPassword}>
            <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-6">
              <Mail size={16} color="#6B7280" />
              <input type="email" placeholder="Email" className="flex-1 border-none outline-none" value={forgotPasswordEmail} onChange={e => setForgotPasswordEmail(e.target.value)} required />
            </div>
            <button type="submit" disabled={isLoading} className="w-full h-11 rounded-full text-white bg-green-500 mb-4">{isLoading ? 'Sending...' : 'Send Reset Link'}</button>
            <button type="button" onClick={() => setShowForgotPassword(false)} className="w-full h-11 rounded-full bg-gray-100 text-gray-600">Back to Login</button>
          </form>
        </div>
      </div>
    )
  }

  // --- Render Reset Password Form ---
  if (resetToken && tokenValid) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className="sm:w-[400px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-12 bg-white">
          <h2 className="text-2xl font-semibold mb-2">Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="flex items-center w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 mb-6">
              <Lock size={16} color="#6B7280"/>
              <input type="password" placeholder="New Password" className="flex-1 border-none outline-none" value={resetPassword} onChange={e => setResetPassword(e.target.value)} required />
            </div>
            <button type="submit" disabled={isLoading} className="w-full h-11 rounded-full text-white bg-green-500">{isLoading ? 'Resetting...' : 'Reset Password'}</button>
          </form>
        </div>
      </div>
    )
  }

  // --- Render Login / Register Form ---
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white py-8">
        <h1 className="text-gray-900 text-3xl mt-2 font-medium">{state==='login' ? 'Login' : 'Sign Up'}</h1>
        <div className="mt-6" id="googleSignInButton"></div>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {state!=='login' && (
          <div className="flex items-center mt-2 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
            <User2Icon size={16} color='#6B7280'/>
            <input type="text" name="name" placeholder="Name" className="flex-1 border-none outline-none" value={formData.name} onChange={handleChange} required />
          </div>
        )}

        <div className="flex items-center w-full mt-4 border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Mail size={13} color="#6B7280"/>
          <input type="email" name="email" placeholder="Email" className="flex-1 border-none outline-none" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex items-center mt-4 w-full border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={13} color="#6B7280"/>
          <input type="password" name="password" placeholder="Password" className="flex-1 border-none outline-none" value={formData.password} onChange={handleChange} required />
        </div>

        {state==='login' && (
          <div className="text-right mt-2">
            <button type="button" onClick={()=>setShowForgotPassword(true)} className="text-green-500 text-sm hover:underline">Forgot password?</button>
          </div>
        )}

        <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-green-500">{state==='login' ? 'Login' : 'Sign Up'}</button>

        <p className="text-gray-500 text-sm mt-3">
          {state==='login' ? "Don't have an account?" : "Already have an account?"}
          <span onClick={()=>setState(prev=>prev==='login'?'register':'login')} className="ml-1 text-green-500 hover:underline cursor-pointer">click here</span>
        </p>
      </form>
    </div>
  )
}

export default Login
