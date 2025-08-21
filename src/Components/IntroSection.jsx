import intro from "../assets/data/Introdata.json"


export const IntroSection = () => {
    return (
        <section className="relative p-10 before:w-full before:left-0 before:-top-2 before:opacity-20  before:h-[1px] before:absolute before:bg-gradient-to-r before:from-[#4bb6ef] before:via-[#dd933e] before:to-[#d82e5a]">
            <div className="relative max-w-[1456px] mx-auto ">
                <div className="text-white  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  lg:grid-rows-1 lg:grid-cols-3  justify-between">
                    {intro.map((elem) => (
                        <div key={elem.id} className="px-2 group relative mt-4 text-center md:text-left">
                            <div className="decorate hidden opacity-20 group-hover:opacity-100 lg:block transition-all duration-300 ease-in-out"></div>
                            <div>
                                <h3 className="text-2xl lg:text-xl xl:text-2xl font-semibold mb-4 group-hover:underline">
                                    <a href="/">{elem.Title}</a>
                                </h3>
                                <p className="text-font">{elem.Discripton}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}