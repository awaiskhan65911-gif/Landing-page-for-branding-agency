import { FaPlusCircle } from 'react-icons/fa'
import team from '../assets/data/Team.json'
import { MdOutlineFacebook } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa6'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { GrInstagram } from 'react-icons/gr'

export const TeamSection = () => {
    return (
        <section className="relative">
            <div className="absolute bg-[url('/images/Shapes/shape-19.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full -z-10"></div>
            <div className="flex flex-col items-center w-full max-w-[1456px] mx-auto px-8">
                <div className="text-white flex flex-col items-center justify-center relative mb-12">
                    <h3 className="text-2xl mb-4 opacity-50 ">Our Team</h3>
                    <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center">{"Empower You "}
                        <br />
                        <span className="gradient-text">
                            Brand Agency Team Member
                        </span>
                    </h2>
                </div>
                <div className="w-full flex  flex-wrap justify-center items-center lg:flex-nowrap  lg:justify-between gap-4">
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
                                    <img src={src} alt="img" className="rounded-[32px] w-full h-full p-[2px]" />
                                </div>
                                <div className="bg-[#161b2299] px-4 py-2 text-[#fff] hover:text-[#181e25] hover:bg-[#fff6] backdrop-blur-[20px] absolute  left-0 bottom-0 w-full rounded-b-3xl flex items-center justify-between transition-all duration-500">

                                    <div className="bg-['url(/images/Shapes/shape-17.png')] inset-0 h-full  bg-cover bg-no-repeat bg-center left-0 top-0 -z-10">
                                        <h3 className='font-Outfit text-xl Lg:text-2xl'>{Name}</h3>
                                        <span className='text-sm text-font'>{Post}</span>
                                    </div>
                                    <div className=''>
                                        <FaPlusCircle size={30} className='text-[#fff]' />
                                        <ul className="bg-[url('/images/Shapes/shape-18.png')] bg-cover bg-center bg-no-repeat absolute  p-3 flex flex-col gap-4 bottom-5 right-2 opacity-0  translate-y-2   hover:opacity-100 hover:scale-100 hover:translate-y-0 transition-all duration-500 ease-in-out z-20  cursor-pointer ">
                                            <li><MdOutlineFacebook size={25} /></li>
                                            <li><FaLinkedin size={25} /></li>
                                            <li><AiFillTwitterCircle size={25} /></li>
                                            <li><GrInstagram size={25} /></li>
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
