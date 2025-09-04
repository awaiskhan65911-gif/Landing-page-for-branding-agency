import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5"
import {process} from "../utils/Constant"
import { FaArrowsToCircle } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
export const ProcessSection = () => {
    const iconMap = {
        IoSettingsOutline: IoSettingsOutline,
        FaArrowsToCircle: FaArrowsToCircle,
        IoBulbOutline: IoBulbOutline,
        IoIosPeople: IoIosPeople,
    };


    return (
        <section className="relative pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px]">

            <div className="absolute bg-[url('/images/Shapes/shape-9.png')] bg-no-repeat bg-cover left-0 top-[24px] w-[452px] h-[calc(100%-48px)] z-0"></div>

            <div className="absolute bg-[url('/images/Shapes/shape-10.png')] bg-no-repeat bg-cover right-0 top-[24px] w-[486px] h-[calc(100%-48px)] z-0"></div>

            <div className="z-10 w-full max-w-[1350px] mx-auto px-[15px] relative">
                <div className="text-white text-center mb-[100px] relative block">
                    <h3 className="relative font-ambit block text-[24px] leading-[36px] text-[#b5b5b5] font-[400] mb-[24px]">Brand Process</h3>
                    <h2 className="relative text-[34px] leading-[42px] font-[400] md:text-[50px] md:leading-[58px] md:font-[500] font-ambit">
                        We Find a Unique Easy Steps To Get <br className=" hidden lg:block" />
                        Your <span className="gradient-text font-[700]">Solution Our Solution</span>
                    </h2>
                </div>

                <div className="w-full grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                    {process.map(({ id, Title, icon }) => {
                        const Icon = iconMap[icon];
                        return (
                            <div key={id} className="bg-[#fff] w-full rounded-[32px] group relative">
                                <div className="bg-[url('/images/Shapes/shape-8.png')] h-full w-full left-0 top-0 bg-cover bg-no-repeat bg-center absolute z-0"></div>
                                <div className="absolute rounded-3xl inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-colorThemeSlider scale-90 group-hover:scale-100"></div>
                                <div className="relative flex flex-col justify-center items-center p-4 z-20">
                                    <div className="my-6 bg-[#fff] group-hover:bg-opacity-25 rounded-full w-[150px]  h-[150px] flex items-center justify-center">
                                        {Icon && <Icon className="text-[#333] opacity-80 group-hover:text-[#fff]" size={100} />}
                                    </div>
                                    <div className="text-center mb-4">
                                        <h2 className="text-[23px] leading-[29px] font-[700] text-[#333] group-hover:text-white">{Title}</h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}