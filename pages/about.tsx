import { NextPage } from "next"
import Layout from "../components/Layout"
import Image from "next/image"

const About: NextPage = () => {
    return (
        <Layout title="About">
            <section className="section mt-5">
                <h1 className="h1 text-6xl">Welcome!</h1>
            </section>
            <div className="section">
                <div className="container mt-10">
                    <p className="para text-lg lg:w-8/12 mx-auto">
                        Welcome to Freedom Church Cheltenham! We embrace all,
                        forming a diverse, loving family. Our passion is to help
                        people thrive through a personal, transformative
                        relationship with Jesus. Whether young or old, believer
                        or unsure, there&apos;s something for everyone.
                    </p>
                    <p className="para text-lg lg:w-8/12 mx-auto">
                        We believe the gospel is alive and relevant, bringing
                        excitement and abundant life. As followers of Jesus,
                        we&apos;re called to grow, explore, and bear fruit by
                        loving God and others. Community is vital to us;
                        we&apos;re not meant to walk alone. Our pursuit is to
                        live fully, leaving a lasting impact by having audacious
                        faith, trusting God&apos;s character, honoring others,
                        expressing gratitude, and reflecting Jesus to the world.
                    </p>
                    <p className="para text-lg lg:w-8/12 mx-auto">
                        We are Freedom Church Cheltenham.
                    </p>
                    <p className="para text-lg lg:w-8/12 mx-auto bg-brand-red rounded text-white text-center py-2">
                        EVERY&nbsp;SUNDAY | 11AM | DANCEWORKS&nbsp;STUDIO
                    </p>
                </div>
            </div>
            <div className="section mt-10 bg-[url('/img/photos/cave-2023.jpg')] bg-cover">
                <div className="bg-black py-10 lg:py-24 bg-opacity-50 w-full">
                    <div className="container md:flex gap-10">
                        <div className="md:w-1/2 flex items-center">
                            <h1 className="h1 mt-0 text-white text-6xl">
                                One
                                <br />
                                Church,
                                <br />
                                Many
                                <br />
                                Locations
                            </h1>
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
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
            <section className="text-gray-600 body-font mt-5 md:mt-24">
                <div className="container lg:max-w-7xl mx-auto flex px-5 xpy-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 xmb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt=""
                            src="/img/photos/pastors.jpg"
                            width={1035}
                            height={1511}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h3 className="h3 font-thin mb-0">Our Pastors</h3>
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
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
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
        </Layout>
    )
}

export default About

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
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={`/img/photos/${image}`}
                    width={192}
                    height={192}
                />
                <div className="flex-grow sm:pl-8">
                    <h4 className="h4 mb-0">{name}</h4>
                    <h5 className="h5 text-gray-500 mb-3">{title}</h5>
                    <p
                        className="mb-4 whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: bio }}
                    />
                    {/* <p>
                        <span className="font-bold">
                            Fun Fact about {name}:
                        </span>{" "}
                        “{fact}”
                    </p> */}
                </div>
            </div>
        </div>
    )
}
