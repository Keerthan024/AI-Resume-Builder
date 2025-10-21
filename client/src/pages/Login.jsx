import { Lock, Mail, User2Icon, Eye, EyeOff } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")
    const [showPassword, setShowPassword] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            toast.success(data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const toggleState = () => {
        setState(prev => prev === "login" ? "register" : "login")
        setFormData({ name: '', email: '', password: '' })
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4'>
            <div className="w-full max-w-md">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Resume Builder
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">
                        Create professional resumes in minutes
                    </p>
                </div>

                {/* Form Card */}
                <form 
                    onSubmit={handleSubmit} 
                    className="bg-white border border-slate-200 rounded-3xl px-8 py-10 shadow-xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-slate-800 text-2xl font-bold">
                            {state === "login" ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-slate-500 text-sm mt-2">
                            {state === "login" 
                                ? "Enter your credentials to continue" 
                                : "Sign up to get started"}
                        </p>
                    </div>

                    {/* Name Input - Only for Register */}
                    {state !== "login" && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <User2Icon className="w-5 h-5 text-slate-400"/>
                                </div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="John Doe" 
                                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                        </div>
                    )}

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Mail className="w-5 h-5 text-slate-400" />
                            </div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="you@example.com" 
                                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Lock className="w-5 h-5 text-slate-400"/>
                            </div>
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="password" 
                                placeholder="••••••••" 
                                className="w-full pl-12 pr-12 py-3 border-2 border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password - Only for Login */}
                    {state === "login" && (
                        <div className="mb-6 text-right">
                            <button 
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Please wait...</span>
                            </>
                        ) : (
                            <span>{state === "login" ? "Sign In" : "Create Account"}</span>
                        )}
                    </button>

                    {/* Toggle State */}
                    <div className="mt-6 text-center">
                        <p className="text-slate-600 text-sm">
                            {state === "login" ? "Don't have an account?" : "Already have an account?"}
                            {' '}
                            <button 
                                type="button"
                                onClick={toggleState}
                                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                            >
                                {state === "login" ? "Sign up" : "Sign in"}
                            </button>
                        </p>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center mt-8 text-slate-500 text-xs">
                    <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Login