import LogoHimti from '@/components/Logo/Logo'

export default function AboutUs(): React.ReactElement {
    return (
        <div className="container relative flex flex-row gap-12 p-14 items-start justify-center">
            <LogoHimti width={200} />
            <div className="content-wrapper flex flex-col gap-1">
                <h1 className="font-bold text-5xl text-himti-500">About Us</h1>
                <p className="text-lg text-justify text-himti-400 max-w-2xl">
                    Himpunanan Mahasiswa Teknik Informatika (HIMTI) adalah
                    Organisasi Kemahasiswaan di Universitas Bina Nusantara yang
                    berbentuk Himpunan Mahasiswa Jurusan (HMJ) untuk mahasiswa
                    School of Computer Science (SOCS), BINUS UNIVERSITY
                    @Bandung. Pada organisasi ini, diharapkan kemampuan
                    mahasiswa/i akan lebih berkembang melalui leadership,
                    communication, creativity serta integritas setiap
                    individunya. Hal ini diharapkan dapat menjadi cerminan bagi
                    mahasiswa mahasiswi Informasi Teknologi khususnya BINUS
                    BANDUNG.
                    <br />
                    <br />
                    HIMTI BINUS @Bandung memiliki tujuan untuk menampung dan
                    mendukung setiap aspirasi dan kemajuan sektor akademik dan
                    non-akademik dari anggota Himpunan Mahasiswa Teknik
                    Informatika Universitas Bina Nusantara @Bandung.
                </p>
            </div>
        </div>
    )
}
