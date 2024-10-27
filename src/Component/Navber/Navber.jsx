import Responsive from "../../Responsivenav/Responsive";


const Navbar = () => {
  return (
    <nav className="lg:mt-6 md:mt-4 mt-2 ">
      <div className="container">
        <div className="menu-row flex flex-wrap justify-between items-center w-[330px] lg:w-[1380px] md:w-[760px]">
          <div className="menu-logo flex gap-[230px] ">
            <img src="image/Logo.png" alt="Company Logo"className="w-[75px] h-[25px] md:w-[80px] h-[40px] lg:w-[148px] lg:h-[36px] " />
              <Responsive />
          </div>
          <div className="main_menu invisible lg:visible ">
            <ul className="flex items-center gap-3 md:gap-5  lg:gap-10">
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">About</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Pricing</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Features</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Help</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Testimonials</a></li>
            </ul>

          </div>
          <div className="menu-btn invisible lg:visible  gap-1 Lg:gap-3">
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-white w-[100px] py-[3px] hover:border-[2px] border-solid border-yellow-600 rounded-[50px]">Sign In</button>
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-white w-[100px] py-[3px] hover:border-[2px] border-solid border-yellow-600 rounded-[50px]">Sign Up</button>
                    </div>  
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
