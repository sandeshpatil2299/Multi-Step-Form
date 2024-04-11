import React from 'react'

const RightPlace = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-1/3'>
                <img className='block w-1/2 md:w-3/4 mx-auto' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYTfpbs_2L_EKdsF1Jp7Tx9dKJlsS_7issEGvRb-gyxoAFrxiy" alt="" />
            </div>

            <div className='w-full text-center md:text-left mt-[2vmax] md:mt-0 md:w-1/3'>
                <h1 className='text-2xl md:text-4xl font-bold mb-[2vmax]'>You're in the right place</h1>
                <p>Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll with concepts and solve fun problems in math, science, and computer science.</p>
            </div>
        </div>
    )
}

export default RightPlace