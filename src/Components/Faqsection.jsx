import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import faq from "../assets/data/Faq.json"
import { useState } from "react"
export const Faq = () =>{

   const [activeid,setactiveid] = useState(null)

   const handletoggle = (id) =>{
    setactiveid((preid) => (preid === id ? null : id))
   }
    return(
        <section className="relative ">
            <div className="absolute bg-[url('/src/assets/images/Shapes/shape-16.png')] bg-center bg-no-repeat bg-cover left-0 top-0 w-full h-full z-0"></div>
              <div className="mb-7 flex flex-col  lg:flex-row justify-around items-center gap-6 relative">
                <div className="flex flex-col">
                    <div className="text-white my-20">
                        <h3 className="text-2xl mb-4 opacity-50 text-font">Some Question</h3>
                        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold">{"Design That Where Ideas "}
                            <br />
                            <span className="gradient-text">
                                Take the Flight
                            </span>
                        </h2>
                    </div>
                    <div className=" flex flex-col gap-3">
                    {faq.map(({Question,Answer,id}) => {
                        return(
                            <div key={id} className="text-[#fff] font-samibold">
                                <div className="flex justify-between my-4">
                                <h3 className="text-2xl text-font ">{Question}</h3>
                                <MdOutlineKeyboardDoubleArrowRight onClick={()=> handletoggle(id)} className={`text-[#fff] ${activeid === id ? 'rotate-90':''}`} size={30}/>
                                </div>
                                     <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out 
                                    ${activeid === id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                             <p className="text-black-700 text-font">{Answer}</p>
                            </div>
                            </div>
                        )
                    } )}
                    </div>
                </div>
                <div className="relative"><img src="src/assets/images/Faq/faq-1.jpg" alt="" className="object-cover rounded-xl" /></div>
                </div>
        </section>
    )
}