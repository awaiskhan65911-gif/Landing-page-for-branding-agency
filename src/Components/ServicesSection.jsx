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
        <section className="relative pt-14">
            <div className="max-w-[1456px] mx-auto px-8 ">
            <div className="bg-[url('/images/Shapes/shape-7.png')] bg-cover bg-center bg-no-repeat w-full h-[1598px] left-0 right-0 absolute z-[0]"></div>
            <div className="text-white relative z-20">
                <div className="text-start lg:flex block items-center justify-between ">
                    <div className="mb-6">
                        <h3 className="text-2xl opacity-50 text-font">Brand Services</h3>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                            <span className="gradient-text">We Create To Brands And</span>
                            <br />
                            <span className="gradient-text">Businesses</span>
                            {" To Stand Our in"}
                            <br />
                            {" the Digital era"}
                        </h2>
                    </div>
                    <div className="mb-20">
                        <Button variant={variant} className="text-sm">
                            See All Services
                        </Button>
                    </div>
                </div>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 100,
                            disableOnInteraction: false,
                            stopOnLastSlide: true,
                        }}
                        speed={2000}
                        breakpoints={{

                            688: { slidesPerView: 2 },
                            1500: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {services.map(({ id, Title, Discripton, icon }) => {
                            const Icon = iconMap[icon];
                            return (
                                <SwiperSlide key={id}>
                                    <div className="relative  h-full p-8 rounded-2xl overflow-hidden shadow-lg group">
                                        <div className="absolute inset-0 bg-slidercolor"></div>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-linear SliderGradient scale-90 group-hover:scale-150"></div>
                                        <div className="relative z-10 text-white">
                                            {Icon && <Icon className="my-4" size={40} />}
                                            <h2 className="text-3xl my-4">{Title}</h2>
                                            <p className="text-font">{Discripton}</p>
                                            <div className="my-4">
                                                <a
                                                    href="/"
                                                    className="inline-block text-white text-center rounded-lg border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out"
                                                >
                                                    <span className="mr-1 text-font">View more details</span>
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
                
                <div className="relative mx-auto pt-5 flex justify-end gap-4">
                    {/* Prev Button */}
                    <div className="custom-prev group relative cursor-pointer h-[50px] w-[50px] rounded-full shadow-md p-[1px]">
                        {/* Gradient border (hover effect) */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 gradient-color transition-all duration-300 z-0"></div>

                        {/* Icon with background */}
                        <div className="flex items-center justify-center bg-bodycolor rounded-full h-full w-full relative z-10">
                            <MdOutlineKeyboardDoubleArrowLeft size={24} />
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="custom-next group relative cursor-pointer h-[50px] w-[50px] rounded-full shadow-md p-[1px]">
                        {/* Gradient border (hover effect) */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 gradient-color transition-all duration-300 z-0"></div>

                        {/* Icon with background */}
                        <div className="flex items-center justify-center bg-bodycolor rounded-full h-full w-full relative z-10">
                            <MdOutlineKeyboardDoubleArrowRight size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section >
    );
};
