import { HiMiniSquare3Stack3D, HiOutlinePencilSquare } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import pricing from "../assets/data/Pricing.json"
import { Button } from "./Buttons/Button";
export const PricingSection = (IconVarient) => {
    const iconMap = {
        HiMiniSquare3Stack3D: HiMiniSquare3Stack3D,
        HiOutlinePencilSquare: HiOutlinePencilSquare,
        IoBulbOutline: IoBulbOutline,
    };
    return (
        <section className="relative pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px]">
            <div className="relative w-full max-w-[1350px] mx-auto px-[15px]">
                <div className="relative flex-col lg:flex lg:flex-row items-end justify-between mb-[60px]">
                    <div className="relative block">
                        <h3 className="relative block text-[24px] leading-[36px] text-[#b5b5b5] fontt-[400] mb-[24px] font-ambit">Pricing Plan</h3>
                        <h2 className="text-[#fff] font-ambit text-[34px] leading-[42px] md:text-[50px] md:leading-[58px] font-[400]">{"Our "}
                            <br className="hidden lg:block" />
                            <span className="gradient-text relative inline-block font-[700]">
                                Pricing Plan
                            </span>
                        </h2>
                    </div>
                    <p className="font-Inter max-w-[390px] text-[#B0B0B0] font-[400] tracking-wider">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum distinctio possimus.</p>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row  lg:flex-row lg:flex-nowrap items-center justify-center gap-[24px]">
                    {pricing.map(({ id, Title, icon, Discription, Price,}) => {
                        const Icon = iconMap[icon];
                        return (
                            <div  key={id} className="bg-[#fff] w-full  md:w-[48.5%]  rounded-[32px] group relative ">
                                <div className="bg-[url('/images/Shapes/shape-15.png')] w-full h-full left-0 top-0 bg-no-repeat bg-cover absolute  z-0"></div>
                                <div className="absolute  rounded-3xl inset-0 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-colorThemeSlider z-10"></div>
                                <div className="relative  flex flex-col justify-center items-center  z-20 p-[40px] rounded-[32px]">
                                    <div className="bg-[#fff] text-[#464b51] rounded-[50%] flex items-center justify-center w-[150px] h-[150px]  leading-[150px] text-[80px] mb-[32px]">
                                        {Icon && <Icon className="font-[400px]" />}
                                    </div>
                                        <h2  className="text-[22px] leading-[29px] font-[700] text-[#464b51] mb-[16px] font-ambit group-hover:text-white">{Title}</h2>
                                        <p className="text-[#95989b] font-Inter font-[400] mb-[32px] group-hover:text-white text-center tracking-wide">{Discription}</p>
                                    
                                    <h2 className="text-[#464b51] font-ambit text-[50px] leading-[58px] inline-block relative font-[700] mb-[32px] pr-[62px] group-hover:text-white">
                                        {Price} <span className="absolute top-[-17px] right-0 text-[18px] text-[#95989b] font-[600] group-hover:text-white">/$Mo</span>
                                    </h2>
                                    <Button id='pricebtn' IconVarient={IconVarient}>Chose A Option</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}