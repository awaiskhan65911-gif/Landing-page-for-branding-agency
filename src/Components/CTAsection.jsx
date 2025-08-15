import { Button } from "./Buttons/Button"
export const CTA = (primaryBtn,className) =>{
    return(
        <section className="relative">
            <div className="absolute bg-[url('/src/assets/images/Shapes/shape-24.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full -z-10"></div>
            <div className="text-[#fff] flex items-center justify-between bg-bodycolor p-4  w-full rounded-[40px] shadow-xl ">
                <div className="font-bold grow-0">
                    <h3 className="text-2xl  mb-8 text-font">Hire Now Branding Agency</h3>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8 ">Let’s Get In Touch.</h2>
                    <p className="mb-8 text-font">Your Laboratory Instruments Should Serve you. Not the other way <br />around. We’re happy to help you.</p>
                    <div className="flex-none flex flex-col md:flex md:flex-row gap-2">
                        <Button className='w-[160px]'>Lets Talk</Button>
                        <Button primaryBtn={primaryBtn}
                        className='w-[160px]'>Book now</Button>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src="public/images/Icons/loud-1.png" alt="img" />
                </div>
            </div>

        </section>
    )
}