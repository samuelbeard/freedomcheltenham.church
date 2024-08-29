export const metadata = {
  title: "Events",
}

export default function Page() {
  return (
    <>
      <section>
        <div className="container mt-20 mb-20">
          {/* <h1 className="text-center text-4xl font-bold">Events</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 className="h3">Sundays</h3>
              <p className="para">
                We meet every Sunday at our church building. The doors open at
                10:45AM ready for a 11:00AM kick-off! Kids church for 0-11’s
                runs every Sunday too so that they can meet Jesus on their level
                and you can focus on the worship and preach in our main event!
              </p>
            </div>
            <div>
              <h3 className="h3">Outreach</h3>
              <p className="para">
                Outreach stream is committed to love, bless and reach out to our
                town using innovate and creative ways. We are a group that has a
                heart to meet tangible needs, and build relationships with
                people, showing the love of Jesus!
                {/* Some weeks outreach stream
                will be a hub of dreams and ideas, plans and strategies, whilst
                other weeks it will be more 'hands on' designing, wrapping,
                writing, or even editing and creating things to reach our town
                digitally! */}
              </p>
            </div>
            <div>
              <h3 className="h3">She</h3>
              <p className="para">
                A group just for our women! We have socials, teaching, worship
                and ministry following a theme for the year.
              </p>
            </div>
            <div>
              <h3 className="h3">Barbarians</h3>
              <p className="para">
                Our men's group meets once a month to worship, learn, grow,
                challenge and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>
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
