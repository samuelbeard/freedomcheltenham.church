import Link from "next/link"
import Image from "next/image"
import Header from "components/Header"
import EventBanner from "components/EventBanner"
import Carousel from "components/Carousel"
import Footer from "components/Footer"
import UpcomingEvents from "../components/UpcomingEvents"
import Script from "next/script"
import Taggbox from "components/Taggbox"

export default function Page() {
  return (
    <>
      <Script type="text/javascript">
        window.pyvAccountKey = 'RG3DqvOC'; window.pyvDomain =
        'https://lite.visitplanner.church'; var script =
        document.createElement('script'); script.async = true; script.type =
        'text/javascript'; script.src =
        'https://lite.visitplanner.church/embed/embed.js';
        document.head.appendChild(script);
      </Script>
      <div className="h-screen">
        <div className="absolute top-0 left-0 z-30 w-full">
          <Header background="red" />
        </div>
        <div className="flex h-full flex-col justify-between bg-brand-beige">
          <div className="absolute top-0 bottom-0 h-full w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-10 h-auto min-h-full w-auto min-w-full object-cover"
            >
              <source src="/video/bg-video-2025_1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="z-10 flex flex-grow items-center bg-brand-black bg-opacity-60">
            <section className="section">
              <div className="xgrid w-5/6 max-w-7xl grid-cols-3 gap-0">
                <div className="col-span-3 mx-auto flex flex-col justify-center text-center md:col-span-2 md:text-left">
                  <h2 className="h2 m-0 text-3xl uppercase text-brand-red sm:text-4xl  mt-20 ml-3">
                    HAVE YOU FOUND
                  </h2>
                  <h1 className="h1 m-0 text-4xl uppercase text-white sm:text-7xl lg:text-8xl mt-1">
                    Your&nbsp;Place
                  </h1>
                  <h1 className="h1 m-0 text-4xl uppercase text-white sm:text-7xl lg:text-8xl mt-2">
                    Your&nbsp;People
                  </h1>
                  <h1 className="h1 m-0 text-4xl uppercase text-white sm:text-7xl lg:text-8xl mt-2">
                    Your&nbsp;Purpose
                  </h1>
                  <h2 className="h2 m-0 text-3xl uppercase text-brand-red sm:text-4xl mt-1 ml-3">
                    IN CHELTENHAM?
                  </h2>
                </div>
                {/* <div className="mt-10">
                  <Link
                    href="/plan-your-visit"
                    className="bg-brand-red px-10 py-3 rounded-lg hover:bg-black transition-all text-white text-2xl font-bold"
                  >
                    Plan your Visit
                  </Link>
                </div> */}
              </div>
            </section>
          </div>
          <EventBanner
            date="Every Sunday"
            location="St Edward's, Cheltenham"
            time="11:00AM"
            address="St Edward's School<br />Cirencester Road<br />Cheltenham<br />GL53&nbsp;8EY"
            mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.0927607417066!2d-2.059686698268362!3d51.88541931084989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711bcc1f240cd7%3A0xeb5cb6acb237d40b!2sSt%20Edward&#39;s%20School!5e0!3m2!1sen!2suk!4v1709038886225!5m2!1sen!2suk"
          />
        </div>
      </div>

      <div className="section pt-14">
        <div className="container lg:w-2/3">
          <p className="font-bold text-brand-black text-lg">
            Welcome to Freedom Church Cheltenham!
          </p>
          <p className="text-brand-black text-lg">
            Our heart is to build a church that helps you find{" "}
            <span className="font-bold">
              your people, your place, and your purpose
            </span>
            . We believe passionately that life is all about building meaningful
            relationships with others. We’re a diverse and loving family,
            committed to helping <span className="font-bold">people</span>{" "}
            thrive through a personal relationship with Jesus. We love meeting
            new <span className="font-bold">people</span> from all ages
            and&nbsp;backgrounds.
          </p>
          <p className="text-brand-black text-lg">
            We pray that at Freedom Church, you’ll find a{" "}
            <span className="font-bold">place</span> that truly welcomes you.
            Whether it’s your first time stepping through the doors or you’ve
            been part of the faith journey for years, this church is a{" "}
            <span className="font-bold">place</span> where lives are impacted —
            and where everyone is&nbsp;valued.
          </p>
          <p className="text-brand-black text-lg">
            We believe in an ageless message, yet we’re passionate about making
            church modern and relevant in the heart of Cheltenham. We’re also
            committed to helping people discover and unlock their
            God-given&nbsp;
            <span className="font-bold">purpose</span>.
          </p>
          <p className="text-brand-black text-lg">
            As followers of Jesus, we learn, explore, and grow in fruitfulness —
            together, in community. Our{" "}
            <span className="font-bold">purpose</span> in life is to live fully
            and leave a lasting impact on those around us by having audacious
            faith, trusting God, honoring others, and reflecting Jesus to
            the&nbsp;world.
          </p>
        </div>
      </div>
      <div className="section z-30 py-10">
        <div className="container z-30 py-12">
          <div className="grid grid-cols-3 gap-6">
            <Link
              href="/visit"
              className="group relative col-span-3 block w-full overflow-hidden rounded bg-black shadow-lg transition-all hover:shadow md:col-span-1"
            >
              <Image
                alt=""
                src="/img/photos/outside.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-0 transition-opacity rounded-lf"
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
                      Find out how to get here and what to expect when you walk
                      in.
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
                      Find out about who we are and what we believe.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="/events"
              className="group relative col-span-3 block w-full overflow-hidden rounded bg-black shadow-lg transition-all hover:shadow md:col-span-1"
            >
              <Image
                alt=""
                src="/img/photos/interest-night.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 group-hover:opacity-50 transition-opacity rounded-lf"
                fill
              />

              <div className="relative flex h-full flex-col justify-between p-4 sm:p-6 lg:p-8">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  What's On
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      Find out what events are on
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section className="mb-28">
        <Taggbox />
      </section>

      <section className="container mb-10">
        <UpcomingEvents />
      </section>
      {/* <section className="section bg-black py-10">
        <div className="container">
          <InstagramFeed />
        </div>
      </section> */}
      <Footer />
    </>
  )
}
