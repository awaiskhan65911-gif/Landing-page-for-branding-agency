import { AboutSection } from "../Components/AboutSection"
import { CTASection } from "../Components/CTASection"
import { FaqSection } from "../Components/FaqSection"
import { FeedbackSection } from "../Components/FeedbackSection"
import { HeroSection } from "../Components/HeroSection"
import { IntroSection } from "../Components/IntroSection"
import { NewsSection } from "../Components/NewsSection"
import { PortfolioSection } from "../Components/PortfolioSection"
import {  PricingSection } from "../Components/PricingSection"
import { ProcessSection } from "../Components/ProcessSection"
import { ProgressBar } from "../Components/ProgressBar"
import { ServicesSection } from "../Components/ServicesSection"
import {  TeamSection } from "../Components/TeamSection"

export const Home = () =>{
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <IntroSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <ProcessSection/>
        <FeedbackSection />
        <PricingSection/>
        <FaqSection/>
        <TeamSection/>
        <NewsSection/>
        <CTASection/>
        <ProgressBar/>
        </>
    )
}