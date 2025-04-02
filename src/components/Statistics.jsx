import React from 'react'

export default function Statistics() {
    const statisticsList=[{
        count:"3.5 M",
        stats:"- Active Users"
    },
    {
        count:"50k",
        stats:"- Brands"
    },
    {
        count:"250k",
        stats:"- Acounts Managed"
    },
    {
        count:"30 M",
        stats:"- Active Leads"
    },
]
  return (
    <>
    <div className='bg-[#5028e0] flex flex-col md:flex-row  md:h-60 justify-around p-10 items-center gap-10'>
    {statisticsList.map((stat,index)=>(
        <div  className='w-64 h-auto text-white text-center flex flex-col' key={index}>
            <h1 className='font-bold text-3xl lg:text-6xl'>{stat.count}</h1>
            <h1 className='font-medium lg:text-2xl'>{stat.stats}</h1>
        </div>
    ))}
    </div>
        
        
    
    </>
  )
}
