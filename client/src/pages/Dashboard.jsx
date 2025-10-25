import { 
  FilePenLineIcon, 
  LoaderCircleIcon, 
  PencilIcon, 
  PlusIcon, 
  TrashIcon, 
  UploadCloudIcon, 
  XIcon,
  SparklesIcon,
  EyeIcon,
  CalendarIcon
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {
  const { user, token } = useSelector(state => state.auth)
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isHovering, setIsHovering] = useState(null)

  const navigate = useNavigate()

  // Modern color palette
  const colors = [
    { primary: "#2563eb", light: "#dbeafe", dark: "#1e40af" },
    { primary: "#059669", light: "#d1fae5", dark: "#047857" },
    { primary: "#7c3aed", light: "#ede9fe", dark: "#6d28d9" },
    { primary: "#dc2626", light: "#fee2e2", dark: "#b91c1c" },
    { primary: "#ea580c", light: "#ffedd5", dark: "#c2410c" }
  ]

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } })
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
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, { headers: { Authorization: token } })
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
      const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } })
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
      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } })
        setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50/60">
      {/* Enhanced Background with subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc_25%,transparent_25%),linear-gradient(-45deg,#f8fafc_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8fafc_75%),linear-gradient(-45deg,transparent_75%,#f8fafc_75%)] bg-[size:20px_20px] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Welcome Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
              Welcome back, {user?.name || 'User'}
            </h1>
          </div>
          <p className="text-slate-500 text-lg font-light ml-5">
            Craft professional resumes that get you noticed
          </p>
        </div>

        {/* Action Cards - Premium Design */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl'>
          <button
            onClick={() => setShowCreateResume(true)}
            className='group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 cursor-pointer overflow-hidden'
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <PlusIcon className='w-7 h-7 text-white' />
                </div>
                <SparklesIcon className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className='text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors'>
                Create New Resume
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors'>
                Start from scratch with our intelligent resume builder
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 text-sm font-medium">
                <span>Get Started</span>
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className='group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-100 cursor-pointer overflow-hidden'
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <UploadCloudIcon className='w-7 h-7 text-white' />
                </div>
                <EyeIcon className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className='text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors'>
                Upload Resume
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors'>
                Import and enhance your existing resume PDF
              </p>
              
              <div className="mt-6 flex items-center text-cyan-600 text-sm font-medium">
                <span>Upload PDF</span>
                <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
              </div>
            </div>
          </button>
        </div>

        {/* My Resumes Section - Enhanced */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">My Resumes</h2>
              <p className="text-slate-500 text-sm">
                {allResumes.length} resume{allResumes.length !== 1 ? 's' : ''} • Last updated recently
              </p>
            </div>
            {allResumes.length > 0 && (
              <div className="text-sm text-slate-500">
                Click to edit
              </div>
            )}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-4"></div>
        </div>

        {/* Enhanced Resumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {allResumes.map((resumeItem, index) => {
            const colorSet = colors[index % colors.length];
            return (
              <div
                key={resumeItem._id}
                className="group relative bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden"
                onMouseEnter={() => setIsHovering(resumeItem._id)}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => navigate(`/app/builder/${resumeItem._id}`)}
              >
                {/* Animated accent bar */}
                <div 
                  className="h-1 w-full transition-all duration-500"
                  style={{ 
                    backgroundColor: isHovering === resumeItem._id ? colorSet.dark : colorSet.primary 
                  }}
                ></div>

                <div className="p-6">
                  {/* Header with icon and actions */}
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: colorSet.light }}
                    >
                      <FilePenLineIcon className="w-6 h-6" style={{ color: colorSet.primary }} />
                    </div>
                    
                    <div 
                      onClick={e => e.stopPropagation()} 
                      className={`flex items-center gap-1 transition-all duration-300 ${
                        isHovering === resumeItem._id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <button
                        onClick={() => { setEditResumeId(resumeItem._id); setTitle(resumeItem.title) }}
                        className="p-2 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors shadow-sm"
                        title="Edit title"
                      >
                        <PencilIcon className="w-4 h-4 text-slate-600" />
                      </button>
                      <button
                        onClick={() => deleteResume(resumeItem._id)}
                        className="p-2 bg-white hover:bg-red-50 rounded-lg border border-slate-200 transition-colors shadow-sm"
                        title="Delete"
                      >
                        <TrashIcon className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Resume Title */}
                  <h3 
                    className="font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-slate-900 transition-colors"
                    style={{ color: colorSet.primary }}
                  >
                    {resumeItem.title}
                  </h3>

                  {/* Footer with date */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(resumeItem.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div 
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                      style={{ backgroundColor: colorSet.primary }}
                    ></div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Empty State */}
        {allResumes.length === 0 && (
          <div className="text-center py-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl mb-8">
              <FilePenLineIcon className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">No resumes yet</h3>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Create your first professional resume and take the next step in your career journey
            </p>
            <button
              onClick={() => setShowCreateResume(true)}
              className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300"
            >
              <PlusIcon className="w-5 h-5" />
              Create Your First Resume
            </button>
          </div>
        )}

        {/* Enhanced Create Resume Modal */}
        {showCreateResume && (
          <div 
            onClick={() => setShowCreateResume(false)} 
            className='fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={createResume}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl transform animate-modalSlideUp border border-slate-200'
            >
              {/* Modal Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <PlusIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-2'>Create New Resume</h2>
                <p className="text-slate-500">Give your resume a clear, descriptive title</p>
              </div>

              {/* Input Field */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Resume Title
                </label>
                <input 
                  onChange={(e) => setTitle(e.target.value)} 
                  value={title} 
                  type="text" 
                  placeholder='e.g., Senior Product Designer Resume' 
                  className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-800 placeholder-slate-400' 
                  required
                  autoFocus
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setShowCreateResume(false); setTitle('') }}
                  className='flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className='flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50'
                >
                  Create Resume
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => { setShowCreateResume(false); setTitle('') }}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all'
              >
                <XIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Enhanced Upload Resume Modal */}
        {showUploadResume && (
          <div 
            onClick={() => setShowUploadResume(false)} 
            className='fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={uploadResume}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl transform animate-modalSlideUp border border-slate-200'
            >
              {/* Modal Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <UploadCloudIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-2'>Upload Resume</h2>
                <p className="text-slate-500">Import your existing PDF resume</p>
              </div>

              {/* Input Fields */}
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Resume Title
                  </label>
                  <input 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    type="text" 
                    placeholder='Enter resume title' 
                    className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-800 placeholder-slate-400' 
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    PDF File
                  </label>
                  <label htmlFor="resume-input" className="block">
                    <div className='flex flex-col items-center justify-center gap-4 border-2 border-dashed border-slate-300 rounded-xl p-8 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all group'>
                      {resume ? (
                        <>
                          <div className="p-4 bg-blue-100 rounded-2xl">
                            <FilePenLineIcon className='w-8 h-8 text-blue-600' />
                          </div>
                          <div className="text-center">
                            <p className='text-sm font-medium text-blue-700'>{resume.name}</p>
                            <p className='text-xs text-slate-500 mt-1'>Click to change file</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-blue-100 transition-colors">
                            <UploadCloudIcon className='w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors' />
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
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setShowUploadResume(false); setTitle(''); setResume(null) }}
                  className='flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  disabled={isLoading}
                  className='flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isLoading && <LoaderCircleIcon className='animate-spin w-5 h-5' />}
                  {isLoading ? 'Processing...' : 'Upload Resume'}
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => { setShowUploadResume(false); setTitle(''); setResume(null) }}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all'
              >
                <XIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* Enhanced Edit Resume Modal */}
        {editResumeId && (
          <div 
            onClick={() => setEditResumeId('')} 
            className='fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'
          >
            <form 
              onSubmit={editTitle}
              onClick={e => e.stopPropagation()} 
              className='relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl transform animate-modalSlideUp border border-slate-200'
            >
              {/* Modal Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <PencilIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className='text-2xl font-bold text-slate-800 mb-2'>Edit Resume Title</h2>
                <p className="text-slate-500">Update your resume title</p>
              </div>

              {/* Input Field */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  New Title
                </label>
                <input 
                  onChange={(e) => setTitle(e.target.value)} 
                  value={title} 
                  type="text" 
                  placeholder='Enter new resume title' 
                  className='w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all text-slate-800 placeholder-slate-400' 
                  required
                  autoFocus
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setEditResumeId(''); setTitle('') }}
                  className='flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className='flex-1 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl'
                >
                  Update Title
                </button>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => { setEditResumeId(''); setTitle('') }}
                className='absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all'
              >
                <XIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard