import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";
import feedback from "../assets/data/Feedback.json"
import "swiper/css";

export const FeedbackSection = () => {

    return (
        <section className="relative pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px] ">

            <div className="bg-[url('/images/Shapes/shape-11.png')] absolute bg-no-repeat bg-center bg-cover w-full h-full left-0 top-0 ">
            </div>
            <div className="bg-[url('/images/Shapes/shape-14.png')] absolute bg-no-repeat left-0 top-[-235px] md:w-[737px] h-[1290px] "></div>
            <div className="max-w-[1350px] w-full  mx-auto px-[15px]">
                <div className="relative flex-col lg:flex lg:flex-row  items-end justify-between mb-[60px]">
                    <div className="relative block">
                        <h3 className="relative  font-ambit text-[24px] leading-[36px] text-[#b5b5b5] font-[400] mb-[24px]">Our Client Feedback</h3>
                        <h2 className="text-[34px] leading-[42px] md:text-[50px] text-[#fff] md:leading-[58px] font-[400] font-ambit">
                            {"Our Testimonial "}
                            <br className="hidden lg:block" />
                            <span className="gradient-text  relative font-[700]">Project</span>
                        </h2>
                    </div>
                    <p className="relative font-Inter max-w-[532px] font-[400] text-[#b0b0b0]">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio possimus.</p>
                </div>
                <div className="relative overflow-hidden">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false,
                        }} 
                            breakpoints={{
                            0: {
                        slidesPerView: 1,
                            },
                    899: {
                        slidesPerView: 2,
                            },
                        }}
                        modules={[Autoplay]}
                    >
                    {feedback.map(({ id, Name, Post, Discription, src, src2 }) => (
                        <SwiperSlide key={id}>
                            <div className="relative block cursor-move px-[32px] pt-[29px] pb-[32px] mb-[30px] text-center group z-10">
                                {/* Shape background */}
                                <div className="bg-[url('/images/Shapes/shape-12.png')] bg-cover h-full w-full bg-no-repeat bg-center  left-0 top-0 transition-opacity duration-500 group-hover:opacity-0 absolute rounded-[32px]"></div>
                                <div className="bg-[url('/images/Shapes/shape-13.png')] transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full absolute rounded-[32px] "></div>
                                {/* Content */}

                                <div className="relative inline-block min-h-[33px] mb-[53px]">
                                    <img src={src} alt="img" className="w-full" />
                                </div>

                                <p className="text-[#b5b5b5] text-[24px] leading-[32px] mb-[26px] font-ambit relative">
                                    {Discription}
                                </p>

                                <div className="relative flex items-center justify-center gap-[18px] text-left">
                                    <div className="w-[73px] h-[73px] inline-block rounded-[50%] relative">
                                        <img
                                            src={src2}
                                            alt="img"
                                            className="w-full  rounded-[50%]"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-[700] mb-[5px] text-[18px] leading-[25px] text-[#fff] font-ambit">{Name}</h3>
                                        <span className="font-Inter relative block text-[14px] leading-[24px] text-[#b0b0b0] font-[500]">{Post}</span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
        </section >
    )
}