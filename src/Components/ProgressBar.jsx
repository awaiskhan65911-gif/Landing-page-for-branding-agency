import { IoIosArrowUp } from "react-icons/io"
import { useEffect, useState } from "react"

export const ProgressBar = () => {
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
            style={progressStyle} className="rounded-full  w-[50px] h-[50px] bg-[#fff]  bottom-[30px] right-[30px] fixed z-30  flex items-center justify-center">
                 <div className="flex items-center justify-center bg-bodycolor  rounded-full  w-[46px] h-[46px]">
                <IoIosArrowUp size={20} className="text-[#fff]"/>
                </div>
            </div>
    )
}