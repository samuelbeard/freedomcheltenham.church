import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta
                    property="description"
                    content="Connecting Anyone Anywhere to a Life Changing Relationship with Jesus"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
