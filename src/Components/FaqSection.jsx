import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import {faq} from "../utils/Constant"
import { useState } from "react"
export const FaqSection = () =>{

   const [activeid,setactiveid] = useState(null)

   const handletoggle = (id) =>{
    setactiveid((preid) => (preid === id ? null : id))
   }
    return(
        <section className="relative pt-[70px] pb-[40px] md:py-[120px]">
            <div className="absolute bg-[url('/images/Shapes/shape-16.png')] bg-[right_center] bg-no-repeat bg-cover left-0 top-[70px] w-full h-[calc(100%-70px)] hidden md:block"></div>
              <div className="relative px-[15px] max-w-[1350px] w-full mx-auto">
                <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center">
                    <div className="flex flex-col w-full lg:w-[50%] pr-[12px]">
                    <div className="relative block">
                    <div className="relative block mb-[60px]">
                        <h3 className="relative block text-[24px] leading-[36px] text-[#b5b5b5] font-[400] font-ambit mb-[24px]">Some Question</h3>
                        <h2 className="text-[#fff] text-[34px] leading-[42px] md:text-[50px] md:leading-[58px] font-[400] font-ambit">{"Design That Where Ideas "}
                            <br className="hidden md:block" />
                            <span className="gradient-text relative inline-block font-[700]">
                                Take The Flight
                            </span>
                        </h2>
                    </div>
                    <ul className="flex flex-col gap-[24px]">
                    {faq.map(({Question,Answer,id}) => {
                        return(
                            <li key={id}  className="relative ">
                                <div onClick={()=> handletoggle(id)} className="relative block pr-[30px] cursor-pointer">
                                <h3 className={`text-[#b5b5b5] text-[22px] leading-[33px] font-[600] font-ambit ${activeid === id ? 'text-[#fff]':''} `}>{Question}

                                </h3>
                                <div className="absolute inline-block top-[4px] -right-[6px] ">
                                <MdOutlineKeyboardDoubleArrowRight  className={`text-[#b5b5b5] transition-all duration-500 ${activeid === id ? '-rotate-90 text-[#fff]':''}`} size={25}/>
                                </div>
                                </div>
                                 <div className={` transition-all duration-300 ease-in-out 
                                    ${activeid === id ? 'block relative pt-[16px] pr-[80px] pl-[32px]' : 'hidden'}`}>
                               <div >
                             <p className="text-[#e6e6e6] font-[400] relative font-Inter tracking-wider">{Answer}</p>
                            </div>
                        </div>
                            </li>
                        )
                    } )}
                    </ul>
                    </div>
                    </div>
                    <div className="w-full  lg:w-[50%] lg:pl-[12px]  md:flex basis-auto">
                   <div className="relative h-full rounded-[40px] gradient-color p-[2px] mt-[40px] lg:mt-0 lg:ml-[75px] ">
                    <img src="/images/Faq/faq-1.jpg" alt="" className="rounded-[40px] w-full " />
                    </div>
                    </div>
                  </div>
                </div>
        </section>
    )
}