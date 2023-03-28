import { NextPage } from "next"
import Image from "next/image"
import Layout from "../components/Layout"

const Midweeks: NextPage = () => {
    return (
        <Layout title="Midweeks">
            <div className="flex bg-brand-red text-white text-4xl md:text-[5rem] justify-around font-bold py-12">
                <h1>MIDWEEKS</h1>
            </div>
            <section className="bg-brand-dark-gray">
                <div className="container py-10">
                    <h1 className="h1 text-white my-0">STREAMS</h1>
                    <p className="lg:w-1/2 text-white">
                        Streams are our Mid-Week groups that happen every other
                        week across Cheltenham, either on a Wednesday or
                        Thursday night. Depending on your preference, there are
                        currently three Streams to choose from:
                    </p>
                </div>
            </section>
            <div className="container mt-12 mb-16">
                <div className="md:w-8/12 lg:w-1/2">
                    <h2 className="h1">
                        Core Truths{" "}
                        <span className="h3 bg-brand-red text-white rounded px-3">
                            Wednesdays
                        </span>
                    </h2>
                    <p className="para">Answering questions like:</p>
                    <ul className="para">
                        <li>Who is Jesus?</li>
                        <li>How should I be living?</li>
                        <li>What do I need to know?</li>
                        <li>Who is Freedom Church?</li>
                        <li>What is my purpose?</li>
                    </ul>

                    <h2 className="h1 mt-10">
                        Saltwinds{" "}
                        <span className="h3 bg-brand-red text-white rounded px-3">
                            Wednesdays
                        </span>
                    </h2>
                    <p className="para">
                        We are made in the image of the ultimate creator, and in
                        our Saltwinds stream we'll be looking at the ways that
                        we can activate the vision God has given us for new
                        levels of expression and creativity in our church. We
                        will spend the year learning about God's desire for our
                        creative skills to be used for him, and finding ways to
                        serve our Sunday events and social media impact using
                        those skills. So whether you are a poet, a video editor,
                        a TikTok genius or a song-writing novice, why not jump
                        into this stream of people committed to using what is in
                        their hands, and reaching people through Godly
                        creativity.
                    </p>

                    <h2 className="h1 mt-10">
                        Marriage and Parenting{" "}
                        <span className="h3 bg-brand-red text-white rounded px-3">
                            Thursdays
                        </span>
                    </h2>
                    <p className="para">
                        We believe that healthy relationships and families need
                        to be invested in! This stream is an opportunity to do
                        just that, growing as a spouse and a parent, and
                        learning how we can honour God and others through our
                        relationships.
                    </p>
                    <p className="para">
                        In the first half of the year we will be looking at
                        God's plan for marriage. It doesn't matter how long
                        you've been married, there is always more to learn, and
                        this stream is for those who want to invest in what they
                        have.
                    </p>
                    <p className="para">
                        For the second part of the year the focus will be on
                        raising our children - whether you have newborns or
                        teenagers this stream will be packed full of wisdom and
                        truth to equip you as you parent!
                    </p>
                    <p className="para">
                        This stream will have a midway shuffle option, so you
                        are welcome to opt in for the half that is relevant for
                        you, and spend the other half of your year in one of our
                        other great streams.
                    </p>
                </div>
            </div>
            <section className="bg-brand-dark-gray">
                <div className="container py-10">
                    <h1 className="h1 text-white my-0">SHE</h1>
                    <p className="lg:w-1/2 text-white">
                        Sisters | Daughters | Warriors
                    </p>
                </div>
            </section>
            <div className="container mt-12 mb-16">
                <div className="md:w-8/12 lg:w-1/2">
                    <p className="para">
                        SHE is our women&apos;s ministry. Meeting once a month,
                        primarily the last Wednesday of the month, the women in
                        our campus gather together for SHE. The time together
                        varies, from worship and live or video message, to
                        special events and hospitality nights. It offers an
                        opportunity for connection, friendship, growth and
                        empowerment, discovering purpose and learning to thrive
                        as women as God designed it to be. Just like our Sunday
                        events, SHE also follows in series, honing in on a
                        specific topic for the year.
                    </p>
                </div>
            </div>
            <section className="bg-brand-dark-gray">
                <div className="container py-10">
                    <h1 className="h1 text-white my-0">BARBARIANS</h1>
                    <p className="lg:w-1/2 text-white">
                        Sons | Brothers | Warriors
                    </p>
                </div>
            </section>
            <div className="container mt-12 mb-16">
                <div className="md:w-8/12 lg:w-1/2">
                    <p className="para">
                        Barbarians is our men&apos;s ministry. Gathering once a
                        month, primarily the second Sunday of the month, in the
                        evening. Barbarians is a safe space that encourages men
                        to grow, lead and develop into all that God has called
                        them to be. From what it means to be a son and brother,
                        to being a father and friend. The event includes
                        passionate worship and a live or video message following
                        chosen theme.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Midweeks
