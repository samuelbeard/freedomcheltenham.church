import { NextPage } from "next"
import Image from "next/image"
import Layout from "../components/Layout"

const Kids: NextPage = () => {
    return (
        <Layout title="Kids">
            <div className="w-10/12 mx-auto mb-12">
                <h1 className="h1">KIDS</h1>
                <p className="para w-1/2">
                    Freedom kids is a childrens ministry designer to be safe,
                    age apropriate, fin and ngaging! We love teasching the next
                    generation about Jesus.
                </p>
                <h3 className="h3">Relevant content for all age groups</h3>
                <p className="para w-1/2">
                    We go through teaching in series bringing a topic to life
                    over several weeks. This is also taiolored to each age
                    group, making sure each session is relevant, engaging and
                    fun.
                </p>
                <p>How to sign up</p>
                <p>When kids stuff happens</p>
            </div>
            <div className="bg-[#e62d33] py-12">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center">
                        <div className="w-32 mr-12">
                            <Image
                                width="500"
                                height="500"
                                src="/img/kids/cubs.png"
                                alt="cubs"
                            />
                        </div>
                        <h2 className="text-white text-5xl font-bold">
                            2-4 Years
                        </h2>
                    </div>
                    <div className="flex gap-24 mt-6">
                        <div className="text-white">
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
                        Lorah to create an image with two photos over each other
                        diagonally instead of this 1.
                    </div>
                </div>
            </div>
            <div className="bg-[#edc019] py-12">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center">
                        <div className="w-32 mr-12">
                            <Image
                                width="500"
                                height="500"
                                src="/img/kids/adventurers.png"
                                alt="cubs"
                            />
                        </div>
                        <h2 className="text-5xl font-bold">4-7 Years</h2>
                    </div>
                </div>
                <div className="w-10/12 mx-auto">
                    <div className="flex gap-6 mt-6">
                        <div className="w-1/3">
                            <img
                                className="rounded shadow-lg mb-3"
                                src="/img/kids/adv-1.jpeg"
                                alt=""
                            />
                        </div>
                        <div className="w-1/3">
                            <p className="para text-brand-dark-gray">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non maiores obcaecati ipsa
                                exercitationem quam ipsam unde provident
                                adipisci reprehenderit eligendi sequi, laborum
                                magni voluptates iure libero quo ratione
                                reiciendis quis?
                            </p>
                            <p className="h4">What about this?</p>
                            <p className="para text-brand-dark-gray">
                                This that thtat sid
                            </p>
                            <p className="h4">What about this?</p>
                            <p className="para text-brand-dark-gray">
                                This that thtat sid
                            </p>
                        </div>
                        <div className="w-1/3">
                            <img
                                className="rounded shadow-lg"
                                src="/img/kids/adv-2.jpeg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#00b1fd] py-12">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center">
                        <div className="w-32 mr-12">
                            <Image
                                width="500"
                                height="500"
                                src="/img/kids/the-wave.png"
                                alt="cubs"
                            />
                        </div>
                        <h2 className="text-white text-5xl font-bold">
                            7-11 Years
                        </h2>
                    </div>
                    <div className="flex gap-24 mt-6">
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
            </div>
            <div className="py-10">
                <p>DBS and other safeguarding info</p>
            </div>
        </Layout>
    )
}

export default Kids
