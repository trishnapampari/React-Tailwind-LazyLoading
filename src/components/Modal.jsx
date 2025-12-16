import React from 'react'
import { createPortal } from 'react-dom';

export default function Modal({isOpen, setIsOpen,header,footer,children}) {



  if (!isOpen) return null;
  return (
    createPortal(
    <div  onClick={()=>setIsOpen(false)} className="fixed flex items-center px-4 justify-center inset-0 bg-black/40">
      <div onClick={(e)=>e.stopPropagation()} className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
        <div className="text-xl font-bold">{header}</div>
        <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
         {children}
        </div>
        <div className="mt-4">{footer}</div>
      </div>
    </div>,
    document.getElementById('portal')
    )
  )
}