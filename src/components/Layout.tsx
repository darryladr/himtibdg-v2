import React, { PropsWithChildren } from 'react'

import Nav from '@/components/Nav/Nav'

// import blob1 from '@/assets/blob1.svg'
// import blob2 from '@/assets/blob2.svg'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Nav />
            <main className="relative px-8 flex flex-col items-center justify-start overflow-hidden">
                {children}
            </main>
            {/* <div className="absolute right-0 right -z-50">
                <Image src={blob1} />
            </div>
            <div className="absolute left-0 -z-50">
                <Image src={blob2} />
            </div> */}
        </>
    )
}
