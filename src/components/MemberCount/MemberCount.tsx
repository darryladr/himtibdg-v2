import CountBox from '@/components/MemberCount/CountBox'

interface IMember {
    anggota: string | number
    pengurus: string | number
    aktivis: string | number
}

const member: IMember = {
    anggota: 688,
    pengurus: 27,
    aktivis: 91,
}

export default function MemberCount(): React.ReactElement {
    return (
        <div className="container relative flex flex-col items-center mb-8">
            <div className="title-wrapper flex flex-col gap-2 items-center mb-8">
                <h1 className="text-5xl font-bold text-himti-500">
                    We are still counting!
                </h1>
                <h2 className="text-xl font-medium text-himti-400">
                    Jumlah Pengurus dan Anggota HIMTI Bandung
                </h2>
            </div>
            <div className="wrapper flex gap-4">
                <CountBox count={member.anggota} title="Anggota" />
                <CountBox count={member.pengurus} title="Pengurus" />
                <CountBox count={member.aktivis} title="Aktivis" />
            </div>
        </div>
    )
}
