import Image from "next/image";
import FAQSection from "../app/components/faq";
import Hero from "../app/components/hero";
import TalentSection from "../app/components/talentCard";
import Testimonial from "../app/components/testimonial";
import WhyChooseUs from "../app/components/why-choose-us";
import LogosSection from "./components/logos";

export default function HomePage() {
    return (
        <div className="flex flex-col ">
            <Hero/>
            <LogosSection/>
            <TalentSection/>
            <WhyChooseUs/>
            <Testimonial/>
            <FAQSection/>

        </div>

    )
}