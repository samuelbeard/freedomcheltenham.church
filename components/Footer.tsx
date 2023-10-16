import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import KeepConnectedSection from "./KeepConnectedSection"

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
        <>
            <KeepConnectedSection />
            <footer className="footer bg-brand-dark-gray py-10 text-white">
                <div className="w-5xl mx-auto grid max-w-5xl grid-cols-3 px-5 sm:grid-cols-4 sm:gap-12">
                    <div className="col-span-3 text-center sm:col-span-1">
                        <Image
                            src="/img/logo/logo-footer.png"
                            alt="Freedom Church"
                            width={120}
                            height={175}
                            className="mx-auto"
                        />
                        <p className="mt-3 text-xs opacity-75">
                            Registered charity in
                            <br />
                            England and Wales (1161926)
                        </p>
                    </div>
                    <div className="hidden sm:col-span-1 sm:inline"></div>
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
                        <h4 className="h4 hidden text-white sm:block">
                            &nbsp;
                        </h4>
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
        </>
    )
}

export default Footer
