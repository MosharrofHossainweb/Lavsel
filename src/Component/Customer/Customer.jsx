import React from 'react'

const Customer = () => {
  return (
    <>
      <section className="customer">
        <div className="container">
            <div className="Net_text w-full flex justify-center items-center">
                <div className="Nerwork_text">

                <h2 className='font-Rubik font-bold w-[330px] pb-5 lg:w-[380px] text-center text-[20px] md:text-[25px] lg:text-[35px] '>Trusted by Thousands of Happy Customer</h2>
                <p className='w-[330px] text-[#4F5665] lg:w-[390px] text-center pb-5 font-normal font-Rubik lg:text-[16px] text-[10px]'>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>
            </div>
            <div className="Reviwe flex flex-wrap justify-around ">
                {/* ---------card------------ */}

                <div className="Single_card w-[330px] rounded-lg hover:border-solid hover:border-[#F53838] hover:border-[2px] p-5 mb-2 hover:bg-[#f9f8f8]">
                  <div className="card_img flex gap-3">
                    <img src="image\review1.png" alt="img" className='w-[305px] h-[50px]' />
                    
                  </div>
                  <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                </div>
                {/* ---------card------------ */}
                <div className="Single_card w-[330px]  rounded-lg  p-5 mb-2 hover:bg-[#f9f8f8] hover:border-solid hover:border-[#F53838] hover:border-[2px] ">
                  <div className="card_img flex gap-3">
                    <img src="image\review2.png" alt="img" className='w-[305px] h-[50px]' />
                    
                  </div>
                  <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                </div>
                {/* ---------card------------ */}

                <div className="Single_card w-[329px] rounded-lg hover:border-solid hover:border-[#F53838] hover:border-[2px] p-5 mb-2 hover:bg-[#f9f8f8]">
                  <div className="card_img flex gap-3">
                    <img src="image\review3.png" alt="img" className='w-[305px] h-[50px]' />
                    
                  </div>
                  <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                </div>
                {/* ---------card------------ */}

            </div>
        </div>
      </section>
    </>
  )
}

export default Customer
