// import { IoIosArrowDroprightCircle } from "react-icons/io"
import { RiArrowDropRightLine } from "react-icons/ri";


export const Button = ({children, id, className, variant = 'primary', IconVarient = 'secondary'}) => {
    const btnClass = variant === 'primary' ? 'm-0.5 px-4 py-2' : 'm-[1.2px] px-4 py-2 bg-bodycolor rounded-full';
    const iconClass = IconVarient === 'secondary' ? '':'group-hover:bg-gradient-to-r from-colorTheme group-hover:text-white';
    return (
        <button  id={id} className={`${className} text-font rounded-t-full rounded-b-full text-white gradient-color max-w-[210px]`}>
                <a className={`flex items-center justify-between gap-3 ${btnClass}`} href="/">
                    <span className="text-font font-semibold">
                        {children}
                    </span>
                    <div className={`w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white text-[#dd933e] ${iconClass}`}>
                    <RiArrowDropRightLine size={30} />
                    </div>
                </a>
        </button>
    )
}
