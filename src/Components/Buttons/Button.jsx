// import { IoIosArrowDroprightCircle } from "react-icons/io"
import { RiArrowDropRightLine } from "react-icons/ri";


export const Button = ({children, id, className, variant = 'primary', IconVarient = 'secondary'}) => {
    const btnClass = variant === 'primary' ? ' pl-[22px] pr-[18px] py-[8px]' : 'm-[1px] pl-[22px] pr-[18px] pt-[10px] pb-[8px] bg-[#1a1f25] rounded-[50px]';
    const iconClass = IconVarient === 'secondary' ? '':'group-hover:bg-gradient-to-r from-colorTheme group-hover:text-white';
    return (
        <button  id={id} className={`${className} h-[48px] text-font rounded-t-full rounded-b-full text-white gradient-color  ${id ? 'w-full':'max-w-[210px]'}`}>
                <a className={`flex items-center justify-between gap-[15px] ${btnClass}`} href="/">
                    <span className="font-Inter tracking-wide text-[16] leading-[24px] font-[500]">
                        {children}
                    </span>
                    <div className={`w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white text-[#dd933e] ${iconClass}`}>
                    <RiArrowDropRightLine size={30} />
                    </div>
                </a>
        </button>
    )
}
