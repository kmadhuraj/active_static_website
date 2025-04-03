import React from 'react'

export default function Button({children,className}) {
  return (
   <>
        <div>
            <button className={`bg-black h-12  w-44 p-2 rounded-3xl font-bold ${className}`}>{children}</button>
        </div>
   </>
  )
}
