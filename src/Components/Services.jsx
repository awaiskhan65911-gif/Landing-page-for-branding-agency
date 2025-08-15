import { IoFileTrayOutline } from "react-icons/io5"
import { Button } from "./Buttons/Button"
import { MdOutlineChevronRight } from "react-icons/md"
import services from "../assets/data/ServicesSlider.json"
import { BsGraphUpArrow } from "react-icons/bs"
import { BiBulb } from "react-icons/bi"
import { GoShieldCheck } from "react-icons/go"
import Slider from "react-slick"


export const Services = (primaryBtn) => {
    const iconMap = {
  IoFileTrayOutline: IoFileTrayOutline,
  BsGraphUpArrow: BsGraphUpArrow,
  BiBulb: BiBulb,
  GoShieldCheck: GoShieldCheck,
};
const Settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive:[
            {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }},
        ],
        customPaging: i => (
            <div className="w-2 h-2 border-2 bg-white rounded-full inline-block mx-2 transition-all duration-300 mt-5"></div>
        ),
        dotsClass:"!flex justify-center  [&>li.slick-active>div]:w-3 [&>li.slick-active>div]:h-3 [&>li.slick-active>div]:bg-gradient-to-r [&>li.slick-active>div]:from-colorTheme  "
    }
    return (
        <section className="relative ">
            <div className="bg-[url('/images/Shapes/shape-7.png')] bg-cover bg-center bg-no-repeat w-full h-full z-0 left-0 right-0 absolute"></div>
            <div className="text-white relative">
                <div className="text-center md:text-start">
                    <div className="mb-6">
                        <h3 className="text-3xl opacity-50 text-font">Brand Services</h3>
                        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <span className="gradient-text">We Create To Brands And</span>
                            <br />
                            <span className="gradient-text">Businesses</span>
                            {" To Stand Our in"}
                            <br />
                            {" the Digital era"}
                        </h2>
                    </div>
                    <div className="mb-20">
                    <Button primaryBtn={primaryBtn} className='text-sm'>See All Services</Button>
                    </div>
                </div>
                <div>
                    <Slider {...Settings}>
                    {services.map(({id,Title,Discripton,icon})=>{
                        const Icon = iconMap[icon];
                        return(
                            <div key={id} className="relative w-[50%] h-full p-8 rounded-2xl overflow-hidden shadow-lg group">   
                        <div className="absolute inset-0 bg-slidercolor"></div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-colorTheme "></div>
                        <div className="relative z-10 text-white">
                            {Icon && <Icon className="my-4" size={40} />}
                            <h2 className="text-3xl my-4">{Title}</h2>
                            <p className="text-font">
                                {Discripton}
                            </p>
                            <div className="my-4">
                                <a
                                    href="/"
                                    className="inline-block text-white text-center rounded-lg border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out"
                                    >
                                    <span className="mr-1 text-font">View more details</span>
                                    <MdOutlineChevronRight size={30} className="inline-block" />
                                </a>
                            </div>
                        </div>
                    </div>
                  ) })}
                  </Slider>

                </div>
            </div>
        </section>
    )
}
