import student from '../icons/DescribesYou/student.png'
import lifelong from '../icons/DescribesYou/lifelong.png'
import other from '../icons/DescribesYou/other.png'
import parent from '../icons/DescribesYou/parent.png'
import professional from '../icons/DescribesYou/professional.png'
import teacher from '../icons/DescribesYou/teacher.png'

const DescribesYou = () => {

    return (
        <div className='w-full h-full text-center'>
            <h1 className='text-2xl md:text-3xl font-medium mb-4'>Which describes you best?</h1>
            <p className='mb-[2vmax] text-slate-500'>This will help us personalize your experience</p>
            <div>
                <div className='flex flex-col gap-[2vmax]'>
                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={student} alt="" />
                        <h1>Student <span className='text-slate-500'>or soon to be enrolled</span></h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={professional} alt="" />
                        <h1>Professional <span className='text-slate-500'>pursuing a career</span></h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={parent} alt="" />
                        <h1>Parent <span className='text-slate-500'>of a school-age child</span></h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={lifelong} alt="" />
                        <h1>Lifelong learner</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={teacher} alt="" />
                        <h1>Teacher</h1>
                    </button>

                    <button onClick={() => setSelect(!select)} className={`focus:border-green-500 flex items-center gap-6 border-[1px] border-slate-300 px-2 py-1 rounded-md`}>
                        <img className='block w-[5%]' src={other} alt="" />
                        <h1>Other</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DescribesYou