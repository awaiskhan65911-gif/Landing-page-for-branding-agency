import { HiMiniSquare3Stack3D, HiOutlinePencilSquare } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import pricing from "../assets/data/Pricing.json"
import { Button } from "./Buttons/Button";
export const Pricing = () => {
    const iconMap = {
        HiMiniSquare3Stack3D: HiMiniSquare3Stack3D,
        HiOutlinePencilSquare: HiOutlinePencilSquare,
        IoBulbOutline: IoBulbOutline,
    };
    return (
        <section className="relative">
            <div>
                <div className="mb-7">
                    <div className="text-white my-4">
                        <h3 className="text-2xl mb-4 opacity-50 text-font">Pricing plan</h3>
                        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold">{"Our "}
                            <br />
                            <span className="gradient-text">
                                Pricing Plan
                            </span>
                        </h2>
                    </div>
                    <div className="text-white opacity-50 max-w-xl"><p className="text-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem velit adipisci iusto nihil cumque distinctio</p></div>
                </div>
                <div className="flex flex-col lg:flex-wrap lg:flex-row  xl:flex-row xl:flex-nowrap items-center justify-center gap-4">
                    {pricing.map(({ id, Title, icon, Discription, Price }) => {
                        const Icon = iconMap[icon];
                        return (
                            <div  key={id} className="bg-[#fff] w-full lg:w-[45%]  rounded-3xl group relative ">
                                <div className="bg-[url('/src/assets/images/Shapes/shape-8.png')] bg-cover bg-no-repeat bg-center absolute inset-0 z-0"></div>
                                <div className="absolute  rounded-3xl inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-colorTheme z-10"></div>
                                <div className="relative  flex flex-col justify-center items-center p-4 z-20 gap-6 py-8">
                                    <div className="my-6 bg-[#fff] group-hover:bg-opacity-25 rounded-full p-6">
                                        {Icon && <Icon className="text-[#333] opacity-80 group-hover:text-[#fff]" size={100} />}
                                    </div>
                                    <div className="flex flex-col  items-center justify-center gap-6 group-hover:text-white">
                                        <h2  className="text-3xl font-bold text-[#333] mb-8 group-hover:text-white">{Title}</h2>
                                        <p className="text-[#95989b] group-hover:text-white text-center w-[50%] text-font">{Discription}</p>
                                    </div>
                                    <h2 className="text-[#464b51] text-3xl relative font-bold group-hover:text-white">
                                        {Price} <span className="text-sm absolute top-0">/$MO</span>
                                    </h2>
                                    <Button id='pricebtn'>Chose A Option</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}