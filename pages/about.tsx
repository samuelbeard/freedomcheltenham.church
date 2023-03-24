import { NextPage } from "next"
import Layout from "../components/Layout"
import Image from "next/image"

const About: NextPage = () => {
    return (
        <Layout title="About">
            <div className="section">
                <div className="container mt-10">
                    <h1 className="h1">Welcome!</h1>
                    <p className="para text-lg lg:w-8/12">
                        Everyone is welcome at Freedom Church Cheltenham. We are
                        an inclusive, diverse family and community that loves
                        people. We are passionate about seeing people thrive and
                        find their purpose through a personal, life transforming
                        relationship with Jesus. Young or mature, believer or
                        undecided, there&apos;s something for everyone.
                    </p>
                    <p className="para text-lg lg:w-8/12">
                        We believe that the gospel is alive, relevant, exciting
                        and life giving. That as followers of Jesus we are
                        called to a life of growth, adventure and fruitfulness
                        &ndash; rooted in loving God and loving others. We
                        believe that community is intrinsic to who we are and
                        that we are not called to do life alone. We choose to
                        pursue &quot;Live Full, Die Empty&quot; lives &ndash;
                        activating audacious faith, trusting in who God says he
                        is, honouring those around us, expressing gratitude, and
                        mirroring Jesus to the world around us.
                    </p>
                    <p className="para text-lg lg:w-8/12">
                        We are Freedom Church Cheltenham.
                    </p>
                    <p className="para text-lg lg:w-8/12 bg-brand-red rounded text-white text-center py-2">
                        EVERY SUNDAY | 11AM | DANCEWORKS STUDIO
                    </p>
                </div>
            </div>
            <div className="section mt-10">
                <div className="container flex gap-10">
                    <div className="w-1/2">
                        <Image
                            src="/img/fd.jpg"
                            width={400}
                            height={250}
                            alt=""
                            className="w-full"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center">
                        <h1 className="h1 mt-0">One Church, Many Locations</h1>
                        {/* TODO: Put an image here */}
                        <p className="para text-lg">
                            Freedom Church Cheltenham is one of many locations
                            within the Freedom Church movement. Freedom Church
                            is a non-denominational Church that teaches the
                            truth of the Bible and shares the power of the
                            gospel in relevant, accessible forms. Our vision is
                            Connecting Anyone Anywhere, to a Life Changing
                            Relationship with Jesus. Freedom Church is led by
                            our Senior Pastors, Gary and Heather Snowzell and
                            our Directional Leadership Team, with each Campus or
                            Firestarter being led by a Campus or Location
                            leader.
                        </p>
                    </div>
                    {/* TODO Buttons  - Find out more about Freedom Church Here (ADD BUTTON) 

(Link Freedom Church to: www.freedomchurch.cc 
Link Many Locations to: www.freedomchurch.cc/locations 
Link Senior Pastors to: www.freedomchurch.cc/leaders) 
*/}
                </div>
            </div>
            <section className="text-gray-600 body-font mt-24">
                <div className="container lg:max-w-7xl mx-auto flex px-5 xpy-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
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
                        />
                        <TeamMember
                            name="Lorah"
                            title="Kids Pastor"
                            bio="As Kids Pastor for Freedom Church Cheltenham, Lorah looks after and oversees  our amazing Kids team. The Kids team aim to ensure that the kids access relevant and engaging content - based on their level and allowing them to connect to a life changing relationship with Jesus."
                            fact="I used to play 'Sunday School' with my little sister as a child and I would 'teach' from my kids devotional book!"
                        />
                        <TeamMember
                            name="John and Abi"
                            title="Zeal Pastors"
                            bio="Zeal is for the young people in our church, offering an opportunity to hang out together, talk about life, church and Jesus. Plus a cheeky bit of pizza is normally thrown into the mix too!"
                            fact="I can do an upside-down handstand    I had my hen do at Diggerland – it was amazing!"
                        />
                        <TeamMember
                            name="Jen"
                            title="Worship Coordinator"
                            bio="Jen oversees Worship and our Worship team in Freedom Church Cheltenham. This includes organising the team, raising up new musicians and worship leaders, bringing vision, ideas and creativity, and coordinating mid-week practices and Sunday events; whilst working together with our Pastors to ensure the flow of ministry and music in our events. Being part of a global church also offers the exciting opportunity to bring in new songs and sounds from across the movement."
                            fact="My parents were in a country music band"
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
}: {
    name: string
    title: string
    bio: string
    fact: string
}) => {
    return (
        <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://dummyimage.com/200x200"
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
