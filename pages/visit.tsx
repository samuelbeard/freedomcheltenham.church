import { NextPage } from "next"
import Image from "next/image"
import Layout from "../components/Layout"

const Visit: NextPage = () => {
    return (
        <Layout title="Visit">
            <div className="section pt-12">
                <div className="container">
                    <h1 className="h1">WE&apos;D LOVE FOR YOU TO JOIN US</h1>
                </div>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 pt-12 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="w-full lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow">
                        <iframe
                            className="absolute inset-0"
                            style={{
                                filter: "grayscale(0.8) contrast(1.2) opacity(0.7)",
                            }}
                            title="map"
                            // marginHeight="0"
                            // marginwidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4923.379817736884!2d-2.0784703225860617!3d51.903122825411856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f32b943a245ff21!2sDanceworks!5e0!3m2!1sen!2suk!4v1652795920370!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md opacity-0 md:opacity-100">
                            <div className="lg:w-full px-6 pr-20">
                                <p className="mt-1">
                                    <span className="font-bold">
                                        Danceworks Studio
                                    </span>
                                    <br />
                                    35 St George&apos;s St,
                                    <br />
                                    Cheltenham
                                    <br />
                                    GL50 4AF
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 lg:pb-48 mt-8 md:mt-0">
                        <h2 className="h3 my-1">Access and Parking</h2>
                        <p className="para text-base">
                            There are a variety of parking options available
                            near to the venue, including the High Street Carpark
                            (GL50 3HQ). Due to the venue&apos;s close proximity
                            to the town centre, the venue is also accessible via
                            foot, bike, bus and a 20-25 minute walk from
                            Cheltenham Spa train station.
                        </p>
                        <p className="para text-base">
                            Disabled parking is available onsite at the
                            Danceworks Studio and the main event space, café
                            area and toilets all accessible for guests with a
                            disability.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container md:flex gap-10 md:mt-20">
                <div className="md:w-1/2">
                    <Image
                        width={1080}
                        height={1616}
                        src="/img/photos/worship-2.jpg"
                        alt=""
                        className="rounded md:aspect-square md:object-cover shadow"
                    />
                </div>
                <div className="md:w-6/12 lg:w-1/2 md:flex md:justify-center md:flex-col">
                    <h3 className="h3">What to Expect</h3>
                    <p className="para">
                        Whatever your background, beliefs or experience of
                        Church, everyone is welcome at Freedom Church
                        Cheltenham. We are an inclusive, diverse family and
                        community that loves people, is passionate about people
                        experiencing a life changing relationship with Jesus and
                        wants to see people thrive.
                    </p>
                    <p className="para">
                        Our host team will be the first to greet you at the
                        door, showing you where to go and answering any
                        questions you might have.
                    </p>
                </div>
            </div>
            <div className="container mt-10 mb-16">
                <div className="md:w-8/12 lg:w-1/2 mx-auto">
                    <h3 className="h3">Our Event</h3>
                    <p className="para">
                        Our Church event is vibrant and passionate including
                        worship, weekly notices, celebrations and a live or
                        video message, where the content is relevant and
                        transformational. We are a Church that believes the
                        Bible to be true and have personally seen the gospel
                        impact lives when embraced.
                    </p>
                    <p className="para">
                        After the event, our café time, offers the chance to
                        grab a coffee, tea or piece of cake and an opportunity
                        to get to know us. Community is a core aspect to who we
                        are and something we cherish.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Visit
