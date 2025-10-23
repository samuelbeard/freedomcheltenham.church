import Link from "next/link"

export const metadata = {
  title: "Events",
}

export default function Page() {
  return (
    <>
      <div className="flex justify-around bg-brand-red py-12 text-4xl font-extrabold text-white md:text-[5rem]">
        <h1 className="text-black">SUNDAYS</h1>
      </div>

      <section>
        <div className="container mt-20 mb-20">
          <p>
            We meet every Sunday at our church building in Cheltenham. The doors
            open at 10:45 AM ready for a 11:00 AM kick-off! Kids church for
            0-11’s runs every Sunday too so that they can meet Jesus on their
            level and you can focus on the worship and preach in our main event!
          </p>

          <div className="text-center mt-8">
            <p>We meet at St. Edwards School, Cheltenham, GL53 9AT</p>
            <div className="w-full sm:w-1/2 mx-auto space-y-2">
              <Link
                className="block p-2 border-2 rounded border-red-400 transition-transform hover:scale-105 cursor-pointer"
                href="https://w3w.co/slope.puppy.smooth"
              >
                /// What3Words
              </Link>
              <Link
                className="block p-2 border-2 rounded border-red-400 transition-transform hover:scale-105 cursor-pointer"
                href="https://www.google.com/maps/dir/?api=1&destination=51.885228,-2.059596"
              >
                Google Maps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-around bg-brand-red py-12 text-4xl font-extrabold text-white md:text-[5rem]">
        <h1 className="text-black">MIDWEEKS</h1>
      </div>

      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/connect-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">CONNECT GROUPS</h1>
        </div>
      </section>
      <div className="container mt-12 mb-16">
        <div>
          <p>
            These are a great opportunity to find your place, connect with your
            people and discover more of your purpose.
          </p>
          <p>
            Each time we gather it&apos;s a time of fun, food and friendship.
            The core ingredients of a connect group are centred around faith,
            upstanding more of and applying the bible to our lives, as well as
            prayer.
          </p>
          <p>
            We meet on the 1st and 3rd week of the month on a Wednesday evening
            during term time.
          </p>
        </div>
      </div>

      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/prayer-fast-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">PRAYER & FAST</h1>
          {/* <p className="text-white lg:w-1/2">Sisters | Daughters | Warriors</p> */}
        </div>
      </section>
      <div className="container mt-12 mb-16">
        <div>
          <p>
            On the first Monday of each month, as a church we follow the example
            set by Jesus and set time aside to fast & pray.
          </p>
          <p>Join us as we pray together for God to move in our city.</p>
        </div>
      </div>

      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/she-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">SHE</h1>
          <p className="text-white lg:w-1/2">Sisters | Daughters | Warriors</p>
        </div>
      </section>
      <div className="container mt-12 mb-16">
        <div>
          <p>
            SHE is our women&apos;s ministry. Meeting once a month, primarily
            the last Wednesday of the month, the women in our campus gather
            together for SHE.
          </p>
          <p>
            The time together varies, from worship and live or video message, to
            special events and hospitality nights. It offers an opportunity for
            connection, friendship, growth and empowerment, discovering purpose
            and learning to thrive as women as God designed it to be.
          </p>
          <p>
            Just like our Sunday events, SHE also follows in series, honing in
            on a specific topic for the year.
          </p>
        </div>
      </div>
      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/barbarians-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">BARBARIANS</h1>
          <p className="text-white lg:w-1/2">Sons | Brothers | Warriors</p>
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
        <div>
          <p>
            Barbarians is our men's ministry. Gathering once a month, on the
            second Wednesday of the month.
          </p>
          <p>
            Barbarians is a space that encourages men to grow, lead and develop
            into all that God has called them to be. From what it means to be a
            son and brother, to being a father and friend.
          </p>
          <p>
            The event includes passionate worship, a challenging message, and
            time to pray for each other.
          </p>
        </div>
      </div>
      <section className="bg-brand-dark-gray">
        <div className="container py-10">
          <h1 className="my-0 text-white">INTEREST GROUPS</h1>
          <p className="text-white lg:w-1/2">
            We believe that strong community is essential to our health as a
            church. There are regular opportunities throughout the month for us
            to come together and grow in fellowship. Take a look - we can't wait
            to meet you!
          </p>
        </div>
      </section>
      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/music-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">MUSIC INTEREST GROUP</h1>
          {/* <p className="text-white lg:w-1/2"></p> */}
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
        <div>
          <p>
            This one's for the music lovers. We meet on the 1st and 3rd week of
            the month on a Tuesday during term time.
          </p>
          <p>
            We want to honour God with our instruments and voices, as well as
            teaching around the understanding of the power of music and worship.
          </p>
          <p>
            Join us to learn, listen, play, write and sing! If you are
            passionate about music this is a great place to gather with other
            people with a similar passion, to pray, learn and grow in community
          </p>
        </div>
      </div>
      <section className="flex h-[200px] flex-col justify-center bg-black bg-[url('/img/elements/fitness-banner.png')] bg-right bg-no-repeat lg:bg-contain">
        <div className="container py-10">
          <h1 className="my-0 text-white">MENS FITNESS INTEREST GROUP</h1>
          {/* <p className="text-white lg:w-1/2"></p> */}
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
        <div>
          <p>
            Men&apos;s fitness interest group meets on the 1st and 3rd week of
            the month on a Tuesday morning during term time.
          </p>
          <p>
            As Christians we believe our body is a temple of God, so let's
            exercise together and look after it! Each time we gather we have a
            different focus, linking physical exercise to our faith.
          </p>
          <p>
            We also take time to pray for one another. A great way to start the
            day!
          </p>
        </div>
      </div>

      <div className="container mx-auto p-0 lg:p-2">
        <iframe
          height="800"
          src="https://freedomcheltenham.churchsuite.com/-/calendar/0c270979-8e8b-4711-b210-bcc21b4e51f6"
          style={{ borderWidth: 0 }}
          width="100%"
          className="focus:outline-none"
        ></iframe>
      </div>

      {/* <div className="container mx-auto text-center py-10">
        <Link
          href="/calendar-subscribe"
          className="bg-brand-red text-white px-5 py-3 rounded-lg hover:bg-black transition-all"
        >
          Subscribe to the Calendar
        </Link>
      </div> */}
    </>
  )
}
