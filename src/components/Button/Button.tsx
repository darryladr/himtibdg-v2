import { PropsWithChildren } from 'react'

export default function Button({
    children,
}: PropsWithChildren): React.ReactElement {
    return (
        <button
            type="button"
            className="text-white bg-himti-500 hover:bg-himti-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
            {children}
        </button>
    )
}
