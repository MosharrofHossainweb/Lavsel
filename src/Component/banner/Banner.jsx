import React from 'react'
import Counter from '../../Counter/Counter'
import Counter2 from '../../Counter/Counter2'
import Counter3 from '../../Counter/Counter3'

const Banner = () => {
  return (
    <>
      <section className="banner lg:mt-[100px] mt-0 md:mt-[50px]">
        <div className="container">
                <div className="banner">
                    <div className="banner_row flex flex-wrap lg:gap-10 md:gap-5 gap-2">
                        <div className="banner_text">
                            <h1 className="w-[320px] mt-2 lg:w-[550px] md:w-[350px] text-[#0B132A] font-Rubik lg:text-[50px] md:text-[36px] text-[24px] font-semibold ">Want anything to be easy with LaslesVPN.</h1>
                            <p className="text-[#4F5665] text-[8px] md:text-[12px] lg:text-[16px] w-[300px] lg:w-[550px] md:w-[350px]  " >Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <button className="font-Rubik text-[8px] md:text-[12px] lg:text-[16px] text-[#FFFFFF] bg-[#F53838] hover:bg-[#c02828] Lg:px-[70px] md:px-[55px] md:py-[13px] lg:py-[17px] px-[55px] py-[13px] rounded-lg mt-[20px] mb-[50px] md:mt-[20px] md:mb-[50px] lg:mt-[50px] lg:mb-[120px] active:scale-[1.1] ">Get Started</button>
                        </div>
                        <div className="banner_img">
                            <img src="image\Illustration 1.png" alt="" />
                        </div>
                    </div>
                    <div className="Review">
                        <div className="review_row mt-[30px] lg:mt-[50px] md:mt-[25px]">
                            <div className="user flex  flex-wrap w-[330px] md:w-[670px] lg:w-[1340px] justify-around">
                                <Counter/>
                                <Counter2/>
                                <Counter3/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </section>
    </>
  )
}

export default Banner
