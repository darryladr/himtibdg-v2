import React, { PropsWithChildren } from 'react'

import Nav from '@/components/Nav/Nav'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Nav />
            <main className="relative px-8 flex flex-col items-center justify-start overflow-hidden">
                {children}
            </main>
        </>
    )
}
