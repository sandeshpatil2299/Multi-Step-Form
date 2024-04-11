import React from 'react'

const LearningPath = () => {
    return (
        <div>
            <h1 className='text-2xl xl:text-4xl text-center font-bold'>Learning paths based on your answers</h1>
            <p className='text-base md:text-lg text-center text-slate-500 my-[2vmax] mb-[4.5vmax]'>Choose one to get started. You can switch anytime.</p>

            <div className='flex flex-col xl:flex-row xl:w-1/2 mx-auto gap-5 '>
                <button className='relative mx-auto flex flex-col md:w-2/3 border-[1px] border-gray-300 p-5 focus:border-green-500 '>
                    <h1 className='text-center absolute -top-3 left-1/2 -translate-x-1/2'><span className='bg-yellow-500 py-1 px-3 uppercase text-xs md:text-sm font-bold rounded-full'>most popular</span></h1>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='w-2/3 text-base md:text-xl text-left'><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</h1>
                        <img className='w-[30%]' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxyQ2O3c7klV3yZlwL2DUBQ4ZUgBmFi3pRn0xQV9MUjZ3B5hZX" alt="" />
                    </div>
                </button>

                <button className='flex mx-auto md:w-2/3 items-center justify-center border-[1px] border-gray-300 p-5 gap-2 focus:border-green-500'>
                    <h1 className='w-2/3 text-base md:text-xl text-left'><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</h1>
                    <img className='w-[30%]' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxyQ2O3c7klV3yZlwL2DUBQ4ZUgBmFi3pRn0xQV9MUjZ3B5hZX" alt="" />
                </button>
            </div>
        </div>
    )
}

export default LearningPath