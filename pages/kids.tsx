import { NextPage } from "next"
import Image from "next/image"
import Layout from "../components/Layout"

const Kids: NextPage = () => {
    return (
        <Layout title="Kids">
            <div className="container mt-12 mb-16">
                <h1 className="h1">KIDS</h1>
                <p className="para md:w-8/12 lg:w-1/2">
                    Freedom kids is a childrens ministry designed to be safe,
                    age appropriate, fun and engaging! We love teaching the next
                    generation about Jesus.
                </p>
                <h3 className="h3">Relevant content for all age groups</h3>
                <p className="para md:w-8/12 lg:w-1/2">
                    We go through teaching in series bringing a topic to life
                    over several weeks. This is also tailored to each age group,
                    making sure each session is relevant, engaging and fun.
                </p>
                <p>How to sign up</p>
                <p>When kids stuff happens</p>
            </div>
            <section className="bg-cubs-red py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/cubs.png"
                            alt="cubs"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-white text-5xl font-bold">
                            2-4 Years
                        </h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="md:flex gap-24 mt-6">
                        <div className="text-white md:w-1/2">
                            <p className="para text-white">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non maiores obcaecati ipsa
                                exercitationem quam ipsam unde provident
                                adipisci reprehenderit eligendi sequi, laborum
                                magni voluptates iure libero quo ratione
                                reiciendis quis?
                            </p>
                            <p className="h4 text-white">What about this?</p>
                            <p className="para text-white">
                                This that thtat sid
                            </p>
                            <p className="h4 text-white">What about this?</p>
                            <p className="para text-white">
                                This that thtat sid
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img
                                className="rounded shadow-lg w-96"
                                src="/img/kids/cubs-1.JPG"
                                alt=""
                            />
                            Lorah to create an image with two photos over each
                            other diagonally instead of this 1.
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-adventurers-yellow py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/adventurers.png"
                            alt="adventurers"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-5xl font-bold">4-7 Years</h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="lg:flex gap-6 mt-6">
                        <div className="lg:w-1/2 2xl:w-1/3">
                            <img
                                className="rounded shadow-lg mb-3"
                                src="/img/kids/adv-1.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="lg:w-1/2 2xl:w-1/3">
                            <p className="para text-brand-dark-gray">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non maiores obcaecati ipsa
                                exercitationem quam ipsam unde provident
                                adipisci reprehenderit eligendi sequi, laborum
                                magni voluptates iure libero quo ratione
                                reiciendis quis?
                            </p>
                        </div>
                        <div className="lg:hidden 2xl:inline 2xl:w-1/3">
                            <img
                                className="rounded shadow-lg"
                                src="/img/kids/adv-2.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-wave-blue py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/the-wave.png"
                            alt="wave"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-white text-5xl font-bold">
                            7-11 Years
                        </h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="md:flex gap-5 lg:gap-24 mt-6">
                        <div>
                            <p className="para text-white">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non maiores obcaecati ipsa
                                exercitationem quam ipsam unde provident
                                adipisci reprehenderit eligendi sequi, laborum
                                magni voluptates iure libero quo ratione
                                reiciendis quis?
                            </p>
                            <p className="h4 text-white">What about this?</p>
                            <p className="para text-white">
                                This that thtat sid
                            </p>
                            <p className="h4 text-white">What about this?</p>
                            <p className="para text-white">
                                This that thtat sid
                            </p>
                        </div>
                        <img
                            className="rounded shadow-lg w-96"
                            src="/img/kids/cubs-1.JPG"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <div className="container py-10">
                <p>DBS and other safeguarding info</p>
            </div>
        </Layout>
    )
}

export default Kids
