import Link from "next/link"

export const metadata = {
    title: "Carols | 17th December | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <div className="bg-[#171717] text-[#dec87f] font-serif w-full text-xl">
            <img src="/img/carols/website-top.svg" alt="" />
            <img
                src="/img/carols/carols-logo.svg"
                className="mx-auto w-1/2"
                alt=""
            />
            <div className="flex justify-center">
                <div className="flex mx-auto">
                    <div className=" w-60 xh-24 center">
                        <h2 className="text-[32px]">SUNDAY</h2>
                    </div>
                    <div className="w-60 center flex-col border-x border-[#dec87f]">
                        <h1 className="text-[100px] mb-3 mt-0">17</h1>
                        <h2 className="text-[32px] mt-12">DEC</h2>
                    </div>
                    <div className="w-60 center text-[32px]">
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
                    Join us for an enchanting evening
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
            <div className="flex mt-24 w-8/12 mx-auto text-center">
                <div>
                    <img
                        src="/img/carols/kids.svg"
                        className="w-60 mx-auto"
                        alt=""
                    />
                    <h3 className="uppercase text-3xl font-bold">
                        Kids provision
                    </h3>
                    <p>
                        Fantastic kids events will be avaliable at both morning
                        and evening events.
                    </p>
                </div>
                <div>
                    <img
                        src="/img/carols/mulled-wine.svg"
                        className="w-60"
                        alt=""
                    />
                    <h3>Mulled wine &amp; mince pies</h3>
                    <p>Complimentary mulled wine and mince pies on arrival.</p>
                </div>
                <div>
                    <img
                        src="/img/carols/double-event.svg"
                        className="w-60"
                        alt=""
                    />
                    <h3>Double event</h3>
                    <p>
                        Join us either in the morning or evening for an
                        unforgettable celebration.
                    </p>
                </div>
            </div>
            <div>
                <h2>How to find us</h2>
            </div>
            <div>
                <div>MAP</div>
                <div>
                    <p>
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
            <div className="h-screen">sdf</div>
        </div>
    )
}
