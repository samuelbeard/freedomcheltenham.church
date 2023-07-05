import Link from "next/link"
import { RiInstagramLine, RiFacebookBoxFill } from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"

const KeepConnectedSection = () => {
    return (
        <section className="section bg-brand-red py-16">
            <div className="container text-center">
                <h1 className="h1 text-white m-0">Keep Connected</h1>
                <div className="flex gap-6 mt-10 justify-center">
                    <Link href="/instagram">
                        <div className="social-media-bubble">
                            <RiInstagramLine className="h-8 w-8" />
                        </div>
                    </Link>
                    <Link href="/facebook">
                        <div className="social-media-bubble">
                            <RiFacebookBoxFill className="h-8 w-8" />
                        </div>
                    </Link>
                    <Link href="/tiktok">
                        <div className="social-media-bubble">
                            <FaTiktok className="h-8 w-8" />
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="bg-white text-black py-1 px-2 mt-10 rounded w-fit mx-auto">
                        cheltenham@freedomchurch.cc
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeepConnectedSection
