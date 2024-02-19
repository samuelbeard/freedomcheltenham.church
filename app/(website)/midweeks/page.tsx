export const metadata = {
    title: "Midweek Events | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <>
            <div className="flex justify-around bg-brand-red py-12 text-4xl font-extrabold text-white md:text-[5rem]">
                <h1>MIDWEEKS</h1>
            </div>
            <section className="bg-brand-dark-gray">
                <div className="container py-10">
                    <h1 className="h1 my-0 text-white">STREAMS</h1>
                    <p className="text-white lg:w-1/2">
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
                        <span className="h3 rounded bg-brand-red px-3 text-white">
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
                        <span className="h3 rounded bg-brand-red px-3 text-white">
                            Wednesdays
                        </span>
                    </h2>
                    <p className="para">
                        We are made in the image of the ultimate creator, and in
                        our Saltwinds stream we&apos;ll be looking at the ways
                        that we can activate the vision God has given us for new
                        levels of expression and creativity in our church. We
                        will spend the year learning about God&apos;s desire for
                        our creative skills to be used for him, and finding ways
                        to serve our Sunday events and social media impact using
                        those skills. So whether you are a poet, a video editor,
                        a TikTok genius or a song-writing novice, why not jump
                        into this stream of people committed to using what is in
                        their hands, and reaching people through Godly
                        creativity.
                    </p>
                </div>
            </div>
            <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/she-banner.png')] bg-right bg-no-repeat lg:bg-contain">
                <div className="container py-10">
                    <h1 className="h1 my-0 text-white">SHE</h1>
                    <p className="text-white lg:w-1/2">
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
            <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/barbarians-banner.png')] bg-right bg-no-repeat lg:bg-contain">
                <div className="container py-10">
                    <h1 className="h1 my-0 text-white">BARBARIANS</h1>
                    <p className="text-white lg:w-1/2">
                        Sons | Brothers | Warriors
                    </p>
                </div>
            </section>
            {/* <section className="bg-black">
                <img
                    className="xmx-auto"
                    src="/img/elements/barbarians-banner.png"
                    alt=""
                />
            </section> */}
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
        </>
    )
}
