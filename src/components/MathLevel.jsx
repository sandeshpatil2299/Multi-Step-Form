import React from 'react'
import math1 from '../icons/MathLevel/math1.png'
import math2 from '../icons/MathLevel/math2.png'
import math3 from '../icons/MathLevel/math3.png'
import math4 from '../icons/MathLevel/math4.png'

const MathLevel = () => {
    return (
        <div className='w-full h-full text-center'>
            <h1 className='text-2xl md:text-3xl font-medium mb-4'>What is your math comfort level?</h1>
            <p className='mb-[3vmax] text-slate-500'>Choose the highest level you feel confident in — you can always adjust later.</p>
            <div>
                <div className='flex flex-wrap justify-center gap-[2vmax]'>
                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-300 flex flex-col items-center gap-3 w-[15vmax] md:w-[12vmax] border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <div className='h-[4.5rem] flex justify-center items-center'>
                            <img className='block w-full' src={math1} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-base md:text-lg'>Arithmatic</h1>
                            <h1 className='text-base md:text-lg text-slate-500'>Introductory</h1>
                        </div>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-300 flex flex-col items-center gap-3 w-[15vmax] md:w-[12vmax] border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <div className='h-[4.5rem] flex justify-center items-center'>
                            <img className='block w-full' src={math2} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-base md:text-lg'>Basic Algebra</h1>
                            <h1 className='text-base md:text-lg text-slate-500'>Foundational</h1>
                        </div>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-300 flex flex-col items-center gap-3 w-[15vmax] md:w-[12vmax] border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <div className='h-[4.5rem] flex justify-center items-center'>
                            <img className='block w-full' src={math3} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-base md:text-lg'>Intermediate Algebra</h1>
                            <h1 className='text-base md:text-lg text-slate-500'>Intermediate</h1>
                        </div>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-300 flex flex-col items-center gap-3 w-[15vmax] md:w-[12vmax]   border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <div className='h-[4.5rem] flex justify-center items-center'>
                            <img className='block w-full' src={math4} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-semibold text-base md:text-lg'>Calculus</h1>
                            <h1 className='text-base md:text-lg text-slate-500'> Advanced</h1>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MathLevel