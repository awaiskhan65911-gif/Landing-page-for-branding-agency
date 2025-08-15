import { IoIosArrowUp } from "react-icons/io"
import { useEffect, useState } from "react"

export const Progressbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0)
    useEffect(()=>{

        const handleScroll = () =>{
            const totalscroll = document.documentElement.scrollHeight - window.innerHeight
            const currentprogress = window.scrollY
            const progress = (currentprogress / totalscroll) * 100;
            setScrollProgress(progress)
        }
        window.addEventListener("scroll", handleScroll)
    },[])
    const handletotop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    const progressStyle = {
         background: `conic-gradient(#ffffff ${scrollProgress}%, transparent ${scrollProgress}%)`,
         opacity: scrollProgress === 0 ? '0' : '1',
         cursor: scrollProgress === 0 ? 'auto' :'pointer',
         transition: "all 0.5s ease,background 0.5s ease",
    }
    return (
            <div
            onClick={handletotop}
            style={progressStyle} className="rounded-full w-[50px] h-[50px] flex bg-[#fff] items-center justify-center bottom-4 right-12 fixed z-30 ">
                <div className="bg-bodycolor  rounded-full w-11 h-11 flex items-center justify-center">
                <IoIosArrowUp size={25} className="text-[#fff]"/>
                </div>
            </div>
    )
}