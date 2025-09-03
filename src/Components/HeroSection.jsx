import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "./Buttons/Button";

export const HeroSection = (variant) => {


    const images = [
        "/images/Slider/slider-1.jpg",
        "/images/Slider/slider-2.jpg",
        "/images/Slider/slider-3.jpg",
        "/images/Slider/slider-2.jpg",
        "/images/Slider/slider-1.jpg",
    ]
    const clientImages = [
        "/images/Client/clients-1.png",
        "/images/Client/clients-2.png",
        "/images/Client/clients-3.png",
    ]
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: true,
        customPaging: i => (
            <div className=" w-[9px] h-[9px] relative cursor-pointer  rounded-full transition-all duration-300 z-0 mx-[11px]  bg-white">
            </div>
        ),
 dotsClass: `
        !flex flex-row items-center justify-center
        rounded-full mt-[25px] mx-auto
        bg-bodycolor max-w-[175px] h-[40px] rounded-[100px]
  [&>li.slick-active>div]:before:content-[""]
  [&>li.slick-active>div]:before:absolute
  [&>li.slick-active>div]:before:w-[9px]
  [&>li.slick-active>div]:before:h-[9px]
  [&>li.slick-active>div]:before:left-[0px]
  [&>li.slick-active>div]:before:top-[0px]
  [&>li.slick-active>div]:before:rounded-full
  [&>li.slick-active>div]:before:[background-image:linear-gradient(90deg,#4BB6EF_16.75%,#DD933E_50.1%,#D82E5A_138.04%)]
  [&>li.slick-active>div]:before:[box-shadow:0_0_0_6px_#1a1f25]
  [&>li.slick-active>div]:before:transition-all
  [&>li.slick-active>div]:before:duration-500
  [&>li.slick-active>div]:before:z-[-2]
  [&>li.slick-active>div]:before:opacity-100

   [&>li.slick-active>div]:after:opacity-100
   [&>li.slick-active>div]:after:content-['']
   [&>li.slick-active>div]:after:bg-[url('/images/Shapes/shape-28.png')]
   [&>li.slick-active>div]:after:bg-cover
   [&>li.slick-active>div]:after:bg-center
   [&>li.slick-active>div]:after:bg-no-repeat
   [&>li.slick-active>div]:after:absolute
   [&>li.slick-active>div]:after:w-[21px]
   [&>li.slick-active>div]:after:h-[21px]
   [&>li.slick-active>div]:after:top-[-6px]
   [&>li.slick-active>div]:after:left-[-6px]
  [&>li.slick-active>div]:after:transition-all
  [&>li.slick-active>div]:after:duration-500
    [&>li.slick-active>div]:after:z-[-1]
    [&>li>div]:after:scale-0
     [&>li>div]:after:opacity-0
     [&>li.slick-active>div]:after:scale-100
  [&>li.slick-active>div]:after:opacity-100
`
    };
    return (
        <section className="relative flex items-center justify-center pt-[180px]  md:pt-[230px] pb-[80px] overflow-x-hidden">
            <div className="absolute bg-[url('/images/Shapes/shape-1.png')] bg-cover bg-center bg-no-repeat w-full h-full z-0 left-0 top-0" />
            <div className="relative flex flex-col justify-center items-center w-full z-10 px-[15px] max-w-[1660px] mx-auto">
                <div className="text-white flex flex-col items-center text-center">
                    <div className="bg-[url(/images/Shapes/shape-2.png)] bg-no-repeat absolute h-80 w-56 left-[216px] top-[180px] hidden lg:block">
                    </div>
                    <h1 className="text-3xl text-[50px] leading-[60px] md:text-[70px] md:leading-[80px] mb-6 font-ambit font-[900]">
                        {"Rediscover the Art of "}<br /> <span className="gradient-text">Branding</span>
                        {" with a Retro Vibe!"}
                    </h1>
                    <p className="mb-[40px] text-[#b5b5b5] text-[18px] leading-[25px] font-Inter tracking-wider font-[500]">Creating products with a strong identity. We provide brilliant ideas and <br /> adding the world called success brand. </p>
                </div>
                <div className="mb-20">
                    <Button variant={variant}  >Discover More</Button>
                </div>
                {/* <div className="text-[#fff] flex flex-col items-center justify-center mb-4">
                        <div className="mb-7 p-[1px] gradient-color rounded-t-full w-[230px] rounded-b-full text-white flex items-center justify-center">
                            <ul className="bg-bodycolor flex items-center justify-center rounded-t-full rounded-b-full relative  h-[calc(100%-2px)] w-[calc(100%-2px)] px-3 py-2">
                                {clientImages.map((src, index) => (
                                    <li key={index} className="relative -mr-4 rounded-full">
                                        <img className="border-4 border-bodycolor rounded-full" src={src} alt="client" />
                                    </li>
                                ))}
                                <li className="w-[68px] h-[68px] gradient-color rounded-full border-bodycolor border-4 relative inline-flex items-center justify-center text-md font-bold  text-white">
                                    10K +
                                </li>
                            </ul>
                        </div>
                        <p className="text-font text-2xl">Exelent <span className="gradient-color bg-clip-text text-transparent">40.00</span> Reviews</p>
                    </div> */}
                <div className="flex flex-col items-center justify-center ">
                    
                    <div className="text-white text-center">
                        <div className="mx-auto relative max-w-[1630px] flex items-center
                        justify-center">
                            <Slider className="w-full max-w-[320px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[872px]" {...sliderSettings}>
                                {images.map((src, index) => (
                                    <div key={index} className="flex items-center justify-center px-4">
                                        <div className="">
                                            <img src={src} alt="img" className="w-full h-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[70px] shadow-xl" />
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