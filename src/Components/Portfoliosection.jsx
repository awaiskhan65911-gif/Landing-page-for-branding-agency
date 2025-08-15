import { MdOutlineChevronRight } from "react-icons/md"
import portfolio from "../assets/data/Portfolio.json"
export const Portfolio = () => {
    return (
        <section className="relative ">
            <div>
                <div className="text-white ">
                    <div className="relative block">

                        <h3 className="text-3xl opacity-50 text-font">
                            Brand Portfolio
                        </h3>
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl my-4">{"Here's Our Latest"} <br /><span className="gradient-text">Project</span></h2>
                    </div>
                    <div className="text-white  opacity-50 max-w-2xl"><p className="text-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione aspernatur quae illum alias. Distinctio qui sed quia dolorum velit dolorem voluptatibus, quis modi, neque autem veniam provident? Tempora, optio.</p></div>
                </div>
                <div className="mt-8  flex flex-wrap items-center justify-center basis-auto gap-3">
                    {portfolio.map(({Title,src,id})=>{
                        return(<div key={id} className={`border-[1px]  border-[#333333] border-solid  rounded-3xl grow ${id === 1 || id === 4 ? 'w-full md:w-[38%]':'w-full md:w-[53%]'} `}>
                        <div className="p-8 border-b-[1px] border-[#333333] border-solid">
                            <h3 className="text-white text-xl font-bold"> <a href="/">{Title}</a></h3>
                            <a
                                href="/"
                                className="inline-block text-white text-lg text-center opacity-50 hover:opacity-100 transition-opacity duration-300 "
                            >
                                <span className="mr-1 text-font">View details</span>
                                <MdOutlineChevronRight size={30} className="inline-block" />
                            </a>
                        </div>
                        <div className="p-4">
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