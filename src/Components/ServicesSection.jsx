import { IoFileTrayOutline } from "react-icons/io5";
import { Button } from "./Buttons/Button";
import { MdOutlineChevronRight, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import services from "../assets/data/ServicesSlider.json";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiBulb } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const ServicesSection = (variant) => {
    const iconMap = {
        IoFileTrayOutline: IoFileTrayOutline,
        BsGraphUpArrow: BsGraphUpArrow,
        BiBulb: BiBulb,
        GoShieldCheck: GoShieldCheck,
    };



    return (
        <section className="relative pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px] overflow-visible bg-[#181e25]">
            <div className="bg-[url('/images/Shapes/shape-7.png')] bg-cover bg-no-repeat w-full h-[1598px] left-0 top-0 absolute z-[1] pointer-events-none"></div>
            <div className="w-full max-w-[1350px] mx-auto px-[15px] relative">
                <div className="text-start lg:flex block items-center justify-between mb-[60px] relative">
                    <div className="relative block mb-[30px] lg:mb-0">
                        <h3 className="relative block text-[24px] leading-[36px] font-[400] mb-[24px] font-ambit text-[#b5b5b5]">Brand Services</h3>
                        <h2 className="text-[#fff] text-[34px] md:text-[50px] leading-[42px] md:leading-[58px] font-[400] font-ambit">
                            <span className="bg-[linear-gradient(90deg,#4bb6ef_16.75%,#dd933e_50.1%,#dd933e_50.1%,#d82e5a_138.04%)] bg-clip-text text-transparent font-[700]">We Create to Brands And</span>
                            <br />
                            <span className="bg-[linear-gradient(90deg,#4bb6ef_16.75%,#dd933e_130.1%)] bg-clip-text text-transparent font-[700]">Businesses</span>
                            {" To Stand Our in"}
                            <br />
                            {" the Digital era"}
                        </h2>
                    </div>
                    <div className="">
                        <Button variant={variant} className="text-sm">
                            See All Services
                        </Button>
                    </div>
                </div>
                <div className="relative md:mr-[-670px] overflow-hidden">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            stopOnLastSlide: true,
                        }}
                        speed={1000}
                        breakpoints={{
                            700:{
                                slidesPerView:2
                            },
                            768: {
                                slidesPerView: 1
                            },
                            899: {
                                slidesPerView: 3
                            },
                            1350: {
                                slidesPerView: 4
                            },
                        }}
                        onBreakpoint={(swiper) => {
                            if (window.innerWidth >= 1450) {
                                swiper.params.speed = 0;   // 🚀 disable animation
                            } else {
                                swiper.params.speed = 1000; // default animation
                            }
                        }}
                        className="mySwiper"
                    >
                        {services.map(({ id, Title, Discripton, icon }) => {
                            const Icon = iconMap[icon];
                            return (
                                <SwiperSlide key={id}>
                                    <div className="relative block h-full p-[40px] rounded-[32px] overflow-hidden shadow-lg group mx-[12px] md:mx-0 md:mr-[30px] bg-slidercolor z-30">
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-linear SliderGradient scale-90 group-hover:scale-150 "></div>
                                        <div className="bg-[url('/images/Shapes/shape-6.png')] bg-cover bg-no-repeat bg-center left-0 top-0 w-full h-full"></div>
                                        <div className="relative ">
                                            {Icon && <Icon className="mb-[29px] text-[#fff]" size={40} />}
                                            <h2 className="text-[30px] inline-block text-[#fff] leading-[36px] font-[500] mb-[16px] font-ambit">{Title}</h2>
                                            <p className="text-font text-[#b0b0b0] group-hover:text-[#e6e6e6] mb-[41px]">{Discripton}</p>
                                            <div className="my-4">
                                                <a
                                                    href="/"
                                                    className="inline-block text-white text-center rounded-lg border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out"
                                                >
                                                    <span className="pl-[5px] font-ambit">View Details</span>
                                                    <MdOutlineChevronRight
                                                        size={30}
                                                        className="inline-block"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className="relative  mx-auto pt-[30px] flex justify-end">
                    {/* Prev Button */}
                    <div className="custom-prev bg-[#1c2228] group relative cursor-pointer h-[60px] w-[60px] rounded-full shadow-md p-[1px] mr-[19px]">
                        {/* Gradient border (hover effect) */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 gradient-color transition-all duration-300 z-0"></div>

                        {/* Icon with background */}
                        <div className="flex items-center text-[#b0b0b0] justify-center bg-[#1c2228] rounded-full h-full w-full relative z-30">
                            <MdOutlineKeyboardDoubleArrowLeft size={24} />
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="custom-next group relative cursor-pointer h-[60px] w-[60px] rounded-full shadow-md p-[1px] ">
                        {/* Gradient border (hover effect) */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 gradient-color transition-all duration-300 z-0"></div>

                        {/* Icon with background */}
                        <div className="flex items-center text-[#b0b0b0] justify-center bg-[#1c2228] rounded-full h-full w-full relative z-30">
                            <MdOutlineKeyboardDoubleArrowRight size={24} />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};
