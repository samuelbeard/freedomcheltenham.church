/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/messages",
                destination: "https://www.freedomchurch.cc/watch",
                permanent: false,
            },
            {
                source: "/youtube",
                destination: "https://www.youtube.com/c/freedomchurchcc",
                permanent: false,
            },
            {
                source: "/facebook",
                destination: "https://www.facebook.com/FreedomChurchCheltenham",
                permanent: false,
            },
            {
                source: "/instagram",
                destination:
                    "https://www.instagram.com/freedomcheltenham/?hl=en",
                permanent: false,
            },
            {
                source: "/tiktok",
                destination: "https://www.tiktok.com/@freedomchurchcheltenham",
                permanent: false,
            },
            {
                source: "/kids-registration",
                destination:
                    "https://docs.google.com/forms/d/e/1FAIpQLSe12agi_7q1hwPl3jTXKPlaGitgUM9i0MjTvStg4gY3mi6UtA/viewform",
                permanent: false,
            },
            {
                source: "/volunteer-signup",
                destination:
                    "https://docs.google.com/forms/d/e/1FAIpQLSePDjQaIL9uQyJdTkDDsYCWPUk-wyj4Yg7gnfSCDHnfapqR_A/viewform",
                permanent: false,
            },
            {
                source: "/light-party",
                destination: "http://freedom.churchsuite.com/events/xvfkgsyt",
                permanent: false,
            },
            {
                source: "/calendar-subscribe",
                destination: "https://fdom.ch/ctm-cal",
                permanent: false,
            },
            {
                source: "/calendar",
                destination: "/",
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
