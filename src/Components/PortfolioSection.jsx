import { MdOutlineChevronRight } from "react-icons/md"
import portfoliodata from "../assets/data/Portfolio.json"
export const PortfolioSection = () => {
    return (
        <section className="relative bg-[#1a1f25] pt-[70px] pb-[40px] md:pt-[120px] md:pb-[90px] z-0">
            <div className="max-w-[1350px] mx-auto px-[15px]">
                <div className="text-white block lg:flex items-end justify-between mb-[60px]">
                    <div className="relative block">

                        <h3 className="text-3xl mb-[24px] relative block text-[24px] leading-[36px] text-[#b5b5b5] font-[400] font-ambit">
                            Brand Portfolio
                        </h3>
                        <h2 className="text-[34px] leading-[42px] md:text-[50px] md:leading-[58px] font-[500] font-ambit">{"Here's Our Latest"} <br className="hidden lg:block" /><span className="gradient-text font-[600] relative inline-block">Project</span></h2>
                    </div>
                    <p className="max-w-[532px] text-[#b0b0b0] relative">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio possimus.</p>
                </div>
                <div className="mt-8 lg:flex flex-wrap items-center justify-center gap-6">
                    {portfoliodata.map(({Title,src,id})=>{
                        return(<div key={id} className={`border-[1px] bg-[#11161c3d] border-[#333333] border-solid basis-auto rounded-3xl grow flex-shrink-0 mt-4 xl:mt-0 ${id === 1 || id === 4 ? 'w-full lg:w-4/12':'w-full  lg:w-6/12'} `}>
                        <div className="pt-8 px-8 pb-7  border-b-[1px] border-[#333333] border-solid z-[4]">
                            <h3 className="text-white text-[23px] leading-[30px] sm:text-[30px] sm:leading-[39px] font-[600] mb-[16px] font-ambit hover:underline"> <a href="/">{Title}</a></h3>
                            <a
                                href="/"
                                className="text-[16px] leading-[24px] font-[500] inline-flex items-center gap-[14px] text-[#b5b5b5] text-lg text-center hover:text-white transition-all duration-500 "
                            >
                                <span className="mr-1 text-font">View details</span>
                                <MdOutlineChevronRight size={30} className="inline-block" />
                            </a>
                        </div>
                        <div className="p-8">
                            <img className="rounded-2xl object-cover w-full h-full" src={src} alt="img" />
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}