import React, { useState } from 'react'

import DescribesYou from './DescribesYou';
import LearningPath from './LearningPath';
import Loading from './Loading';
import MathLevel from './MathLevel';
import MostInterested from './MostInterested';
import OnYourWay from './OnYourWay';
import RightPlace from './RightPlace';

import {ChevronLeft} from 'lucide-react';

const MultiForm = () => {
    const [page, setPage] = useState(1);

    const formPage = () => {
        if (page == 1) {
            return <DescribesYou />
        }
        else if (page == 2) {
            return <MostInterested />
        }
        else if (page == 3) {
            return <RightPlace />
        }
        else if (page == 4) {
            return <MathLevel />
        }
        else if (page == 5) {
            return <OnYourWay />
        }
        else if (page == 6) {
            return <Loading />
        }
        else {
            return <LearningPath />
        }
    }

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="progressBar flex items-center fixed top-20 w-[95%] md:w-2/3">

                <button
                    disabled={page == 1}
                    onClick={() => setPage(page - 1)}>
                        <ChevronLeft className='w-[1rem] md:w-[2rem]' />
                    </button>

                <div className={`${page == 1 ? "w-0" : page == 2 ? "w-[14.28%]" : page == 3 ? "w-[28.56%]" : page == 4 ? "w-[42.84%]" : page == 5 ? "w-[57.12%]" : page == 6 ? "w-[71.40%]" : "w-full"} h-[.3rem] md:h-[.5rem] bg-green-300 rounded-full`}>
                </div>
            </div>
            <div className="formContainer w-fit px-2">
                <div className="formBody">
                    {formPage()}
                </div>

                <div className='mt-10 flex justify-center'>
                    <button
                        className='bg-black text-white py-2 px-8 font-bold rounded-md fixed bottom-28 mx-auto'
                        disabled={page == 7}
                        onClick={() => setPage(page + 1)}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default MultiForm