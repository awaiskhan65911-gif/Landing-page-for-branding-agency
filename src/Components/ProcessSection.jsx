import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5"
import process from "../assets/data/Process.json"
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
        <section className="relative   overflow-hidden">

            <div className="sm:w-[150px] absolute bg-[url('/images/Shapes/shape-9.png')] bg-no-repeat bg-cover left-0 top-6 w-[300px] h-full z-0"></div>

            <div className="sm:w-[150px] absolute bg-[url('/images/Shapes/shape-10.png')] bg-no-repeat bg-cover right-0 top-6 w-[300px] h-full z-0"></div>

            <div className="z-10 max-w-[1456px] mx-auto px-8">
                <div className="text-white text-center mb-24">
                    <h3 className="text-2xl mb-4 opacity-50 text-font">Brand Process</h3>
                    <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold">
                        We Find a Unique Easy Steps To Get <br />
                        Your <span className="gradient-text">Solution Our Solution</span>
                    </h2>
                </div>

                <div className="w-full grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {process.map(({ id, Title, icon }) => {
                        const Icon = iconMap[icon];
                        return (
                            <div key={id} className="bg-[#fff] w-full rounded-3xl group relative">
                                <div className="bg-[url('/images/Shapes/shape-8.png')] bg-cover bg-no-repeat bg-center absolute inset-0 z-0"></div>
                                <div className="absolute rounded-3xl inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-colorThemeSlider scale-90 group-hover:scale-100"></div>
                                <div className="relative flex flex-col justify-center items-center p-4 z-20">
                                    <div className="my-6 bg-[#fff] group-hover:bg-opacity-25 rounded-full p-6">
                                        {Icon && <Icon className="text-[#333] opacity-80 group-hover:text-[#fff]" size={100} />}
                                    </div>
                                    <div className="text-center mb-4">
                                        <h2 className="text-xl font-bold text-[#333] group-hover:text-white">{Title}</h2>
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