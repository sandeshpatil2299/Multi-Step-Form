import React from 'react'
import ReactStars from 'react-stars'

const OnYourWay = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-1/3'>
                <img className='block w-1/2 mx-auto' src="https://w7.pngwing.com/pngs/238/370/png-transparent-cartoon-comic-dino-dinosaur-green-ideas-smile-free-vector-graphics.png" alt="" />
            </div>

            <div className='w-full mt-[2vmax] md:w-1/3'>
                <h1 className='text-2xl text-center md:text-left md:text-4xl font-bold mb-[.5vmax]'>You're on your way!</h1>
                <div>
                    <ReactStars
                        count={5}
                        value={5}
                        size={45}
                        color2={'#eea720'}
                    />
                </div>
                <p className='italic text-base md:text-lg mt-[2vmax]'>"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
                <p className='italic text-base md:text-lg mt-[2vmax]'>- Jacob S.</p>
            </div>
        </div>
    )
}

export default OnYourWay