import intro from "../assets/data/Introdata.json"


export const IntroSection = () => {
    return (
        <section className="relative bg-[#1a1f25] pt-[97px] pb-[40px] md:pb-[82px] before:w-full before:left-0 before:top-0 before:opacity-[.2]  before:h-[1px] before:absolute before:bg-[linear-gradient(90deg,#4BB6EF_16.75%,#dd933e_50.1%,#d82e5a_138.04%)]">
            <div className="relative max-w-[1130px] mx-auto lg:px-[15px]">
                <div className="flex items-start lg:justify-between flex-wrap  md:gap-0">
                    {intro.map((elem) => (
                        <div key={elem.id} className="px-[12px] group relative text-center md:text-left w-full md:w-[50%] lg:w-1/3">
                            <div className="decorate hidden opacity-20 group-hover:opacity-100 lg:block transition-all duration-300 ease-in-out"></div>
                            <div className="mb-[30px] block relative bottom-5 md:max-w-[320px]">
                                <h3 className="font-[600] font-ambit text-[25px] leading-[33px] mb-[24px] group-hover:underline text-[#fff]">
                                    <a href="/">{elem.Title}</a>
                                </h3>
                                <p className="text-font text-[#B0B0B0]">{elem.Discripton}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  lg:grid-rows-1 lg:grid-cols-3