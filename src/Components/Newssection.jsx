import news from '../assets/data/News.json'
import { Button } from './Buttons/Button'


export const News = (primaryBtn) => {

    const todaydate = new Date()
    const day = todaydate.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = todaydate.toLocaleDateString("en-GB", { month: "short" });
    return (
        <section className="relative ">
            <div className="absolute bg-[url('/src/assets/images/Shapes/shape-20.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full z-0"></div>
            <div className="flex flex-col items-center ">
                <div className="text-white flex flex-col items-center justify-center relative mb-12">
                    <h3 className="text-2xl mb-4 opacity-50 text-font">Recent Articales</h3>
                    <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center">{"Lates "}
                        <span className="gradient-text">
                            Blog Journal
                        </span>
                    </h2>
                </div>
                <div className="w-full flex  flex-wrap justify-center items-center lg:flex-nowrap  lg:justify-around gap-4">
                    {news.map(({ id, Discription, src, Tag }) => {
                        return (
                            <div key={id} className='grow bg-[#181e25] text-[#fff] relative rounded-2xl  translate-y-4  hover:translate-y-0 transition-all duration-500 ease-in-out shadow-lg group'>
                                <div className='relative z-0 '>
                                    <img src={src} alt="img" className='max-w-full w-full  rounded-3xl' />
                                    <div className="bg-[url('/src/assets/images/Shapes/shape-21.png')] absolute h-full w-full bg-center bg-no-repeat bg-cover z-10 top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className='z-10 bg-[#333] group-hover:bg-gradient-to-tr transition-all duration-500  group-hover:from-colorTheme border-[1px] border-solid border-[#8A8A8A] rounded-lg absolute right-2 bottom-2 text-2xl py-2 px-4'>
                                        {day} <br /> {month}
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <ul className='flex gap-1 my-3'>
                                        {Tag.map((item, index) => (
                                            <li key={index} className='bg-[#0b0e13] py-1 px-2 rounded-xl text-[10px] cursor-pointer border-[1px] border-gray-600'>{item}</li>
                                        ))}
                                    </ul>
                                    <h3 className='text-xl font-bold cursor-pointer text-font'>{Discription}</h3>
                                    <div className='mt-10'>
                                        <Button primaryBtn={primaryBtn} >Read more</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}