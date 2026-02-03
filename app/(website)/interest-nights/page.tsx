import EventBanner from "../../../components/EventBanner"
import Image from "next/image"

export const metadata = {
  title: "Interest Nights",
  description: "",
}
export default function Page() {
  return (
    <div className="min-h-screenx flex flex-col justify-center py-24">
      <div className="container mx-auto">
        <section className="text-center">
          <h1 className="text-6xl md:text-8xl">Interest Nights</h1>
        </section>
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
          <p className="mt-6 lg:mt-0 lg:w-1/2">
            Have you found your place, your people or your purpose? Interest
            nights are a great opportunity to find out more.
            <br />
            We believe life is all about building relationships which help us
            unlock our purpose. We LOVE meeting new people and can't wait to get
            to know you and hang out!
            <br />
            Come along for an hour, grab a drink and some food in a chilled
            atmosphere, all on us, if you want to find out more.
          </p>
        </section>
        <section className="mt-12">
          <iframe
            height="750"
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
