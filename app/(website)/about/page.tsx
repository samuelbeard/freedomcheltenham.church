import Image from "next/image"

export const metadata = {
    title: "About | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <>
            <div className="section">
                <div className="container mt-10">
                    <h1 className="h1 text-brand-red mx-auto text-6xl lg:w-8/12">
                        Welcome!
                    </h1>
                    <p className="para mx-auto text-lg lg:w-8/12">
                        Welcome to Freedom Church Cheltenham! We embrace all,
                        forming a diverse, loving family. Our passion is to help
                        people thrive through a personal, transformative
                        relationship with Jesus. Whether young or old, believer
                        or unsure, there&apos;s something for everyone.
                    </p>
                    <p className="para mx-auto text-lg lg:w-8/12">
                        We believe the gospel is alive and relevant, bringing
                        excitement and abundant life. As followers of Jesus,
                        we&apos;re called to grow, explore, and bear fruit by
                        loving God and others. Community is vital to us;
                        we&apos;re not meant to walk alone. Our pursuit is to
                        live fully, leaving a lasting impact by having audacious
                        faith, trusting God&apos;s character, honoring others,
                        expressing gratitude, and reflecting Jesus to the world.
                    </p>
                    <p className="para mx-auto text-lg lg:w-8/12">
                        We are Freedom Church Cheltenham.
                    </p>
                    <p className="para bg-brand-red mx-auto rounded py-2 text-center text-lg text-white lg:w-8/12">
                        EVERY&nbsp;SUNDAY | 11AM | ST EDWARD&apos;S SCHOOL
                    </p>
                </div>
            </div>
            <div className="section mt-10 bg-[url('/img/photos/cave-2023.jpg')] bg-cover">
                <div className="w-full bg-black bg-opacity-50 py-10 lg:py-24">
                    <div className="container gap-10 md:flex">
                        <div className="flex items-center md:w-1/2">
                            <h1 className="h1 mt-0 text-6xl text-white">
                                One
                                <br />
                                Church,
                                <br />
                                Many
                                <br />
                                Locations
                            </h1>
                        </div>
                        <div className="mt-8 flex flex-col justify-center md:mt-0 md:w-1/2">
                            <p className="para text-lg text-white">
                                Freedom Church Cheltenham is one of many
                                locations within the Freedom Church movement.
                                Freedom Church is a non-denominational Church
                                that teaches the truth of the Bible and shares
                                the power of the gospel in relevant, accessible
                                forms. Our vision is Connecting Anyone Anywhere,
                                to a Life Changing Relationship with Jesus.
                                Freedom Church is led by our Senior Pastors,
                                Gary and Heather Snowzell and our Directional
                                Leadership Team, with each Campus or Firestarter
                                being led by a Campus or Location leader.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="body-font mt-5 text-gray-600 md:mt-24">
                <div className="xpy-24 container mx-auto flex flex-col items-center px-5 md:flex-row lg:max-w-7xl">
                    <div className="xmb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
                        <Image
                            className="rounded object-cover object-center"
                            alt=""
                            src="/img/photos/pastors.jpg"
                            width={1035}
                            height={1511}
                        />
                    </div>
                    <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
                        <h3 className="h3 mb-0 font-thin">Our Pastors</h3>
                        <h2 className="h2 mt-0">Andy &amp; Emily</h2>
                        <p className="para text-lg">
                            Meet Andy and Em, our Campus Pastors! Andy,
                            originally from Hull and Em, originally from
                            Herefordshire, joined Freedom Church in 2011 and
                            consequently relocated from the North back down
                            South to Hereford.
                        </p>
                        <p className="para text-lg">
                            They moved to Cheltenham in 2017 to plant church,
                            living here with four children. Andy a teacher by
                            trade is our resident expert in all things Peter Kay
                            and Em, a former teacher, is an avid people person
                            and knows how to make a mean Pavlova. Also known as
                            the hospitality King and Queen, Andy and Em are
                            passionate about building the local church, seeing
                            it flourish as a diverse home for anyone, anywhere –
                            where life change, friendship, faith and community
                            is found. Andy and Em are supported by a number of
                            leaders within the Campus who oversee different
                            areas of the Church, from Worship and Volunteering,
                            to Zeal and Kids.
                        </p>
                    </div>
                </div>
            </section>
            <section className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-24">
                    <div className="-m-4 flex flex-wrap">
                        <TeamMember
                            name="Charlie"
                            title="Volunteer Coordinator"
                            bio="As VC, Charlie oversees all our
                                        volunteers within our Campus. From
                                        organising rotas and raising the next,
                                        to stirring passion and praying for them
                                        &ndash; this enables our volunteers to
                                        bring their first and best each Sunday
                                        and throughout the week, making church
                                        happen."
                            fact="I secretly LOVE country music,
                                        genuinely cannot get enough of it"
                            image="charlie-img.jpg"
                        />
                        <TeamMember
                            name="Lorah"
                            title="Kids Pastor"
                            bio="As Kids Pastor for Freedom Church Cheltenham, Lorah looks after and oversees  our amazing Kids team. The Kids team aim to ensure that the kids access relevant and engaging content - based on their level and allowing them to connect to a life changing relationship with Jesus."
                            fact="I used to play 'Sunday School' with my little sister as a child and I would 'teach' from my kids devotional book!"
                            image="lorah.jpg"
                        />
                        <TeamMember
                            name="John and Abi"
                            title="Zeal Pastors"
                            bio="Zeal is for the young people in our church, offering an opportunity to hang out together, talk about life, church and Jesus. Plus a cheeky bit of pizza is normally thrown into the mix too!"
                            fact="I can do an upside-down handstand    I had my hen do at Diggerland – it was amazing!"
                            image="john-and-abi-img.jpg"
                        />
                        <TeamMember
                            name="Jen"
                            title="Worship Coordinator"
                            bio="Jen oversees Worship and our Worship team in Freedom Church Cheltenham. This includes organising the team, raising up new musicians and worship leaders, bringing vision, ideas and creativity, and coordinating mid-week practices and Sunday events; whilst working together with our Pastors to ensure the flow of ministry and music in our events. Being part of a global church also offers the exciting opportunity to bring in new songs and sounds from across the movement."
                            fact="My parents were in a country music band"
                            image="jen-img.jpg"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

const TeamMember = ({
    name,
    title,
    bio,
    fact,
    image,
}: {
    name: string
    title: string
    bio: string
    fact: string
    image: string
}) => {
    return (
        <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <Image
                    alt="team"
                    className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={`/img/photos/${image}`}
                    width={192}
                    height={192}
                />
                <div className="flex-grow sm:pl-8">
                    <h4 className="h4 mb-0">{name}</h4>
                    <h5 className="h5 mb-3 text-gray-500">{title}</h5>
                    <p
                        className="mb-4 whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: bio }}
                    />
                </div>
            </div>
        </div>
    )
}
