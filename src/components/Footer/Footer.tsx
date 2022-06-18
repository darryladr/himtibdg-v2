import { HimtiWhite } from '@/components/Logo/Logo'
import Image from 'next/image'
import instagram from '@/assets/instagram.svg'
import youtube from '@/assets/youtube.svg'

export default function Footer(): React.ReactElement {
    return (
        <div className="footer relative flex flex-col justify-between items-start w-screen h-72 bg-himti-500 p-8">
            <div className="wrapper w-full flex justify-between items-center">
                <div className="logo h-full flex gap-4 items-center">
                    <HimtiWhite width={64} height={64} />
                    <h1 className="text-white font-bold text-3xl">
                        HIMTI
                        <br />
                        BINUS BANDUNG
                    </h1>
                </div>

                <div className="social flex flex-col justify-start gap-4">
                    <div className="instagram flex gap-2 items-center">
                        <Image src={instagram} width={32} height={32} />
                        <span className="font-bold text-white">@himti.bdg</span>
                    </div>
                    <div className="youtube flex gap-2 items-center">
                        <Image src={youtube} width={32} height={32} />
                        <span className="font-bold text-white">
                            HIMTI BINUS Bandung
                        </span>
                    </div>
                </div>
            </div>
            <div className="wrapper w-full flex flex-col items-center">
                <span className="font-bold text-white">
                    © Copyright HIMTI Binus @Bandung 2022
                </span>
                <span className="font-bold text-white">
                    Created & Designed by RnD Team
                </span>
            </div>
        </div>
    )
}
