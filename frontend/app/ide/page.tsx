"use client"

import { Toolbar } from '@/components/notebook/toolbar';
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Toolbar
        onAddCodeCell={() => {}}
        onAddMarkdownCell={() => {}}
        onImportNotebook={()=>{}}
        onExportNotebook={()=>{}}
        onExecute={()=>{}}
        executing={false}
        fileName={"filename"}
        setFileName={()=>{}}
      />

    </div>
  )
}

export default page;