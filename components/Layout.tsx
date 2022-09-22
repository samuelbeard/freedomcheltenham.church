import { FC } from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
    children: React.ReactNode
    title: string
}

const Layout: FC<Props> = ({ children, title }) => {
    return (
        <div className="page fixed md:static">
            <Head>
                <title>{title} | Freedom Church Cheltenham</title>
            </Head>
            <Header background="red" />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
