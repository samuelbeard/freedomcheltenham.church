import Link from "next/link"
import Carousel from "../../../components/Carousel"
import Image from "next/image"

export const metadata = {
    title: "Carols | 17th December | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <div className="bg-[#171717] text-[#dec87f] font-serif w-full text-xl">
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
                className="mx-auto md:w-[600px] relative md:-top-36"
                alt=""
            />
            <div className="flex justify-center mt-12 md:mt-0">
                <div className="flex mx-auto flex-col md:flex-row gap-12 md:gap-0">
                    <div className="w-60 xh-24 center">
                        <h2 className="text-[32px]">
                            SUNDAY <span className="md:hidden">17 DEC</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex w-60 center flex-col md:border-x border-[#dec87f]">
                        <h1 className="text-[100px] mb-3 mt-0">17</h1>
                        <h2 className="text-[32px] mt-12">DEC</h2>
                    </div>
                    <div className="md:hidden text-center -mt-7">
                        <h2 className="text-2xl">AT 11am & 6pm</h2>
                    </div>
                    <div className="hidden md:flex w-60 center text-[32px]">
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
            <div className="container lg:w-2/3 text-center mt-24 text-[32px] leading-10">
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
                    className="bg-[#dec87f] text-[#171717] px-6 py-3 text-4xl rounded-lg"
                >
                    Sign up here!
                </Link>
            </div>
            <div className="flex mt-32 w-8/12 mx-auto text-center gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                    <Image
                        width={1080}
                        height={1080}
                        src="/img/carols/kids.png"
                        className="w-60 mx-auto"
                        alt=""
                    />
                    <h3 className="uppercase text-3xl font-bold mt-10">
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
                        className="w-60 mx-auto"
                        alt=""
                    />
                    <h3 className="uppercase text-3xl font-bold mt-10">
                        Mulled wine &amp; mince pies
                    </h3>
                    <p>Complimentary mulled wine and mince pies on arrival.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <Image
                        width={1080}
                        height={1080}
                        src="/img/carols/double-event.png"
                        className="w-60 mx-auto"
                        alt=""
                    />
                    <h3 className="uppercase text-3xl font-bold mt-10">
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
                    <h2 className="text-4xl uppercase font-bold">
                        How to find us
                    </h2>
                </div>
            </div>
            <div>
                <div className="container flex gap-10 mt-10 flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-96">
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
                        <p className="uppercase text-xl">
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
                    className="bg-[#dec87f] text-[#171717] px-6 py-3 text-4xl rounded-lg"
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
                    className="w-64 mx-auto mt-20 md:-mb-32"
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
