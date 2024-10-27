import React from 'react'

const Plan = () => {
  return (
    <>
      <section className="plan mb-[30px] lg:mb-[100px] md:mb-[50px]">
        <div className="container">
            <div className="plan_box_row flex flex-wrap gap-2 justify-around items-center">
                <div className="plan_box1 w-[298px] border-[1px] hover:border-[3px] pl-12 rounded-md  border-solid border-[#be9595]">
                    <img src="image\Planimg.png" alt="" className='pb-[30px] pl-[27px]' />
                    <img src="image\plan1text.png" className='pr-[30px]' alt="" />
                <h2 className='text-[#0B132A] font-Rubik font-semibold lg:text-[25px] pl-[60px] pb-[30px]'>Free</h2>
                <button className='px-[52px] ml-4 py-[7px] border-solid border-2 border-[#F53838] rounded-[30px] mb-[30px] hover:bg-[#F53838]'>Select</button>
                </div>
                <div className="plan_box1 w-[300px] border-[1px] hover:border-[3px]  pl-12 rounded-md">
                    <img src="image\Planimg.png" alt="" className='pb-[30px] pl-[27px]' />
                    <img src="image\plantext2.png" className='pr-[30px]' alt="" />
                <h2 className='text-[#0B132A] font-Rubik font-semibold lg:text-[25px] pl-[40px] pb-[30px]'>$9 / mo</h2>
                <button className='px-[52px] ml-5 py-[7px] border-solid border-[1px] hover:border-[3px] border-[#F53838] rounded-[30px] mb-[30px] hover:bg-[#F53838]'>Select</button>
                </div>

                <div className="plan_box1 w-[300px] border-[1px] hover:border-[3px] pl-12 rounded-md">
                    <img src="image\Planimg.png" alt="" className='pb-[30px] pl-[27px]' />
                    <img src="image\plantext3.png" className='pr-[30px]' alt="" />
                <h2 className='text-[#0B132A] font-Rubik font-semibold lg:text-[25px] pl-[40px] pb-[30px]'>$12 / mo</h2>
                <button className='px-[52px] ml-5 py-[7px] border-solid border-[1px] hover:border-[3px] border-[#F53838] rounded-[30px] mb-[30px] hover:bg-[#F53838]'>Select</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Plan
