import '@splidejs/react-splide/css/core'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import CardWithImg from '@/components/Card/CardWithImg'
import type { ICardProps } from '@/components/Card/CardWithImg'
import card1 from '@/assets/card1.svg'

interface ICards extends ICardProps {
    _id: number
}

const Cards: Array<ICards> = [
    {
        _id: 1,
        src: card1,
        imgHeight: 200,
        title: 'Responsi UTS 2022',
        desc: 'Belajar bersama himti melalui Responsi mempersiapkan UTS',
    },
    {
        _id: 2,
        src: card1,
        imgHeight: 200,
        title: 'Responsi UTS 2023',
        desc: 'Belajar bersama himti melalui Responsi mempersiapkan UTS',
    },
    {
        _id: 3,
        src: card1,
        imgHeight: 200,
        title: 'Responsi UTS 2024',
        desc: 'Belajar bersama himti melalui Responsi mempersiapkan UTS',
    },
    {
        _id: 4,
        src: card1,
        imgHeight: 200,
        title: 'Responsi UTS 2025',
        desc: 'Belajar bersama himti melalui Responsi mempersiapkan UTS',
    },
]

export default function CardSlider() {
    return (
        <div className="relative flex justify-center w-screen">
            <Splide
                options={{
                    type: 'loop',
                    perPage: 3,
                    perMove: 1,
                    width: '75%',
                }}
                hasTrack={false}
                className="relative flex items-center"
            >
                <div className="relative flex justify-center w-full">
                    <SplideTrack className="relative p-4">
                        {Cards.map((item) => (
                            <SplideSlide
                                key={item._id}
                                className="flex justify-center"
                            >
                                <CardWithImg
                                    src={item.src}
                                    imgHeight={item.imgHeight}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>

                    <div className="splide__arrows w-screen gap-20 flex absolute justify-between">
                        <button
                            type="button"
                            className="splide__arrow splide__arrow--prev top-0 right-4 h-full cursor-pointer group focus:outline-none"
                        >
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg
                                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="splide__arrow splide__arrow--next z-30 h-full cursor-pointer group focus:outline-none"
                        >
                            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 group-hover:bg-black/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg
                                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </Splide>
        </div>
    )
}
