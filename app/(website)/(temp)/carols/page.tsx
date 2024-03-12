import Link from "next/link"
import Carousel from "../../../../components/Carousel"
import Image from "next/image"

export const metadata = {
    title: "Carols | 17th December | Freedom Church Cheltenham",
    description: "Join us for a festive celebration of carols and creativity.",
}

export default function Page() {
    return (
        <div className="w-full bg-[#171717] font-serif text-xl text-[#dec87f]">
            <Image
                src="/img/carols/website-top.png"
                alt=""
                width={2160}
                height={588}
            />
            <Image
                width={1080}
                height={1080}
                src="/img/carols/carols-logo.png"
                className="relative mx-auto md:-top-36 md:w-[600px]"
                alt=""
            />
            <div className="mt-12 flex justify-center md:mt-0">
                <div className="mx-auto flex flex-col gap-12 md:flex-row md:gap-0">
                    <div className="xh-24 center w-60">
                        <h2 className="text-[32px]">
                            SUNDAY <span className="md:hidden">17 DEC</span>
                        </h2>
                    </div>
                    <div className="center hidden w-60 flex-col border-[#dec87f] md:flex md:border-x">
                        <h1 className="mb-3 mt-0 text-[100px]">17</h1>
                        <h2 className="mt-12 text-[32px]">DEC</h2>
                    </div>
                    <div className="-mt-7 text-center md:hidden">
                        <h2 className="text-2xl">AT 11am & 6pm</h2>
                    </div>
                    <div className="center hidden w-60 text-[32px] md:flex">
                        <div className="mr-4">
                            <h2 className="">AT</h2>
                        </div>
                        <div>
                            <h2 className="mb-3">11:00 AM</h2>
                            <h2>6:00 PM</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-24 text-center text-[32px] leading-10 lg:w-2/3">
                <p className="uppercase">
                    Join us for an enchanting celebration
                    <br />
                    of traditional carols amidst the soft
                    <br />
                    glow of candlelight.
                </p>
                <p className="mt-24">
                    Be part of a tradition that brings people
                    <br />
                    together, rekindles the spirit of Christmas and
                    <br />
                    creates cherished memories. We&apos;ll come
                    <br />
                    together to celebrate the birth of Christ
                    <br />
                    through song, prayer and creativity.
                </p>
                <p className="mt-24 uppercase">
                    Reserve your seat today and illuminate
                    <br />
                    your festive season with joy and wonder!
                </p>
            </div>
            <div className="mt-24 text-center">
                <Link
                    href="https://freedom.churchsuite.com/events/6zumsu72"
                    className="rounded-lg bg-[#dec87f] px-6 py-3 text-4xl text-[#171717]"
                >
                    Sign up here!
                </Link>
            </div>
            <div className="mx-auto mt-32 flex w-8/12 flex-col gap-10 text-center md:flex-row">
                <div className="w-full md:w-1/3">
                    <Image
                        width={1080}
                        height={1080}
                        src="/img/carols/kids.png"
                        className="mx-auto w-60"
                        alt=""
                    />
                    <h3 className="mt-10 text-3xl font-bold uppercase">
                        Kids provision
                    </h3>
                    <p>
                        Fantastic kids events will be available separately from
                        the main events for 2-11 year olds with dedicated DBS
                        checked volunteers!
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image
                        width={1080}
                        height={1080}
                        src="/img/carols/mulled-wine.png"
                        className="mx-auto w-60"
                        alt=""
                    />
                    <h3 className="mt-10 text-3xl font-bold uppercase">
                        Mulled wine &amp; mince pies
                    </h3>
                    <p>Complimentary mulled wine and mince pies on arrival.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image
                        width={1080}
                        height={1080}
                        src="/img/carols/double-event.png"
                        className="mx-auto w-60"
                        alt=""
                    />
                    <h3 className="mt-10 text-3xl font-bold uppercase">
                        Double event
                    </h3>
                    <p>
                        Join us either in the morning or evening for an
                        unforgettable celebration. A candlelight setting will be
                        presented at both events!
                    </p>
                </div>
            </div>
            <div className="mt-24">
                <Carousel
                    direction="left"
                    speed={20}
                    carouselNumber={3}
                    totalImages={6}
                />
            </div>
            <div className="mt-24">
                <div className="container">
                    <h2 className="text-4xl font-bold uppercase">
                        How to find us
                    </h2>
                </div>
            </div>
            <div>
                <div className="container mt-10 flex flex-col gap-10 md:flex-row">
                    <div className="h-96 w-full md:w-1/2">
                        <iframe
                            className="xabsolute inset-0 w-full"
                            style={{
                                filter: "grayscale(0.8) contrast(1.2) opacity(0.9)",
                            }}
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4923.379817736884!2d-2.0784703225860617!3d51.903122825411856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f32b943a245ff21!2sDanceworks!5e0!3m2!1sen!2suk!4v1652795920370!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div>
                        <p className="text-xl uppercase">
                            Danceworks studios
                            <br />
                            35 St George&apos;s st
                            <br />
                            Cheltenham
                            <br />
                            GL50&nbsp;4AF
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-24 text-center">
                <Link
                    href="https://freedom.churchsuite.com/events/6zumsu72"
                    className="rounded-lg bg-[#dec87f] px-6 py-3 text-4xl text-[#171717]"
                >
                    Sign up here!
                </Link>
            </div>
            <div className="mt-32">
                <Image
                    src="/img/carols/welcome.png"
                    className="mx-auto px-10"
                    width={513}
                    height={127}
                    alt=""
                />
                <Image
                    width={1080}
                    height={1080}
                    src="/img/carols/baby-jesus-footer.png"
                    className="mx-auto mt-20 w-64 md:-mb-32"
                    alt=""
                />
                <Image
                    src="/img/carols/website-bottom.png"
                    alt=""
                    width={2160}
                    height={588}
                />
            </div>
        </div>
    )
}
