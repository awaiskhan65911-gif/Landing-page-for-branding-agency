import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"
import { useEffect } from "react";
import { Button } from "./Buttons/Button"
import navData from "../assets/data/Nav.json"
import { FaChevronDown } from "react-icons/fa";

export const NavSection = () => {
    const [{ title }] = navData
    const [isopen, setisopen] = useState(false)

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handlemanu = () => {
        setisopen(!isopen)
    }
    const handleclosemanu = () => {
        setisopen(!isopen)
    }
    return (
        <>
        <div  className={`absolute w-full top-5 left-0 z-50 transition-all duration-500  ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}> 
            <nav className={`flex justify-between relative z-30 bg-navbgcolor  rounded-t-full rounded-b-full p-6  w-full max-w-[1430px] mx-auto container`}>
                <div>
                    <div className="items-center">
                        <a href="/">
                            <img src="/images/Logo/logo-4.png" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center">
                    <ul className="hidden lg:flex justify-between  lg:gap-6 xl:gap-12 text-base transition-all duration-300 font-Outfit tracking-wide">
                        {title.map((items, index) => {
                            return (
                                <li key={index} className="font-Inter  text-[16px] leading-[26px] font-[400]"> <a href="/">{items}</a></li>
                            )
                        })}
                    </ul>

                    <GiHamburgerMenu size={40} className="lg:hidden cursor-pointer" onClick={handlemanu} />
                </div>
                <div className="hidden lg:flex justify-center ">
                    <Button>Contact Us</Button>
                </div>

            </nav>
            </div>
            <div className={`transition-all duration-500 z-40 border-b-[1px]  border-solid border-[#ffffff1a] fixed left-0 top-0 w-full bg-fixnavbgcolor ${scrolled ? "opacity-100 " : "opacity-0 pointer-events-none"}`}>   
                <nav className="relative left-0 top-0  hidden lg:flex justify-between z-30 w-full max-w-[1430px] p-6 mx-auto  container">
                <div>
                    <div className="items-center">
                        <a href="/">
                            <img src="/images/Logo/logo-4.png" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="text-white flex items-center justify-center">
                    <ul className="hidden lg:flex justify-between text-base transition-all duration-300 ">
                        {title.map((items, index) => {
                            return (
                                <li key={index} className="font-Inter mx-[10px] xl:mx-[25px] 2xl:mx-[25px] tracking-wider text-[16px] leading-[26px] font-[400]"> <a href="/" >{items}</a></li>
                            )
                        })}
                    </ul>
                    <GiHamburgerMenu size={40} className="lg:hidden cursor-pointer" onClick={handlemanu} />
                </div>
                <div className="hidden lg:flex justify-center ">
                    <Button>Contact Us</Button>
                </div>

            </nav>
            </div>

                <div onClick={handleclosemanu} className={` transition-opacity duration-300 ease-in-out z-50 right-full bg-[#000] fixed w-full h-full left-0 top-0  ${isopen ? 'visible opacity-[.7]':'invisible opacity-0 '}`}></div>
            <nav className={`bg-bodycolor fixed   w-full sm:w-[300px] right-0 top-0 h-full  transform transition-transform duration-300 ease-in-out z-50 pr-[30px] ${isopen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute right-[25px] top-[10px] leading-[30px] w-[24px] text-center text-[18px] cursor-pointer z-50">
                <RxCross1 color="white"   onClick={handleclosemanu} />
                </div>
                <div className="absolute left-0 top-0 w-full h-full max-h-full overflow-y-auto bg-[#1a1f25]">
                <div className="relative pt-[50px] pb-[100px] px-[25px] text-left">
                    <a href="/">
                        <img src="/images/Logo/logo.png" alt="logo" className="max-w-[160px]" />
                    </a>
                </div>
                <div >
                    <div className="block">
                    <ul className="relative block w-full float-none">
                        {title.map((items, index) => {
                            return (
                                <div key={index}>
                        
                        <li  className={`relative block border-t-[1px] border-solid border-[#ffffff1a] ${index === 5 ? 'border-b-[1px] border-solid border-[#ffffff1a]':''}`}>
                         <a href="/" className="relative block leading-[24px] py-[10px] px-[25px] text-[14px] font-[500] text-[#fff] font-ambit uppercase tracking-wide">{items}</a> 
                        <div className={`absolute right-[6px] top-[6px] h-[32px] w-[32px] flex justify-center items-center text-[#fff] bg-[#ffffff1a] border-2px ${index === 5 ? 'hidden' : ''}`}><FaChevronDown  size={20} /></div>
                        </li>
                          </div>
                            )
                        })}
                    </ul>
                    </div>
                </div>
            </div>
            </nav>
        
        </>
    )
}

