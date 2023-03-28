import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import EventBanner from "../components/EventBanner"
import Footer from "../components/Footer"
import Link from "next/link"

const Home: NextPage = () => {
    return (
        <div className="w-screen h-screen">
            <div className="h-full flex justify-between flex-col bg-[url('/hero.jpg')] bg-cover">
                <Head>
                    <title>Freedom Church Cheltenham</title>
                </Head>
                {/* <Header /> */}
                <Header />
                <div className="flex-grow flex items-center">
                    <section className="section">
                        <div className="w-5/6 lg:w-full max-w-7xl grid grid-cols-3 gap-0">
                            <div className="w-36 md:w-96 mx-auto col-span-3 md:col-span-1 flex justify-center items-center">
                                <Image
                                    src="/img/logo/logo-white.svg"
                                    alt="Freedom Church"
                                    height={400}
                                    width={400}
                                />
                            </div>
                            <div className="mx-auto col-span-3 md:col-span-2 flex flex-col justify-center text-center md:text-left">
                                <h2 className="h2x font-bold text-xl md:text-2xl lg:text-4xl m-0 text-white">
                                    Welcome to
                                </h2>
                                <h1 className="h1 text-2xl md:text-4xl lg:text-7xl m-0 uppercase text-white">
                                    Freedom&nbsp;Church
                                    <br />
                                    <span className="text-brand-red">
                                        Cheltenham
                                    </span>
                                </h1>
                                <h3 className="italic text-white opacity-60 mt-6 text-xl">
                                    Connecting Anyone Anywhere to a Life
                                    <br />
                                    Changing Relationship with Jesus
                                </h3>
                            </div>
                        </div>
                    </section>
                </div>
                <EventBanner />
            </div>
            <div className="section">
                <div className="container py-12">
                    <div className="grid grid-cols-3 gap-6">
                        <Link
                            href="/visit"
                            className="w-full group relative block bg-black rounded shadow-lg hover:shadow transition-all overflow-hidden"
                        >
                            <img
                                alt=""
                                src="/img/photos/outside.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-0 transition-opacity xgroup-hover:opacity-50 rounded-lf"
                            />
                            <img
                                alt=""
                                src="/img/photos/outside-hover.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-75 rounded-lf filter"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    Visit Us
                                </p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Find out how to get here and what to
                                            expect when you walk in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/about"
                            className="w-full group relative block bg-black rounded shadow-lg hover:shadow transition-all overflow-hidden"
                        >
                            <img
                                alt=""
                                src="/img/photos/outside.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-0 transition-opacity xgroup-hover:opacity-50 rounded-lf"
                            />
                            <img
                                alt=""
                                src="/img/photos/outside-hover.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-75 rounded-lf"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    About Us
                                </p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Find out about who we are and what
                                            we believe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href="/midweeks"
                            className="w-full group relative block bg-black rounded shadow-lg hover:shadow transition-all overflow-hidden"
                        >
                            <img
                                alt=""
                                src="/img/photos/outside.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-0 transition-opacity xgroup-hover:opacity-50 rounded-lf"
                            />
                            <img
                                alt=""
                                src="/img/photos/outside-hover.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-75 rounded-lf"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full">
                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    Midweeks
                                </p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Get involved during the week
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="section">
                <div className="container py-12">instagram stuff</div>
            </div> */}
            <Footer />
        </div>
    )
}

export default Home
