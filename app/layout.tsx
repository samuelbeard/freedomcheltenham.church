import { Metadata } from "next"
import "styles/globals.css"
import Script from "next/script"

export const metadata: Metadata = {
    metadataBase: new URL("https://freedomcheltenham.church"),
    title: {
        template: "%s | Freedom Church Cheltenham",
        default: "Freedom Church Cheltenham",
    },
    description:
        "Connecting Anyone Anywhere to a Life Changing Relationship with Jesus",
    keywords: ["church", "cheltenham", "gloucestershire"],
    openGraph: {
        title: "Freedom Church Cheltenham",
        description:
            "Connecting Anyone Anywhere to a Life Changing Relationship with Jesus",
        url: "https://freedomcheltenham.church",
        siteName: "Freedom Church Cheltenham",
        images: [
            {
                url: "/img/logo/og-image.png",
            },
        ],
        locale: "en_GB",
        type: "website",
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
            <head>
                <Script>
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}')`}
                </Script>
            </head>
            <body>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
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
