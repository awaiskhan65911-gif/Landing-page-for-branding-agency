import { Button } from "./Buttons/Button"
export const CTASection = (variant,className) =>{
    return(
        <section className="relative pt-[70px] sm:py-[70px] md:py-[120px] ">
            <div className="absolute bg-[url('/images/Shapes/shape-24.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full -z-10"></div>
            <div className=" px-[15px] relative max-w-[1350px] mx-auto">
                <div className="relative bg-bodycolor rounded-[58px] py-[50px] px-[15px] sm:py-[70px] md:py-[97px] sm:px-[40px] lg:px-[80px] overflow-hidden">
                <div className="hidden xl:block absolute top-[108px] 2xl:right-[140px] right-[30px]">
                    <img src="/images/Icons/loud-1.png" alt="img" className="inline-block max-w-[100%] h-[auto]" />
                </div>
                    <h3 className="text-[30px] leading-[35px] mb-[32px] font-ambit text-[#fff] font-[700]">Hire Now Branding Agency</h3>
                    <h2 className="text-[36px] leading-[44px] sm:text-[50px] sm:leading-[60px] md:text-[70px] md:leading-[81px] mb-[24px] font-ambit font-[700] text-[#fff]">Let’s Get In Touch.</h2>
                    <p className="relative text-[17px] leading-[27px] font-ambit text-[#fff] font-[600] mb-[32px]">Your Laboratory Instruments Should Serve you. Not the other way <br />around. We’re happy to help you.</p>
                    <div className="flex-none flex flex-col sm:flex sm:flex-row gap-[20px]">
                        <Button className='w-[160px]'>Let's Talk</Button>
                        <Button variant={variant}
                        className='w-[160px]'>Book now</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}