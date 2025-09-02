import news from '../assets/data/News.json'
import { Button } from './Buttons/Button'


export const NewsSection = (variant) => {

    const todaydate = new Date()
    const day = todaydate.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = todaydate.toLocaleDateString("en-GB", { month: "short" });
    return (
        <section className="relative py-[70px] md:py-[120px]">
            <div className="absolute bg-[url('/images/Shapes/shape-20.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full z-0"></div>
            <div className="relative w-full max-w-[1350px] mx-auto px-[15px]">
                <div className="text-white flex flex-col items-center justify-center relative mb-12">
                    <h3 className="relative block text-[24px] leading-[36px] font-[400] text-[#b5b5b5] font-ambit mb-[24px]">Recent Articles</h3>
                    <h2 className="text-[34px] leading-[42px] md:text-[50px] md:leading-[58px] font-[400] text-center font-ambit">{"Lates "}
                        <span className="gradient-text inline-block relative font-[700]">
                            Blog Journal
                        </span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-wrap md:flex-row  lg:flex-row lg:flex-nowrap items-center justify-start gap-x-[24px]">
                    {news.map(({ id, Discription, src, Tag }) => {
                        return (
                            <div key={id} className='bg-[#181e25] text-[#fff] relative rounded-[16px]  translate-y-4  hover:translate-y-0 transition-all duration-500 ease-in-out grou w-full md:w-[48%] lg:w-4/12 mb-[24px] group'>
                                <div className='relative z-0 '>
                                    <img src={src} alt="img" className='max-w-full w-full rounded-[16px] ' />
                                    <div className="bg-[url('/images/Shapes/shape-21.png')] absolute h-full w-full bg-center bg-no-repeat bg-cover z-10 top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className='z-10 text-[30px] leading-[35px] bg-[#333] group-hover:bg-gradient-to-tr transition-all duration-500  group-hover:from-colorTheme border-[1px] border-solid border-[#8A8A8A] rounded-[10px] absolute right-[24px] bottom-[24px] text-center font-[700] font-ambit p-[10px] w-[70px]'>
                                        {day} <br /> <span className='relative block text-[18px] leading-[21px] text-[#e8e9e9] font-[400]'>{month}</span>
                                    </div>
                                </div>
                                <div className='p-[24px]'>
                                    <ul className='flex relative  items-center lg:gap-[15px] mb-[16px]'>
                                        {Tag.map((item, index) => (
                                            <li key={index} className='relative inline-block mb-[10px]'>
                                                <a href="" className='inline-block text-[12px] leading-[15px] text-[#8a8a8a] border-solid border-[1px] border-[#333333] rounded-[24px] py-[5px] px-[9px] font-ambit'>{item}</a></li>
                                        ))}
                                    </ul>
                                    <h3 className='relative text-[21px] leading-[33px] font-[600] mb-[16px] font-ambit cursor-pointer  group-hover:underline text-[#fff]'>{Discription}</h3>
                                    <div className=''>
                                        <Button variant={variant} >Read more</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='pt-[30px] text-center'>
                    <Button variant={variant}>See All Blogs</Button>
                </div>
            </div>
        </section>
    )
}