import CardVision from '@/components/Card/CardVision'
import Image from 'next/image'
import mission from '@/assets/mission.svg'

export default function VisionMission(): React.ReactElement {
    return (
        <div className="container relative flex flex-col items-center mb-24">
            <h1 className="text-5xl font-bold text-himti-500 mb-8">
                Our Vision and Mission
            </h1>
            <div className="mission-wrapper relative flex flex-col items-center mb-8">
                <div className="img-wrapper mb-8">
                    <Image src={mission} />
                </div>
                <h1 className="text-4xl font-bold text-himti-500 mb-4">
                    Mission
                </h1>
                <p className="text-center text-lg text-himti-400">
                    Menjadi himpunan yang unggul dan diakui secara nasional
                    serta bermanfaat bagi mahasiswa dan juga masyarakat luas,
                    memiliki solidaritas yang tinggi, berintegritas, kreatif
                    serta inovatif dalam bidang teknologi berbasis nilai-nilai
                    budaya nasional serta budaya Sunda dan menjadi wadah
                    aspirasi kegiatan mahasiswa jurusan/program studi Teknik
                    Informatika BINUS @Bandung pada tahun 2031.
                </p>
            </div>
            <div className="vision-wrapper relative flex flex-col items-center">
                <h1 className="text-4xl font-bold text-himti-500 mb-4">
                    Vision
                </h1>
                <div className="card-wrapper flex flex-grow gap-4">
                    <CardVision>
                        Menjadi himpunan yang dapat menampung dan menjalankan
                        aspirasi mahasiswa jurusan/program studi Teknik
                        Informatika.
                    </CardVision>
                    <CardVision>
                        Menyelenggarakan kegiatan mahasiswa agar tercapainya
                        mahasiswa jurusan/program studi Teknik Informatika yang
                        aktif, kreatif serta inovatif, berintegritas, solid dan
                        berkompeten di bidangnya.
                    </CardVision>
                    <CardVision>
                        Menjalin hubungan yang baik dengan lembaga pendidikan,
                        lembaga hukum, lembaga budaya, asosiasi atau organisasi
                        yang berhubungan dengan program studi serta
                        himpunan-himpunan dari universitas atau sekolah tinggi
                        lainya.
                    </CardVision>
                    <CardVision>
                        Ikut berpartisipasi dan menjuarai kompetisi berskala
                        nasional.
                    </CardVision>
                    <CardVision>
                        Membangun hubungan yang baik dan suasana kekeluargaan
                        antar mahasiswa serta dosen jurusan/program studi Teknik
                        Informatika.
                    </CardVision>
                </div>
            </div>
        </div>
    )
}
