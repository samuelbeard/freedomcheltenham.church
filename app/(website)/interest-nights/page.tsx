import EventBanner from "../../../components/EventBanner"
import Image from "next/image"

export const metadata = {
    title: "Interest Nights | Freedom Church Cheltenham",
    description: "",
}
export default function Page() {
    return (
        <div className="min-h-screenx flex flex-col justify-center py-32">
            <div className="container mx-auto">
                <section className="text-center">
                    <h1 className="h1 text-6xl">Interest Nights</h1>
                </section>
                <EventBanner
                    date="17th July | 21st August"
                    location="All Bar One | Cheltenham"
                    time="7:30 - 8:30PM"
                    address="All Bar One<br />18 Montpellier Walk<br />Cheltenham<br />GL50 1SD"
                    mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157058.2636693386!2d-2.3158231461195986!3d52.04266873414024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711ba22617c5c7%3A0x53b2c51777374869!2sAll%20Bar%20One%20Cheltenham!5e0!3m2!1sen!2suk!4v1718798675149!5m2!1sen!2suk"
                />
                <section className="lg:flex items-center lg:text-right gap-12 mt-12">
                    <h2 className="lg:w-1/2 h2 text-4xl">
                        Have you found
                        <br />
                        <span className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            YOUR&nbsp;
                            <span className="text-brand-red">PLACE</span>
                            <br />
                            YOUR&nbsp;
                            <span className="text-brand-red">PEOPLE</span>
                            <br />
                            YOUR&nbsp;
                            <span className="text-brand-red">PURPOSE</span>
                        </span>
                        <br />
                        in Cheltenham?
                    </h2>
                    <Image
                        src="/img/interest-nights/people-1.jpg"
                        width="6048"
                        height="4024"
                        alt=""
                        className="rounded mx-auto xmd:w-2/3 lg:w-1/2"
                    />
                </section>
                <section className="lg:flex mt-12 gap-12 items-center">
                    <Image
                        src="/img/interest-nights/people-2.jpg"
                        width="6048"
                        height="4024"
                        alt=""
                        className="rounded mx-auto xmd:w-2/3 lg:w-1/2"
                    />
                    {/* <p className="para mt-6 lg:mt-0 lg:w-1/2">
                        Are you looking to be apart of something incredible in
                        Cheltenham? We&apos;d love to welcome you, get to know
                        you and share how YOU have an important part to play in
                        seeing something special come alive THIS September.
                    </p> */}
                    <p className="para mt-6 lg:mt-0 lg:w-1/2">
                        Have you found your place, your people or your purpose?
                        Interest nights are a great opportunity to find out
                        more.
                        <br />
                        We believe life is all about building relationships
                        which help us unlock our purpose. We LOVE meeting new
                        people and can't wait to get to know you and hang out!
                        <br />
                        Come along for an an hour, grab a drink and some food in
                        a chilled atmosphere, all on us, if you want to find out
                        more.
                    </p>
                </section>
                <section className="mt-12">
                    <iframe
                        height="650"
                        src="https://freedomcheltenham.churchsuite.com/events/usqy7fwo?details=0&photo=0&description=0&location=0&gmap=0&signup_form=1"
                        style={{ borderWidth: 0 }}
                        width="100%"
                    ></iframe>
                </section>
                <section className="md:flex mt-12 gap-6">
                    <Image
                        src="/img/interest-nights/people-3.jpg"
                        width="6048"
                        height="4024"
                        alt=""
                        className="rounded mx-auto mt-3 lg:w-1/2"
                    />
                    <Image
                        src="/img/interest-nights/people-4.jpg"
                        width="6048"
                        height="4024"
                        alt=""
                        className="rounded mx-auto mt-3 lg:w-1/2"
                    />
                    <Image
                        src="/img/interest-nights/people-6.jpg"
                        width="6048"
                        height="4024"
                        alt=""
                        className="rounded mx-auto mt-3 lg:w-1/2"
                    />
                </section>
            </div>
        </div>
    )
}
