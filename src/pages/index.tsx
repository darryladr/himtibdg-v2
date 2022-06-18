import AboutUs from '@/components/About/AboutUs'
import CardSlider from '@/components/Slider/CardSlider'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import Hero from '@/components/Hero/Hero'
import MemberCount from '@/components/MemberCount/MemberCount'
import VisionMission from '@/components/VisionMission/VisionMission'

export default function Home(): React.ReactNode {
    return (
        <>
            <Head>
                <title>Index Page</title>
            </Head>
            <Hero />
            <CardSlider />
            <AboutUs />
            <MemberCount />
            <VisionMission />
            <Footer />
        </>
    )
}
