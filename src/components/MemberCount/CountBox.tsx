interface Props {
    count: string | number
    title: string
}

export default function CountBox({ count, title }: Props): React.ReactElement {
    return (
        <div className="relative flex flex-col items-center gap-2">
            <div className="relative w-32 h-32 flex items-center justify-center bg-himti-500 rounded-2xl shadow-lg">
                <h1 className="text-white text-5xl font-bold">{count}</h1>
            </div>
            <span className="font-semibold text-himti-500">{title}</span>
        </div>
    )
}
