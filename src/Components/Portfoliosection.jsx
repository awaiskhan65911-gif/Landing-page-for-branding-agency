import { MdOutlineChevronRight } from "react-icons/md"
import portfoliodata from "../assets/data/Portfolio.json"
export const PortfolioSection = () => {
    return (
        <section className="relative ">
            <div className="max-w-[1456px] mx-auto px-8">
                <div className="text-white xl:flex items-center justify-between ">
                    <div className="relative block">

                        <h3 className="text-3xl opacity-50 text-font">
                            Brand Portfolio
                        </h3>
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl my-4">{"Here's Our Latest"} <br /><span className="gradient-text">Project</span></h2>
                    </div>
                    <div className="text-white  opacity-50 max-w-2xl"><p className="text-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione aspernatur quae illum alias. Distinctio qui sed quia dolorum velit dolorem voluptatibus, quis modi, neque autem veniam provident? Tempora, optio.</p></div>
                </div>
                <div className="mt-8 lg:flex flex-wrap items-center justify-center gap-6">
                    {portfoliodata.map(({Title,src,id})=>{
                        return(<div key={id} className={`border-[1px] border-[#333333] border-solid basis-auto rounded-3xl grow flex-shrink-0 mt-4 xl:mt-0 ${id === 1 || id === 4 ? 'w-full lg:w-4/12':'w-full  lg:w-6/12'} `}>
                        <div className="px-8 pt-8 pb-7 border-b-[1px] border-[#333333] border-solid">
                            <h3 className="text-white text-[30px] font-bold mb-4"> <a href="/">{Title}</a></h3>
                            <a
                                href="/"
                                className="inline-block text-white text-lg text-center opacity-50 hover:opacity-100 transition-opacity duration-300 py-[9.5px]"
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