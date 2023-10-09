import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import EventBanner from "../components/EventBanner"
import Footer from "../components/Footer"
import Link from "next/link"
import InstagramFeed from "../components/InstagramFeed"
import Carousel from "../components/Carousel"

const Home: NextPage = () => {
    return (
        <div className="h-screen w-screen">
            <div className="absolute top-0 left-0 z-30 w-screen">
                <Header background="black" />
            </div>
            <div className="flex h-full flex-col justify-between bg-black">
                <div className="absolute top-0 bottom-0 h-full w-full overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute z-10 h-auto min-h-full w-auto min-w-full object-cover"
                    >
                        <source src="/video/bg-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <Head>
                    <title>Freedom Church Cheltenham</title>
                </Head>
                <div className="z-10 flex flex-grow items-center bg-black bg-opacity-60">
                    <section className="section">
                        <div className="grid w-5/6 max-w-7xl grid-cols-3 gap-0">
                            {/* <div className="w-36 md:w-96 mx-auto col-span-3 md:col-span-1 flex justify-center items-center">
                                <Image
                                    src="/img/logo/logo-white.svg"
                                    alt="Freedom Church"
                                    height={400}
                                    width={400}
                                />
                            </div> */}
                            <div className="col-span-3 mx-auto flex flex-col justify-center text-center md:col-span-2 md:text-left">
                                <h2 className="m-0 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                                    Welcome to
                                </h2>
                                <h1 className="h1 m-0 text-2xl uppercase text-white md:text-4xl lg:text-8xl">
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

            <div className="section z-30 bg-black bg-[url('/img/photos/worshiping.jpg')] bg-cover bg-center bg-no-repeat text-white">
                <div className="w-full bg-black bg-opacity-80 py-24 text-center">
                    <h3 className="text-2xl font-extrabold uppercase md:text-6xl">
                        Connecting
                        <br />
                        <span className="text-3xl text-brand-red md:text-7xl">
                            Anyone&nbsp;Anywhere
                        </span>
                        <br />
                        <span className="">to a</span>{" "}
                        <span className="italic">Life Changing</span>
                        <br />
                        Relationship with
                        <br />
                        <span className="text-5xl drop-shadow-[0_0_50px_rgba(255,0,0,1)] md:text-9xl">
                            Jesus
                        </span>
                    </h3>
                </div>
            </div>

            <div className="section xbg-pink-500 z-30 bg-black bg-none py-10 text-white">
                <Carousel
                    direction="right"
                    speed={70}
                    carouselNumber={1}
                    totalImages={10}
                />
            </div>

            <div className="section xbg-pink-500 z-30 bg-black bg-none pb-10 text-white">
                <Carousel
                    direction="left"
                    speed={70}
                    carouselNumber={2}
                    totalImages={5}
                />
            </div>

            <div className="section bg-black pt-24">
                <div className="container lg:w-2/3">
                    <p className="text-white">
                        Welcome to Freedom Church Cheltenham! We&apos;re a
                        diverse and loving family, passionate about helping
                        people thrive through a transformative relationship with
                        Jesus. We love meeting new people from all ages and
                        backgrounds. We believe in an ageless message, but seek
                        to make church modern and relevant in Cheltenham. As
                        followers of Jesus, we learn, explore and grow in
                        fruitfulness within community. Our pursuit is to live
                        fully, leaving a lasting impact by having; audacious
                        faith, trusting God, honoring others, expressing
                        gratitude, and reflecting Jesus to the&nbsp;world.
                    </p>
                </div>
            </div>
            <div className="section z-30 bg-black py-10">
                <div className="container z-30 py-12">
                    <div className="grid grid-cols-3 gap-6">
                        <Link
                            href="/visit"
                            className="group relative col-span-3 block w-full overflow-hidden rounded bg-black shadow-lg transition-all hover:shadow md:col-span-1"
                        >
                            <Image
                                alt=""
                                src="/img/photos/outside.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-0 transition-opacity xgroup-hover:opacity-50 rounded-lf"
                                // width={304}
                                // height={392}
                                fill
                            />
                            <Image
                                alt=""
                                src="/img/photos/outside-hover.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity group-hover:opacity-75 rounded-lf filter"
                                fill
                            />

                            <div className="relative flex h-full flex-col justify-between p-4 sm:p-6 lg:p-8">
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
                            className="group relative col-span-3 block w-full overflow-hidden rounded bg-black shadow-lg transition-all hover:shadow md:col-span-1"
                        >
                            <Image
                                alt=""
                                src="/img/photos/praying.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-50 transition-opacity rounded-lf"
                                fill
                            />

                            <div className="relative flex h-full flex-col justify-between p-4 sm:p-6 lg:p-8">
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
                            className="group relative col-span-3 block w-full overflow-hidden rounded bg-black shadow-lg transition-all hover:shadow md:col-span-1"
                        >
                            <Image
                                alt=""
                                src="/img/photos/guys.jpg"
                                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-50 transition-opacity rounded-lf"
                                fill
                            />

                            <div className="relative flex h-full flex-col justify-between p-4 sm:p-6 lg:p-8">
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
            {/* <section className="section bg-black py-10">
                <div className="container">
                    <InstagramFeed />
                </div>
            </section> */}
            <Footer />
        </div>
    )
}

export default Home
