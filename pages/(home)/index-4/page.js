import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Services from "@/components/sections/home4/Services"
import About from "@/components/sections/home4/About"
import  Team from '@/components/sections/home4/Team'
import Chooseus from "@/components/sections/home4/Chooseus"
import Pricing from "@/components/sections/home4/Pricing"
import Project from "@/components/sections/home4/Project"
import Subscribe from "@/components/sections/home4/Subscribe"
import Testimonial from "@/components/sections/home4/Testimonial"
import Award from "@/components/sections/home4/Award"

import News from "@/components/sections/home4/News"

export default function Home() {

    return (
        <div className="home_4">
            <Layout headerStyle={4} footerStyle={4}>
                <Banner />
                <About />
                <Services />
                <Chooseus />
                <Team />
                <Pricing />
                <Award />
                <Project />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </div>
    )
}