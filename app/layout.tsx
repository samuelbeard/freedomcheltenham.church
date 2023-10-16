import { Metadata } from "next"
import "styles/globals.css"
import Footer from "components/Footer"

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
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}
