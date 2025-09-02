import { Button } from "./Buttons/Button";

export const AboutSection = (variant) => {
    const aboutimages = [
        "/images/About/about-1.jpg",
        "/images/About/about-2.jpg",
        "/images/About/about-3.jpg",
    ]

    const zOrder = ['z-20', 'z-10', 'z-0'];
    return (
        <section className="pt-[70px] md:pt-[120px] pb-[60px]" >
            <div className="text-[#fff]  flex-row !items-center justify-center lg:flex w-full max-w-[1456px] mx-auto px-[15px]">

                <div className="flex  w-full lg:w-[50%] mb-[30px] lg:mb-0 lg:pr-[12px] shrink-0 grow-0 basis-auto box-border">
                    <div className="flex flex-col w-full lg:mr-[50px]">
                        <div className="mb-6">
                            <p className="text-[#b5b5b5] text-[24px] leading-[36px] text-font ">
                                About us Branding Agency
                            </p>
                        </div>
                        <div className="mb-6">
                            <h2 className="font-ambit  font-[400] leading-[42px] text-[34px] md:text-[50px] md:leading-[58px] ">
                                We Provide Brilliant ideas and adding the <span className="bg-[linear-gradient(90deg,#dd933e_50.1%,#d82e5a_138.04%)] bg-clip-text text-transparent font-[700]">World called</span> <br />
                                <span className="bg-[linear-gradient(90deg,#4bb6ef_16.75%,#dd933e_50.1%,#dd933e_50.1%,#d82e5a_138.04%)] bg-clip-text text-transparent font-[700]"> success to your brand.</span>
                            </h2>
                        </div>
                        <div className="mb-[40px] max-w-[640px] font-[400]">
                            <p className="font-Inter relative font-[400] block tracking-wider text-[#b5b5b5]">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>

                        </div>
                        <div className=" flex">
                            <Button variant={variant}>Explore Details</Button>
                        </div>
                    </div>
                </div>
                <div className="flex  w-full  lg:w-[50%] basis-auto shrink-0 grow-0 pr-[15px] lg:pl-[12px] box-border">
                    <div className="relative ">
                        <div className="z-[25] absolute top-0 w-40 h-40  sm:flex sm:flex-col items-center ">
                            <div className="bg-[url('/images/Shapes/shape-4.png')] text-center bg-no-repeat bg-cover w-40 h-40  rounded-full border-bodycolor border-[5px] border-solid p-4 absolute -z-10"></div>
                            <div className="bg-[url('/images/Shapes/shape-5.png')] absolute bg-no-repeat h-16 w-32 bottom-[16px] left-4">
                            </div>
                            <div className="absolute text-center top-10 left-4">
                                <p className="pt-2 text-sm">
                                    Years of experiance
                                </p>

                                <h2 className="text-[55px] leading-[60px] font-Inter font-[700]">15</h2>
                            </div>
                        </div>
                        <div className="relative flex items-center mr-[64px]">
                            {aboutimages.map((src, index) => (
                                <div className={`mr-[-79px] relative   ${zOrder[index]}`} key={index}>
                                    <img className="object-cover border-bodycolor border-[5px] border-solid rounded-[240px] relative inline-block max-w-full h-auto" src={src} alt="img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}



//    <div className="z-[25] absolute top-0 w-40 h-40 hidden sm:flex sm:flex-col items-center ">
//                 <div className="bg-[url('/images/Shapes/shape-4.png')] text-center bg-no-repeat bg-cover w-40 h-40  rounded-full border-bodycolor border-[5px] border-solid p-4 absolute -z-10"></div>
//                 <div className="bg-[url('/images/Shapes/shape-5.png')] absolute bg-no-repeat h-16 w-32 bottom-3 left-4">
//                 </div>
//                 <div className="absolute  left-5 top-8 text-center">
//                  <p className="pt-2 text-sm">
//                     Years of experiance
//                     </p>
//                     <h2 className="text-6xl">15</h2>
//                 </div>
//                     </div> 