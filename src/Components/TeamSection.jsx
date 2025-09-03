import { FaPlus } from 'react-icons/fa'
import team from '../assets/data/Team.json'
import { MdOutlineFacebook } from 'react-icons/md'
import {  FaLinkedin } from 'react-icons/fa6'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'

export const TeamSection = () => {
    return (
        <section className="relative pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px]">
            <div className="absolute bg-[url('/images/Shapes/shape-19.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full -z-10"></div>
            <div className=" relative w-full !text-center max-w-[1350px] mx-auto px-[15px]">
                <div className="relative block mb-[78px]">
                    <h3 className="relarive block font-ambit text-[24px] leading-[36px] text-[#b5b5b5] font-[400] mb-[24px]">Our Team</h3>
                    <h2 className="relative text-[34px] text-[#fff] leading-[42px] md:text-[50px] md:leading-[58px] font-[400] font-ambit">{"Empower You "}
                        <br className='hidden md:block' />
                        <span className="gradient-text relative inline-block font-[700]">
                            Brand Agency Team Member
                        </span>
                    </h2>
                </div>
                <div className="w-full flex  flex-wrap justify-center items-center lg:flex-nowrap  lg:justify-between gap-[24px]">
                    {team.map(({ id, Name, Post, src }) => {
                        return (
                            
                                <div key={id} className="relative block grow group">
                                    <div className='
                                    before:h-full
                                    before:w-full 
                                    before:content-[""]
                                    before:absolute
                                    before:inset-0
                                    before:bg-[linear-gradient(90deg,#4BB6EF_16.75%,#DD933E_50.1%,#DD933E_50.1%,#D82E5A_138.04%)] 
                                    before:rounded-[32px]
                                    before:-z-10
                                    before:opacity-0
                                    before:group-hover:opacity-100
                                    before:transition-all
                                    before:duration-500
                                    before:ease-in-out
                                '>
                                    <img src={src} alt="img" className="rounded-[32px] w-full h-full pt-[2px] px-[2px]" />
                                </div>
                                <div className="bg-[#161b2299] px-[24px] py-[19px] text-[#fff]  group-hover:bg-[#fff6] backdrop-blur-[20px] absolute  left-0 bottom-0 w-full rounded-b-[32px] flex items-center justify-between transition-all duration-500 z-20">
                                    <div className='text-start'>
                                    <div className="bg-['url(/images/Shapes/shape-17.png')] h-full w-full  bg-cover bg-no-repeat bg-center left-0 top-0 absolute -z-10">
                                    </div>
                                        <h3 className='text-[#fff] font-ambit text-[22px] leading-[22px] mb-[11px] font-[700] group-hover:text-[#181e25] hover:underline'>{Name}</h3>
                                        <span className='font-ambit relative block text-[15px] leading-[23px] text-[#b5b5b5] group-hover:text-[#545454]'>{Post}</span>
                                    </div>
                                    <div className='group/dropdown'>
                                        <div className=' w-[36px] h-[36px] bg-[#181e25] rounded-full relative flex items-center justify-center '>
                                        <FaPlus size={20}   className='text-[#fff] ' />
                                        </div>
                                        <ul className="bg-[url('/images/Shapes/shape-18.png')] w-[60px]  bg-cover bg-center bg-no-repeat absolute  p-3 flex flex-col items-center justify-center gap-4 bottom-5 right-[12px] opacity-0 scale-y-0 origin-bottom group-hover/dropdown:opacity-100 group-hover/dropdown:visiable group-hover/dropdown:scale-y-[1]  transition-all duration-500 ease-in-out z-20 group-hover/dropdown:pointer-events-auto cursor-pointer pointer-events-none text-[#464b51]">
                                            <li className='relative block mb-[12px]'><MdOutlineFacebook size={25} /></li>
                                            <li className='relative block mb-[12px]'><FaLinkedin size={25} /></li>
                                            <li className='relative block mb-[12px]'><AiFillTwitterCircle size={25} /></li>
                                            <li className='relative block mb-[12px]'><GrInstagram size={25} /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div >
                )
                    })}
            </div>
        </div>
        </section >
    )
}
