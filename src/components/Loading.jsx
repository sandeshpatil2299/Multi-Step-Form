import React from 'react'

const Loading = () => {
    return (
        <div className='text-center'>
            <div className='w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] border-[8px] md:border-[12px] border-yellow-500 rounded-full mx-auto'></div>
            <h1 className='text-2xl md:text-3xl font-bold w-full md:w-2/3 mx-auto mt-5'>Finding learning path recommendations for you based on your responses</h1>
        </div>
    )
}

export default Loading