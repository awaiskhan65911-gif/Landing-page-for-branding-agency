import Slider from "react-slick"
import feedback from "../assets/data/Feedback.json"

export const Feedback = () => {

    const Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
    }

    return(
        <section className="relative">
            <div className="bg-[url('public/images/Shapes/shape-11.png')] z-0 absolute bg-no-repeat bg-center bg-cover inset-0">
            </div>
            <div className="bg-[url('public/images/Shapes/shape-14.png')] z-10 absolute bg-no-repeat bg-center left-0 w-full md:w-[737px] h-full opacity-75"></div>
            <div className="relative z-20  ">
            <div className="mb-7">
                <div className="text-white">
                    <h3 className="text-3xl opacity-50 text-font">Our Client Feedback</h3>
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl my-4">
                        {"Our Testimonial "}
                        <br />
                        <span className="gradient-text">Project</span>
                    </h2>
                </div>
                <div className="text-[#fff] opacity-50 max-w-2xl "><p className="text-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem velit adipisci iusto nihil cumque distinctio consectetur incidunt sequi illo, repellat sed quas vero doloribus voluptate inventore asperiores et! A!</p></div>
            </div>
        </div>
            <div className="relative w-full z-20 ">
                <Slider {...Settings}>
                {feedback.map(({id,Name,Post,Discription,src,src2})=>{
                    return(
                        <div key={id} className="flex  items-center justify-center relative p-4 md:px-8 group cursor-move">
                    <div className="bg-[url('public/images/Shapes/shape-12.png')] feedback-slider group-hover:opacity-0">
                    </div>
                    <div className="bg-[url('public/images/Shapes/shape-13.png')] feedback-slider opacity-0 group-hover:opacity-100">
                    </div>
                    <div className="flex flex-col items-center justify-center">
                    <div className="mb-6 relative inline-block">
                        <img src={src} alt="img" />
                    </div>
                    <p className="text-[#b5b5b5] text-lg md:text-xl lg:text-2xl relative text-center mt-6 max-w-xl leading-relaxed text-font">
                        {Discription}
                    </p>
                    <div className="relative text-[#fff] flex mt-8 items-center justify-center gap-4">
                        <img src={src2} alt="img" className="w-12 h-12 object-cover rounded-full" />
                        <div className="flex flex-col">
                            <h3 className="font-Outfit  text-lg">{Name}</h3>
                            <span className="text-sm text-[#b0b0b0] text-font">{Post}</span>
                        </div>
                    </div>
                    </div>
                </div>
                )})}
                </Slider>
            </div>

        </section>
    )
}