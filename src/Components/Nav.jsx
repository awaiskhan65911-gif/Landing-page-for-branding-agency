import { useState } from "react"
import { CiSquareChevDown } from "react-icons/ci"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"
import { useEffect } from "react";
import { Button } from "../Components/Buttons/Button"
import navData from "../assets/data/Nav.json"

export const Nav = () => {
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
            <nav className={`transition-all duration-500  ${scrolled ? "sticky top-0 shadow-xl bg-black flex justify-between z-30 w-full py-4 px-6 " : "flex justify-between absolute top-5 z-30 bg-navbgcolor w-full rounded-t-full rounded-b-full py-4 px-6"}`}>
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
                                <li key={index}> <a href="/">{items}</a></li>
                            )
                        })}
                    </ul>

                    <GiHamburgerMenu size={40} className="lg:hidden cursor-pointer" onClick={handlemanu} />
                </div>
                <div className="hidden lg:flex justify-center ">
                    <Button>Contact Us</Button>
                </div>

            </nav>
            <nav className={`bg-bodycolor postion fixed   w-full sm:w-2/5 right-0 top-0 h-full flex flex-col items-start shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isopen ? 'translate-x-0' : 'translate-x-full'}`}>
                <RxCross1 color="white" size={20} className="absolute right-2 top-2 cursor-pointer" onClick={handleclosemanu} />
                <div className="px-14 pt-6 pb-24">
                    <a href="/">
                        <img src="/images/Logo/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="text-white px-6 w-full uppercase tracking-wide">
                    <ul>
                        {title.map((items, index) => {
                            return (
                          <div key={index}>
                        <hr className="opacity-30" />
                        <li  className="nav-li"> <a href="/">{items}</a> <CiSquareChevDown size={20} /></li>
                        <hr className="opacity-30" />
                          </div>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

