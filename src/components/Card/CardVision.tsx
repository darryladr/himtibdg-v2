import { PropsWithChildren } from 'react'

export default function CardVision({
    children,
}: PropsWithChildren): React.ReactElement {
    return (
        <div className="container relative flex flex-col items-center p-2 rounded-xl bg-himti-500 shadow-lg">
            <div className="img-wrapper flex items-end justify-center w-full h-40 rounded-lg bg-white">
                Placeholder
            </div>
            <div className="content-wrapper flex items-center justify-center h-full">
                <p className="text-white text-sm font-medium text-center p-2">
                    {children}
                </p>
            </div>
        </div>
    )
}
