import { AiFillTwitterCircle } from "react-icons/ai"
import { CiMail, CiPhone } from "react-icons/ci"
import { FaLinkedin } from "react-icons/fa6"
import { GrInstagram } from "react-icons/gr"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineFacebook} from "react-icons/md"
import "bootstrap-icons/font/bootstrap-icons.css";


export const FooterSection = () => {
    const company = ["Home", "About Us", "Our Services", "Project & Portfolio", "Contact Us"]
    const contact = [
        {
            icon: <HiOutlineLocationMarker  />,
            text: "235 Park Ave S, New York, NY 10010 United States",
        },
        {
            icon: <CiMail  />,
            text: "Infobranding@gmail.com",
        },
        {
            icon: <CiPhone />,
            text: "000 (123) 456 789",
        },
    ];
    const icons = [<i class="bi bi-facebook "></i>, <i class="bi bi-instagram"></i>, <i class="bi bi-linkedin"></i>, <i class="bi bi-twitter"></i>]
    const services = ["Consulting", "Community", "Brand Strategy", "Design", "Communication"]
    return (
        <section className="relative pt-[70px] md:pt-[120px]">
            <div className="absolute bg-[url('/images/Shapes/shape-25.png')] bg-center bg-no-repeat left-0 top-0 w-full h-full -z-10"></div>
            <div className="relative w-full max-w-[1350px] mx-auto px-[15px]">
                <div className="flex flex-wrap lg:flex-nowrap -mx-[12px]  relative mb-[40px]">
                    <div className="flex shrink-0 grow-0 basis-auto w-full lg:w-5/12 px-[12px]">
                        <div className="relative pt-[40px] pl-[40px] pr-[35px] pb-[37px] rounded-[24px] overflow-hidden bg-[#212830] mb-[40px] lg:mb-0 lg:mr-[48px]">
                            <div className="absolute left-0 top-0 bg-[url('/images/Shapes/shape-26.png')] bg-center bg-no-repeat bg-cover  h-full w-full z-0 ">
                            </div>
                            <div className="relative mb-[24px] cursor-pointer">
                                <img src="/images/Logo/logo.png" alt="img" className="max-w-full h-auto inline-block" />
                            </div>
                            <p className="text-[15px] leading-[24px] font-ambit text-[#b0b0b0] mb-[24px] relative">But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                            <h6 className="text-[#fff] block relative font-ambit text-[15px] leading-[17px] mb-[20px] font-[700]">
                                Follow Us:
                            </h6>
                            <ul className="relative flex items-center gap-x-[12px] ">
                                {icons.map((items, index) => {
                                    return (
                                        <li key={index} className="relative inline-block"><a className="relative  w-[30px] h-[30px] leading-[30px] flex  items-center justify-center border-[1px] border-solid border-[#95989B] hover:border-opacity-0  transition-all duration-500  rounded-full text-[11px] text-[#95989B] 
                                        after:bg-[url('/images/Shapes/shape-29.png')] gradient-icon
                                        after:absolute
                                        after:bg-no-repeat 
                                        after:bg-center
                                        after:h-[28px]
                                        after:w-[28px]
                                        after:opacity-0
                                        after:hover:opacity-100
                                        after:hover:scale-[.99]
                                        after:transition-all
                                        after:duration-500
                                        " href="">{items}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col shrink-0 grow-0 w-full lg:w-7/12 px-[12px]">
                        <div className="relative bg-[#212830] rounded-[24px] overflow-hidden p-[35px]">
                            <div className="bg-[url('/images/Shapes/shape-26.png')] bg-cover  h-full  w-full top-0 right-0 z-0 bg-no-repeat bg-center absolute ">
                            </div>
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="flex flex-col shrink-0  basis-auto w-full sm:w-[50%] md:w-2/6 px-[12px]">
                                    <div>
                                        <div className="relative block mb-[21px]">
                                            <h3 className="text-[22px] leading-[29px] text-[#fff] font-ambit font-[700] ">Company</h3>
                                        </div>
                                        <ul className="flex flex-col">
                                            {company.map((items, index) => {
                                                return (
                                                    <li key={index} className="relative block mb-[13px]"><a className="relative inline-block text-[15px] leading-[23px] text-[#b0b0b0] hover:text-[#fff] transition-all duration-500 font-ambit" href="">{items}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col shrink-0 grow-0 basis-auto w-full sm:w-[50%] md:w-2/6 px-[12px]">
                                    <div>
                                        <div className="mb-[21px] relative block">
                                            <h5 className="text-[22px] leading-[29px] text-[#fff] font-ambit font-[700]">Our Services</h5>
                                        </div>
                                        <ul className="flex flex-col">
                                            {services.map((items, index) => {
                                                return (

                                                    <li key={index} className="relative block mb-[13px]" ><a href="/" className="relative inline-block text-[15px] leading-[23px] text-[#b0b0b0] font-ambit hover:text-[#fff] transition-all duration-500">{items}</a></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col shrink-0 grow-0 basis-auto w-full sm:w-[50%] md:w-2/6 px-[12px] ">
                                    <div className="">
                                        <div className="mb-[21px] relative block">
                                            <h3 className="relative text-[22px] leading-[29px] text-[#fff] font-ambit font-[700]">Contact Info</h3>
                                        </div>
                                        <div className="">
                                            <ul className="">
                                                {contact.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="relative flex items-center  font-ambit text-[14px] leading-[23px] mb-[20px] gap-[10px] text-[#b0b0b0] hover:text-[#fff] transition-all duration-500 cursor-pointer"
                                                    >
                                                        <a href="/" className="relative  min-w-[22px] text-[22px]">{item.icon}</a>
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-0 h-[1px] gradient-color rounded-full opacity-20" />
                <div className="relative w-full py-[30px] md:pt-[24px] md:pb-[100px]">
                    <div className="relative block text-center md:flex md:flex-row items-center justify-between">
                        <div className="mb-[15px] md:mb-0">
                            <p className="text-[15px] leading-[23px] font-ambit text-[#b0b0b0] font-[400]">
                                Copyright © 2025  by <a href="#" className="text-[#fff] inline-block hover:underline">bplugins</a>
                            </p>
                        </div>
                        <ul className="relative justify-center flex items-center md:justify-normal gap-[58px] font-ambit">
                            <li className="relative inline-block text-[#b0b0b0] text-[15px] leading-[23px] hover:text-[#fff] transition-all duration-500 cursor-pointer">Teams Of Services</li>
                            <li className="relative inline-block text-[#b0b0b0] text-[15px] leading-[23px] hover:text-[#fff] transition-all duration-500 cursor-pointer">Privacy Policy</li>
                            <li className="relative inline-block text-[#b0b0b0] text-[15px] leading-[23px] hover:text-[#fff] transition-all duration-500 cursor-pointer">Cooke Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}