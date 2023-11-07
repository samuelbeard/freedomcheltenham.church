import Link from "next/link"

export const metadata = {
    title: "Carols | 17th December | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <div className="bg-[#171717] text-[#dec87f] font-serif w-full text-xl">
            <div></div>
            <div className="flex mx-auto">
                <div>
                    <h2>SUNDAY</h2>
                </div>
                <div>
                    <h1>17</h1>
                    <h2>DEC</h2>
                </div>
                <div>
                    <div>
                        <h2>AT</h2>
                    </div>
                    <div>
                        11:00AM
                        <br />
                        6:00PM
                    </div>
                </div>
            </div>
            <div className="container lg:w-2/3 text-center">
                <p className="uppercase">
                    Join us for an enchanting evening
                    <br />
                    of traditional carols amidst the soft
                    <br />
                    glow of candlelight.
                </p>
                <p className="mt-10">
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
                <p className="mt-10 uppercase">
                    Reserve your seat today and illuminate
                    <br />
                    your festive season with joy and wonder!
                </p>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href="https://freedom.churchsuite.com/events/6zumsu72"
                    className="bg-[#dec87f] text-[#171717] px-6 py-3 text-4xl rounded-lg"
                >
                    Sign up here!
                </Link>
            </div>
            <div className="flex mt-20 w-8/12">
                <div>
                    <img src="" alt="" />
                    <h3>Kids provision</h3>
                    <p>
                        Fantastic kids events will be avaliable at both morning
                        and evening events.
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Mulled wine &amp; mince pies</h3>
                    <p>Complimentary mulled wine and mince pies on arrival.</p>
                </div>
                <div>
                    <img src="" alt="" />
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
