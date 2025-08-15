import { About } from "../Components/Aboutsection"
import { CTA } from "../Components/CTAsection"
import { Faq } from "../Components/Faqsection"
import { Feedback } from "../Components/Feedbacksection"
import { Herosection } from "../Components/Herosection"
import { Intro } from "../Components/Introsection"
import { News } from "../Components/Newssection"
import { Portfolio } from "../Components/Portfoliosection"
import { Pricing } from "../Components/Pricingsection"
import { Process } from "../Components/ProcessSection"
import { Progressbar } from "../Components/Progressbar"
import { Services } from "../Components/Services"
import { Team } from "../Components/Teamsection"

export const Home = () =>{
    return(
        <>
        <Herosection/>
        <About/>
        <Intro/>
        <Services/>
        <Portfolio/>
        <Process/>
        <Feedback/>
        <Pricing/>
        <Faq/>
        <Team/>
        <News/>
        <CTA/>
        <Progressbar/>
        </>
    )
}