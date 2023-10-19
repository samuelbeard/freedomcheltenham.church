import { Metadata } from "next"
import "styles/globals.css"
import Script from "next/script"

export const metadata: Metadata = {
    metadataBase: new URL("https://freedomchurchcheltenham.com"),
    title: "Freedom Church Cheltenham",
    description:
        "Connecting Anyone Anywhere to a Life Changing Relationship with Jesus",
    keywords: ["church", "cheltenham", "gloucestershire"],
    openGraph: {
        images: [
            {
                url: "/img/logo/og-image.png",
            },
        ],
        locale: "en_GB",
    },
    themeColor: "black",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Script
                    async
                    src="https://umami.samuelbeard.xyz/script.js"
                    data-website-id={process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID}
                ></Script>
                {children}
            </body>
        </html>
    )
}
