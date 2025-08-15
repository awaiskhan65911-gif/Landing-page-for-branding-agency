import { AiFillTwitterCircle } from "react-icons/ai"
import { CiMail, CiPhone } from "react-icons/ci"
import { FaLinkedin } from "react-icons/fa6"
import { GrInstagram } from "react-icons/gr"
import { MdOutlineFacebook, MdOutlineLocationOn } from "react-icons/md"
import Footerdata from "../assets/data/Nav.json"

export const Footer = () => {
    const [{title}] = Footerdata
    return (
        <section className="relative ">
            <div className="absolute bg-[url('/images/Shapes/shape-25.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full -z-10"></div>
            <div className="relative">
                <div className="flex flex-col lg:flex-row gap-3 relative mb-10">
                <div className="text-[#fff] mr-8 w-full lg:w-5/12">
                    <div className="p-10 relative">
                    <div className="absolute left-0 top-0 bg-[url('/images/Shapes/shape-26.png')] bg-center bg-no-repeat bg-cover  h-full w-full -z-10 rounded-3xl mb-6">
                    </div>
                            <div className="mb-6 cursor-pointer">
                                <img src="/images/Logo/logo.png" alt="img" />
                            </div>
                            <p className="mb-6 text-font">But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                            <h6 className="mb-6 text-font">
                                Follow Us:
                            </h6>
                            <ul className="flex gap-4 footer-icon">
                                <li><a href="/"><MdOutlineFacebook/> </a></li>
                                <li><a href="/"> <FaLinkedin /></a></li>
                                <li><a href="/"><AiFillTwitterCircle /> </a></li>
                                <li><a href="/"><GrInstagram /> </a></li>
                            </ul>
                    </div>
                </div>
                <div className="w-full  lg:w-[60%] relative">
                    <div className="grid grid-cols-1  sm:grid-cols-2 sm:grid-rows-1 gap-10  lg:grid-cols-3 lg:grid-rows-1   items-start relative p-10 overflow-hidden text-[#b0b0b0]">
                    <div className="bg-[url('/images/Shapes/shape-26.png')] bg-center bg-no-repeat
                    bg-cover  h-full rounded-3xl w-full absoute top-0 right-0 -z-10 absolute">
                        </div>
                            <div className="footer-li">
                                <h5 className="font-bold mb-4 text-2xl text-[#fff] font-Outfit tracking-wider">Company</h5>
                                <ul className="flex flex-col gap-5 text-sm">
                                    {title.map((items,index) => {
                                        return(
                                            <li key={index}>{items}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="footer-li">
                                <h5 className="font-bold mb-4 text-2xl text-[#fff] font-Outfit tracking-wider">Our services</h5>
                                <ul className="flex flex-col gap-4 text-sm">
                                    <li >Consulting</li>
                                    <li>Community</li>
                                    <li>Brand Strategy</li>
                                    <li>Design</li>
                                    <li>Communication</li>
                                </ul>
                            </div>
                            <div className="footer-li">
                                <h5 className="font-bold mb-4 text-2xl text-[#fff] font-Outfit tracking-wider">Contact Info</h5>
                                <ul className="flex flex-col gap-4 text-sm items-start justify-center ">
                                    <li className="flex gap-1 items-center justify-center"><MdOutlineLocationOn size={27} /> <a href="/">235 Park Ave S, New York, NY 10010 United States</a></li>
                                    <li className="flex gap-1 items-center justify-center"><CiMail size={25} /><a href="/">Infobranding@gmail.com</a></li>
                                    <li className="flex gap-1 items-center justify-center"><CiPhone size={25} /><a href="/">000 (123) 456 789</a></li>
                                </ul>
                            </div>
                        </div>
                </div>
                </div>
                <hr className="border-0 h-[1px] gradient-color rounded-full"/>  
                  <div className="py-10 flex flex-col  md:flex-row items-center justify-between text-[#b0b0b0]">
                    <p>
                        Copyright © 2025  by <a href="#" className="text-[#fff]">bplugins</a>
                    </p>
                    <div className="footer-bottom">

                    <ul className="flex items-center gap-12 ">
                        <li>Teams Of Services</li>
                        <li>Privacy Policy</li>
                        <li>Cooke Policy</li>
                    </ul>
                    </div>
                  </div>           
            </div>
        </section>
    )
}