import { MetadataRoute } from "next"

const URL = "https://freedomcheltenham.church"

const allRoutes = [
    "",
    "/about",
    "/visit",
    "/dna",
    "/kids",
    "/events",
    "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = allRoutes.map(route => ({
        url: `${URL}/${route}`,
        lastModified: new Date().toISOString(),
    }))

    return [...routes]
}
