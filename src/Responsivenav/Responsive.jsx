
import  { useState } from 'react'
import '../../src/Responsivenav/Responsive.css';
import { RiMenuUnfold4Fill } from "react-icons/ri";

const Responsive = () => {
    const[show,setShow]=useState(false)

  return (
    <>
      <section className="responsiveNav lg:invisible md:invisible visible  ">

          <RiMenuUnfold4Fill onClick={()=>setShow(!show)} className="w-[45px] h-[45px] bg-[#C4C4C426] p-[7px] rounded-[10px] text-blue-600" />
          {
            show&&
          <div className="resmenu bg-slate-600 ">
                   
                    <ul className=''>
                        <li><a className='text-center leading-none text-[12px] rounded-lg inline-block  hover:bg-blue-500 ' href='#'>About</a></li>
                        <li><a className='text-center leading-none text-[12px] rounded-lg inline-block  hover:bg-blue-500 ' href='#'>Features</a></li>
                        <li><a className='text-center leading-none text-[12px] rounded-lg inline-block  hover:bg-blue-500 ' href='#'>Pricing</a></li>
                        <li><a className='text-center leading-none text-[12px] rounded-lg inline-block  hover:bg-blue-500 ' href='#'>Testimonials</a></li>
                        <li><a className='text-center leading-none text-[12px] rounded-lg inline-block  hover:bg-blue-500 ' href='#'>Help</a></li>

                    </ul>
                    <div className="menu-btn  gap-1 Lg:gap-3">
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-[rgb(246,246,246,5)] px-[18px] py-[3px] rounded-[50px]">Sign In</button>
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-[rgb(246,246,246,5)] px-[18px] py-[3px] rounded-[50px]">Sign Up</button>
                    </div>
            </div>
          }
      </section>
    </>
  )
}

export default Responsive
