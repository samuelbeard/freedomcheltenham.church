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
        destination: "https://www.youtube.com/@freedomcheltenham",
        permanent: false,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/FreedomChurchCheltenham",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/freedomcheltenham/?hl=en",
        permanent: false,
      },
      {
        source: "/tiktok",
        destination: "https://www.tiktok.com/@freedomchurchcheltenham",
        permanent: false,
      },
      {
        source: "/live",
        destination: "https://www.youtube.com/@freedomcheltenham/live",
        permanent: false,
      },
      {
        source: "/donate",
        destination: "https://freedomcheltenham.churchsuite.com/donate",
        permanent: false,
      },
      // Redirects for forms.
      {
        source: "/kids-check-in",
        destination: "https://freedomcheltenham.churchsuite.com/forms/rfalyxh3",
        permanent: false,
      },
      {
        source: "/volunteer-signup",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSePDjQaIL9uQyJdTkDDsYCWPUk-wyj4Yg7gnfSCDHnfapqR_A/viewform",
        permanent: false,
      },
      {
        source: "/expenses-form",
        desination: "https://freedomcheltenham.churchsuite.com/forms/nwczyb0a",
        permanent: false,
      },
      {
        source: "/zeal-form",
        desination: "https://freedomcheltenham.churchsuite.com/forms/fucuh7bg",
        permanent: false,
      },
      {
        source: "/groups-form",
        desination: "https://freedomcheltenham.churchsuite.com/forms/pczcys0u",
        permanent: false,
      },
      {
        source: "/leadership-night-school-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/xgat3o9y",
        permanent: false,
      },
      {
        source: "/alpha-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/eh0psibj",
        permanent: false,
      },
      {
        source: "/growth-track-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/csibi5wd",
        permanent: false,
      },
      {
        source: "/connect-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/asikcxja",
        permanent: false,
      },
      {
        source: "/baptism-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/oom4kiaf",
        permanent: false,
      },
      {
        source: "/gift-aid-form",
        destination: "https://freedomcheltenham.churchsuite.com/forms/ig89en2c",
        permanent: false,
      },
      // Redirects for old pages that we may want to bring back.
      {
        source: "/carols",
        destination: "/",
        permanent: false,
      },
      {
        source: "/christingle",
        destination: "/",
        permanent: false,
      },
      // Redirects for external pages.
      {
        source: "/worship-songs-we-think-youll-love",
        destination:
          "https://open.spotify.com/playlist/1HKzWoQb7Yn8DfpePlLBF1?si=nxpNsONpQwm8937QwZTIjg&pi=NjSt-J33S6SC2",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
