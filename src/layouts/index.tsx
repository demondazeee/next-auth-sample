import Head from "next/head"
import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode,
    className?: string
}

export const Layouts = ({children, className}: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`container max-w-md mx-auto flex flex-col gap-4 ${className || ""}`}>
                {children}
            </div>
        </>
    )
}