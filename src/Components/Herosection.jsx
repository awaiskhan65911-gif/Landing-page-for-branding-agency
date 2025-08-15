import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./Buttons/Button";

export const Herosection = (primaryBtn) => {


    const images = [
        "public/images/slider/slider-1.jpg",
        "public/images/slider/slider-2.jpg",
        "public/images/slider/slider-3.jpg",
        "public/images/slider/slider-2.jpg",
        "public/images/slider/slider-1.jpg",
    ]
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        customPaging: i => (
            <div className="w-4 h-4 border-2 border- bg-[#fff] rounded-full inline-block mx-2 transition-all duration-300 "></div>
        ),
        dotsClass:"!flex justify-center  [&>li.slick-active>div]:w-5 [&>li.slick-active>div]:h-5 [&>li.slick-active>div]:bg-gradient-to-r [&>li.slick-active>div]:from-colorTheme "
    };
    return (
        <section className="relative   flex items-center justify-center px-10 pb-10 md:px-20  pt-60">
        <div className="absolute inset-0 bg-[url('public/images/Shapes/shape-1.png')] bg-cover bg-center bg-no-repeat w-full h-full z-0" />
            <div className="relative flex flex-col justify-center items-center w-full z-10">
                <div className="text-white flex flex-col items-center text-center">
                    <div className="bg-[url(/images/Shapes/shape-2.png)] bg-no-repeat absolute h-80 w-56 left-44 top-56 hidden lg:block">
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[80px] mb-6 font-Outfit font-bold">
                        {"Rediscover the Art of "}<br /> <span className="gradient-text">Branding</span>
                        {" with a Retro Vibe!"}
                    </h1>
                    <p className="mb-6 opacity-55 text-xl text-font ">Creating products with a strong identity. We provide brilliant ideas and <br /> adding the world called success brand. </p>
                </div>
                <div className="mb-20">
                <Button primaryBtn={primaryBtn}  >Discover more</Button>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-7 p-0.5 gradient-color rounded-t-full w-56 rounded-b-full text-white">
                    <ul className="bg-bodycolor flex rounded-t-full rounded-b-full relative">
                        <li className=" relative  -mr-4 rounded-full">
                            <img className="border-4 border-bodycolor rounded-full"  src="public/images/client/clients-1.png" alt="client" />
                        </li>
                        <li className=" relative  -mr-4 rounded-full">
                            <img className="border-4 border-bodycolor rounded-full" src="public/images/client/clients-2.png" alt="client" />
                        </li>
                        <li className="relative  -mr-4 rounded-full">
                            <img className="border-4 border-bodycolor rounded-full" src="public/images/client/clients-3.png" alt="client" />
                        </li>
                        <li className="w-[68px] h-[68px] gradient-color rounded-full border-bodycolor border-4 relative inline-flex items-center justify-center text-sm font-bold text-white">
                            10K +
                        </li>
                    </ul>
                </div>
                <div className="text-white text-center text-3xl w-screen  md:w-full md:h-full lg:w-full lg:h-full xl:w-3/4 xl:h-4/5">
                    <p className="text-font">Exelent <span className="gradient-color bg-clip-text text-transparent">40.00</span> Reviews</p>
                    <div className="mt-4">
                        <Slider {...sliderSettings}>
                            {images.map((src, index) => (
                                <div key={index} className="w-screen  flex justify-center items-center">
                                    <div className="mx-10 md:mx-4">
                                    <img src={src} alt="img" className="w-full h-full object-cover rounded-3xl shadow-xl" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}