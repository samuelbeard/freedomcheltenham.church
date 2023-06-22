import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const links = [
    ["About Us", "/about"],
    ["Our DNA", "/dna"],
    ["Calendar", "/calendar"],
    ["Visit", "/visit"],
    ["Kids", "/kids"],
]

const links2 = [
    ["Midweeks", "/midweeks"],
    ["Messages", "/messages"],
    ["Give", "/give"],
    ["Contact Us", "/contact"],
]

const Footer: FC = () => {
    return (
        <footer className="bg-brand-dark-gray text-white py-10 xmt-12 footer">
            <div className="max-w-5xl w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 sm:gap-12 px-5">
                <div className="col-span-3 sm:col-span-1 text-center">
                    <Image
                        src="/img/logo/logo-footer.png"
                        alt="Freedom Church"
                        width={120}
                        height={175}
                        className="mx-auto"
                    />
                    <p className="text-xs mt-3 opacity-75">
                        Registered charity in
                        <br />
                        England and Wales (1161926)
                    </p>
                </div>
                <div className="hidden sm:inline sm:col-span-1"></div>
                <div className="col-span-3 sm:col-span-1">
                    <h4 className="h4 text-white">Links</h4>
                    {links.map(link => {
                        return (
                            <Link key={link[0]} href={link[1]}>
                                {link[0]}
                            </Link>
                        )
                    })}
                </div>
                <div className="col-span-3 sm:col-span-1">
                    <h4 className="h4 text-white hidden sm:block">&nbsp;</h4>
                    {links2.map(link => {
                        return (
                            <Link key={link[0]} href={link[1]}>
                                {link[0]}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
