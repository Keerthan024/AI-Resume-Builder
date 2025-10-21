import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

  const {user, token} = useSelector(state => state.auth)

  const colors = ["#2563eb", "#0891b2", "#3b82f6", "#0284c7", "#1d4ed8"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () =>{
    try {
      const { data } = await api.get('/api/users/resumes', {headers: { Authorization: token }})
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
   try {
    event.preventDefault()
    const { data } = await api.post('/api/resumes/create', {title}, {headers: { Authorization: token }})
    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/app/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
   }
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers: { Authorization: token }})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`, {resumeId: editResumeId, resumeData: { title }}, {headers: { Authorization: token }})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
     if(confirm){
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers: { Authorization: token }})
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
     }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className='max-w-7xl mx-auto px-4 py-8'>

        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className='text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
            Welcome back, {user?.name || 'User'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Manage your resumes and create new ones with ease
          </p>
        </div>

        {/* Action Cards */}
        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
          <button 
            onClick={()=> setShowCreateResume(true)} 
            className='w-full sm:w-64 bg-gradient-to-br from-blue-500 to-blue-600 h-40 flex flex-col items-center justify-center rounded-2xl gap-3 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105 transition-all duration-300 cursor-pointer group'
          >
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
              <PlusIcon className='w-8 h-8'/>
            </div>
            <p className='text-base font-semibold'>Create New Resume</p>
            <p className='text-xs text-blue-100'>Start from scratch</p>
          </button>

          <button 
            onClick={()=> setShowUploadResume(true)} 
            className='w-full sm:w-64 bg-gradient-to-br from-cyan-500 to-blue-500 h-40 flex flex-col items-center justify-center rounded-2xl gap-3 text-white shadow-lg shadow-cyan-200 hover:shadow-xl hover:shadow-cyan-300 hover:scale-105 transition-all duration-300 cursor-pointer group'
          >
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
              <UploadCloudIcon className='w-8 h-8'/>
            </div>
            <p className='text-base font-semibold'>Upload Resume</p>
            <p className='text-xs text-cyan-100'>Import existing PDF</p>
          </button>
        </div>

        {/* My Resumes Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">My Resumes</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {allResumes.map((resume, index)=>{
            const baseColor = colors[index % colors.length];
            return (
              <button 
                key={resume._id} 
                onClick={()=> navigate(`/app/builder/${resume._id}`)} 
                className='relative w-full h-52 bg-white flex flex-col items-center justify-center rounded-xl gap-2 border-2 group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden' 
                style={{borderColor: baseColor + '40'}}
              >
                {/* Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{background: `linear-gradient(135deg, ${baseColor}60, ${baseColor}20)`}}
                ></div>

                {/* Icon */}
                <div 
                  className="p-3 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{backgroundColor: baseColor + '15'}}
                >
                  <FilePenLineIcon className="w-8 h-8" style={{ color: baseColor }}/>
                </div>

                {/* Title */}
                <p 
                  className='text-sm font-semibold group-hover:scale-105 transition-all px-3 text-center line-clamp-2' 
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>

                {/* Date */}
                <p 
                  className='absolute bottom-3 text-xs px-2 text-center' 
                  style={{ color: baseColor + 'aa' }}
                >
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                {/* Action Buttons */}
                <div 
                  onClick={e=> e.stopPropagation()} 
                  className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity duration-300'
                >
                  <button
                    onClick={()=> {setEditResumeId(resume._id); setTitle(resume.title)}}
                    className="p-1.5 bg-white/90 hover:bg-blue-100 rounded-lg shadow-md transition-colors"
                    title="Edit title"
                  >
                    <PencilIcon className="w-4 h-4 text-blue-600"/>
                  </button>
                  <button
                    onClick={()=>deleteResume(resume._id)}
                    className="p-1.5 bg-white/90 hover:bg-red-100 rounded-lg shadow-md transition-colors"
                    title="Delete"
                  >
                    <TrashIcon className="w-4 h-4 text-red-600"/>
                  </button>
                </div>
              </button>
            )
          })}
        </div>

        {/* Empty State */}
        {allResumes.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-blue-50 rounded-full mb-4">
              <FilePenLineIcon className="w-16 h-16 text-blue-400"/>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No resumes yet</h3>
            <p className="text-slate-500">Create your first resume to get started</p>
          </div>
        )}

        {/* Create Resume Modal */}
        {showCreateResume && (
          <div 
            onClick={()=> setShowCreateResume(false)} 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={createResume}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl transform animate-slideUp'
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <PlusIcon className="w-6 h-6 text-white"/>
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Create Resume</h2>
                <p className="text-sm text-slate-500">Give your resume a memorable title</p>
              </div>

              <input 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title} 
                type="text" 
                placeholder='e.g., Software Engineer Resume' 
                className='w-full px-4 py-3 mb-6 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all' 
                required
              />

              <button className='w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl'>
                Create Resume
              </button>

              <button
                type="button"
                onClick={()=> {setShowCreateResume(false); setTitle('')}}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all'
              >
                <XIcon className="w-5 h-5"/>
              </button>
            </form>
          </div>
        )}

        {/* Upload Resume Modal */}
        {showUploadResume && (
          <div 
            onClick={()=> setShowUploadResume(false)} 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={uploadResume}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl transform animate-slideUp'
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <UploadCloudIcon className="w-6 h-6 text-white"/>
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Upload Resume</h2>
                <p className="text-sm text-slate-500">Import your existing resume PDF</p>
              </div>

              <input 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title} 
                type="text" 
                placeholder='Enter resume title' 
                className='w-full px-4 py-3 mb-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all' 
                required
              />

              <label htmlFor="resume-input" className="block">
                <div className='flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 rounded-xl p-8 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all group'>
                  {resume ? (
                    <>
                      <div className="p-3 bg-blue-100 rounded-full">
                        <UploadCloud className='w-8 h-8 text-blue-600'/>
                      </div>
                      <p className='text-sm font-medium text-blue-700'>{resume.name}</p>
                      <p className='text-xs text-slate-500'>Click to change file</p>
                    </>
                  ) : (
                    <>
                      <div className="p-3 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors">
                        <UploadCloud className='w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors'/>
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">Choose PDF file</p>
                        <p className="text-xs text-slate-500 mt-1">or drag and drop here</p>
                      </div>
                    </>
                  )}
                </div>
              </label>
              <input 
                type="file" 
                id='resume-input' 
                accept='.pdf' 
                hidden 
                onChange={(e)=> setResume(e.target.files[0])}
              />

              <button 
                disabled={isLoading} 
                className='w-full py-3 mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading && <LoaderCircleIcon className='animate-spin w-5 h-5'/>}
                {isLoading ? 'Uploading...' : 'Upload Resume'}
              </button>

              <button
                type="button"
                onClick={()=> {setShowUploadResume(false); setTitle(''); setResume(null)}}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all'
              >
                <XIcon className="w-5 h-5"/>
              </button>
            </form>
          </div>
        )}

        {/* Edit Resume Modal */}
        {editResumeId && (
          <div 
            onClick={()=> setEditResumeId('')} 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={editTitle}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl transform animate-slideUp'
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <PencilIcon className="w-6 h-6 text-white"/>
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-1'>Edit Resume Title</h2>
                <p className="text-sm text-slate-500">Update your resume title</p>
              </div>

              <input 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title} 
                type="text" 
                placeholder='Enter resume title' 
                className='w-full px-4 py-3 mb-6 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all' 
                required
              />

              <button className='w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl'>
                Update Title
              </button>

              <button
                type="button"
                onClick={()=> {setEditResumeId(''); setTitle('')}}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all'
              >
                <XIcon className="w-5 h-5"/>
              </button>
            </form>
          </div>
        )}
      
      </div>
    </div>
  )
}

export default Dashboard