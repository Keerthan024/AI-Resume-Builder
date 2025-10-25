import { Lock, Mail, User2Icon } from 'lucide-react'
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

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    // Store Google Client ID - Replace with your actual ID
    const GOOGLE_CLIENT_ID = '651275209963-da9llrklg8j8pgsbajb96gipmbvtk4h7.apps.googleusercontent.com'

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

    // Google OAuth Handler
    const handleGoogleResponse = async (response) => {
        try {
            const { data } = await api.post('/api/auth/google-auth', {
                credential: response.credential
            })
            
            if (data.success) {
                dispatch(login(data))
                localStorage.setItem('token', data.token)
                toast.success(data.message || 'Logged in successfully with Google!')
            } else {
                toast.error(data.message || 'Google authentication failed')
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
    }

    const initializeGoogleSignIn = () => {
        if (window.google) {
            setupGoogleButton();
            return;
        }

        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        script.onload = setupGoogleButton
        document.head.appendChild(script)
    }

    const setupGoogleButton = () => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: GOOGLE_CLIENT_ID,
                callback: handleGoogleResponse,
                auto_select: false,
            })
            
            renderGoogleButton()
        }
    }

    const renderGoogleButton = () => {
        if (window.google) {
            const buttonContainer = document.getElementById('googleSignInButton')
            if (buttonContainer) {
                buttonContainer.innerHTML = ''
                window.google.accounts.id.renderButton(
                    buttonContainer,
                    { 
                        theme: 'outline', 
                        size: 'large',
                        width: '100%',
                        text: 'continue_with'
                    }
                )
            }
        }
    }

    React.useEffect(() => {
        initializeGoogleSignIn()
    }, [])

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (window.google) {
                renderGoogleButton()
            }
        }, 100)
        return () => clearTimeout(timer)
    }, [state])

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
                
                {/* Google Sign-In Button */}
                <div className="mt-6">
                    <div id="googleSignInButton"></div>
                </div>

                <div className="flex items-center my-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {state !== "login" && (
                    <div className="flex items-center mt-2 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <User2Icon size={16} color='#6B7280'/>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            className="border-none outline-none ring-0 flex-1 bg-transparent" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                )}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Mail size={13} color="#6B7280" />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email id" 
                        className="border-none outline-none ring-0 flex-1 bg-transparent" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <Lock size={13} color="#6B7280"/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="border-none outline-none ring-0 flex-1 bg-transparent" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="mt-4 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity">
                    {state === "login" ? "Login" : "Sign up"}
                </button>
                <p className="text-gray-500 text-sm mt-3 mb-11">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"} 
                    <span 
                        onClick={() => setState(prev => prev === "login" ? "register" : "login")} 
                        className="text-green-500 hover:underline ml-1 cursor-pointer"
                    >
                        click here
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Login