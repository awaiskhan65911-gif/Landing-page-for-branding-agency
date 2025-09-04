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
                                We Provide Brilliant ideas and adding the <span className="bg-[linear-gradient(90deg,#dd933e_50.1%,#d82e5a_138.04%)] bg-clip-text text-transparent relative inline-block font-[700]">World called</span> <br />
                                <span className="bg-[linear-gradient(90deg,#4bb6ef_16.75%,#dd933e_50.1%,#dd933e_50.1%,#d82e5a_138.04%)] bg-clip-text text-transparent font-[700] relative inline-block"> success to your brand.</span>
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
                            <div className="absolute text-center top-[10px] left-[10px]">
                                <span className="curved-text relative inline-block h-[4.27183em] w-[9.78994em] text-[14px] leading-[20px] font-[500]">
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.304688em] rotate-[-73.3476deg] origin-[center_5em]">Y</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.299107em] rotate-[-63.661deg] origin-[center_5em]">e</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.28404em] rotate-[-54.3057deg] origin-[center_5em]">a</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.193638em] rotate-[-46.6423deg] origin-[center_5em]">r</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.269531em] rotate-[-39.2118deg] origin-[center_5em]">s</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.133371em] rotate-[-32.7481deg] origin-[center_5em]">&nbsp;</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.383371em] rotate-[-24.4581deg] origin-[center_5em]">O</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.189732em] rotate-[-15.264deg] origin-[center_5em]">f</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.133371em] rotate-[-10.0805deg] origin-[center_5em]">&nbsp;</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.301897em] rotate-[-3.09755deg] origin-[center_5em]">E</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.279018em] rotate-[6.22196deg] origin-[center_5em]">x</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.309152em] rotate-[15.6579deg] origin-[center_5em]">p</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.294085em] rotate-[25.3355deg] origin-[center_5em]">e</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.197545em] rotate-[33.2226deg] origin-[center_5em]">r</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.126116em] rotate-[38.415deg] origin-[center_5em]">i</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.294085em] rotate-[45.1562deg] origin-[center_5em]">e</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.300781em] rotate-[54.6996deg] origin-[center_5em]">n</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.289062em] rotate-[64.1623deg] origin-[center_5em]">c</span>
                                    <span className="absolute bottom-auto left-[50%] translate-x-[-0.294085em] rotate-[73.5176deg] origin-[center_5em]">e</span>
                                </span>
                            </div>
                            <div className="relative text-center  top-[50px]">
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