import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import EventBanner from "../components/EventBanner"
import Footer from "../components/Footer"

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
                        <div className="w-5/6 lg:w-full max-w-6xl grid grid-cols-3 gap-6">
                            <div className="w-36 md:w-64 mx-auto col-span-3 md:col-span-1 flex justify-center items-center">
                                <Image
                                    src="/img/logo/logo-white.svg"
                                    alt="Freedom Church"
                                    height={300}
                                    width={300}
                                    // className="h-36 w-36 md:h-64 md:w-64 ml-32 rounded-full"
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
                            </div>
                        </div>
                    </section>
                </div>
                <EventBanner />
            </div>
            <div className="section">
                <div className="container py-12">
                    <div className="grid grid-cols-3 gap-6">
                        <a
                            href="#"
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
                                    Visit Us
                                </p>

                                <div className=" xsm:mt-48 xlg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Find out how to get here and what to
                                            expect when you walk in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="Developer"
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    Tony Wayne
                                </p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam
                                            quidem voluptates doloremque
                                            reiciendis nostrum harum.
                                            Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="Developer"
                                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                    Developer
                                </p>

                                <p className="text-xl font-bold text-white sm:text-2xl">
                                    Tony Wayne
                                </p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm text-white">
                                            Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Omnis
                                            perferendis hic asperiores quibusdam
                                            quidem voluptates doloremque
                                            reiciendis nostrum harum.
                                            Repudiandae?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
