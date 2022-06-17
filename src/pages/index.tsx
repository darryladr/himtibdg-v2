import CardSlider from '@/components/Slider/CardSlider'
import Head from 'next/head'
import Hero from '@/components/Hero/Hero'

export default function Home(): React.ReactNode {
    return (
        <>
            <Head>
                <title>Index Page</title>
            </Head>
            <Hero />
            <CardSlider />
        </>
    )
}
