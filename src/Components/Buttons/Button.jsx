import { IoIosArrowDroprightCircle } from "react-icons/io"


export const Button = ({children, primaryBtn, id,className}) => {
    return (
        <button  id={id} className={`${className} text-font rounded-t-full rounded-b-full text-white gradient-color max-w-[210px]`}>
                <a className={`flex items-center justify-between gap-3
                 ${primaryBtn ? 'm-[1.2px] px-4 py-2 bg-bodycolor rounded-full' : 'm-0.5 px-4 py-2' } `} href="/">
                    <span className="text-font font-semibold">
                        {children}
                    </span>
                    <IoIosArrowDroprightCircle size={30} />
                </a>
        </button>
    )
}
