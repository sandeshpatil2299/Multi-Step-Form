import React from 'react'
import eyes from '../icons/MostInterested/eyes.png'
import satellite from '../icons/MostInterested/satellite.png'
import stock from '../icons/MostInterested/stock.png'
import target from '../icons/MostInterested/target.png'
import world from '../icons/MostInterested/world.png'

const MostInterested = () => {
    return (
        <div className='w-full h-full text-center'>
            <h1 className='text-2xl md:text-3xl font-medium mb-4'>Which are you most interested in?</h1>
            <p className='mb-[2vmax] text-slate-500 text-sm md:text-base'>Choose just one. This will help us get you started (but won't limit your experience).</p>
            <div>
                <div className='flex flex-col gap-[2vmax]'>
                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-400 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={stock} alt="" />
                        <h1 className='text-xs md:text-base'>Learning specific skills to advance my career</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-400 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={world} alt="" />
                        <h1 className='text-xs md:text-base'>Exploring new topics I'm interested in</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-400 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={satellite} alt="" />
                        <h1 className='text-xs md:text-base'>Refreshing my math foundations</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-400 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={target} alt="" />
                        <h1 className='text-xs md:text-base'>Exercising my brain to stay sharp</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-orange-400 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={eyes} alt="" />
                        <h1 className='text-xs md:text-base'>Something else</h1>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default MostInterested