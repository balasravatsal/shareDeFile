"use client"
import React from 'react'
import UploadForm from './_components/UploadForm/page'

export default function upload() {
  return (
    <div className='p-20 px-8 md:px-28'>
      <h1
        className="text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Start Uploading files and Share them
      </h1>
      <UploadForm />
    </div>
  )
}
