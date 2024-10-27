import CountUp from 'react-countup';
import { FaServer } from "react-icons/fa6";
const Counter3 = () => {
  return (
    <>
      <div className="counter">
        <div className="counter_div_row flex items-center gap-2">
            <div className="counter_log p-2 bg-slate-300 rounded-[50%]">
            <FaServer className='text-[#F53838]' />
            </div>
            <div className="count">
            <div className="counter_div flex">
            <CountUp end={50} className='font-Rubik font-bold  lg:text-[25px] md:text-[20px] text-[16px]' />
           <h2 className='font-Rubik font-bold lg:text-[25px] md:text-[20px] text-[16px]'>+</h2>
            </div>
            <h2 className='font-Rubik font-medium lg:text-[20px] md:text-[16px] text-8px'>Locations</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default Counter3
