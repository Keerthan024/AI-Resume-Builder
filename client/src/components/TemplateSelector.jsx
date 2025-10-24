import { Check, Layout } from 'lucide-react'
import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const templates = [
        {
            id: "classic",
            name: "Classic(Experienced)",
            preview: "A clean, traditional resume format for internship and Experience."
        },
        {
            id: "modern",
            name: "Classic",
            preview: "Sleek design with strategic use of color resume format for internship."
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview: "Minimal design with a profile image and clean typography"
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "Ultra-clean design that puts your content front and center"
        },
    ]

    return (
        <div className='relative'>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className='flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-300 hover:ring-2 transition-all px-3 py-2 rounded-lg'
            >
                <Layout size={14} /> 
                <span className='max-sm:hidden'>Template</span>
            </button>
            
            {isOpen && (
                <div className='absolute top-full w-80 p-3 mt-2 space-y-3 z-20 bg-white rounded-md border border-gray-200 shadow-lg'>
                    {templates.map((template) => (
                        <div 
                            key={template.id} 
                            onClick={() => { 
                                onChange(template.id); 
                                setIsOpen(false) 
                            }} 
                            className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                                selectedTemplate === template.id 
                                    ? "border-blue-400 bg-blue-50" 
                                    : "border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                            }`}
                        >
                            {selectedTemplate === template.id && (
                                <div className="absolute top-2 right-2">
                                    <div className='size-5 bg-blue-500 rounded-full flex items-center justify-center'>
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h4 className='font-medium text-gray-800'>{template.name}</h4>
                                    {template.id === "keerthan-template" && (
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className='p-2 bg-gray-50 rounded text-xs text-gray-600'>
                                    {template.preview}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Backdrop overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default TemplateSelector