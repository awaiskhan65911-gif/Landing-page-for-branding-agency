import { Button } from "./Buttons/Button";

export const About = (primaryBtn) => {
    const aboutimages = [
        "/src//assets/images/About/about-1.jpg",
        "/src//assets/images/About/about-2.jpg",
        "/src//assets/images/About/about-3.jpg",
    ]
    
    const zOrder = ['z-20', 'z-10', 'z-0'];
    return (
        <section className="text-[#fff]  flex-row lg:flex">
            <div className="flex items-center justify-around">
                <div className="flex flex-col w-full ">
                <div className="mb-6">
                    <p className="text-gray-400 text-xl text-font">
                        About us Branding Agency
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
                        We Provide brilliant ideas and adding the <span className="gradient-text">World called</span> <br />
                        <span className="gradient-text"> success to your brand.</span>
                    </h2>
                </div>
                <div className="mb-6">
                    <p className="text-font">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, cupiditate voluptate repellendus iusto veritatis nesciunt, amet quae distinctio deserunt vero eos obcaecati quod libero temporibus! Earum, deserunt explicabo. Officia, aut.</p>
                </div>
                <div className="mb-10 lg:mb-20 flex">
                <Button primaryBtn={primaryBtn}>Explore more</Button>
                </div>
                </div>
            </div>
            <div className=" relative flex items-center justify-start h-4/5 w-4/5 lg:h-full lg:w-full xl:h-full  rounded-lg mr-10 md:mr-20">
            <div className="z-[25] absolute -top-6 w-40 h-40 hidden sm:flex sm:flex-col items-center ">
                <div className="bg-[url('/src/assets/images/Shapes/shape-4.png')] text-center bg-no-repeat bg-cover w-40 h-40  rounded-full border-bodycolor border-[5px] border-solid p-4 absolute -z-10"></div>
                <div className="bg-[url('/src/assets/images/Shapes/shape-5.png')] absolute bg-no-repeat h-16 w-32 bottom-3 left-4">
                </div>
                <div className="absolute  left-5 top-8 text-center">
                 <p className="pt-2 text-sm">
                    Years of experiance
                    </p> 
                    <h2 className="text-6xl">15</h2>
                </div>
                    </div> 
                {aboutimages.map((src,index) => (
                <div className={`-mr-16  lg:-mr-20 relative   ${zOrder[index]}`} key={index}>
                    <img className="object-cover border-black border-[5px] border-solid rounded-t-full rounded-b-full" src={src} alt="img" />
                </div>
                ))}
            </div>
        </section>
    )
}



  