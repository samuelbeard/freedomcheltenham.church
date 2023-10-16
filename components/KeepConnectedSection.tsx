import Link from "next/link"
import { RiInstagramLine, RiFacebookBoxFill } from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"

const KeepConnectedSection = () => {
    return (
        <section className="section bg-brand-red py-16">
            <div className="container text-center">
                <h1 className="h1 m-0 text-white">Keep Connected</h1>
                <div className="mt-10 flex justify-center gap-6">
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
                    <div className="mx-auto mt-10 w-fit rounded bg-white py-1 px-2 text-black">
                        cheltenham@freedomchurch.cc
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeepConnectedSection
