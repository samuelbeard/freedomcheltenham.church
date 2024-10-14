import Image from "next/image"

export const metadata = {
  title: "Visit Us",
}

export default function Page() {
  return (
    <>
      <div className="gradient-bg-h h-2" />
      <div className="section pt-12">
        <div className="container">
          <h1 className="h1 text-brand-red">
            WE&apos;D LOVE FOR YOU TO JOIN US
          </h1>
        </div>
      </div>
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto md:flex flex-wrap px-5 pt-12 sm:flex-nowrap gap-6">
          <Image
            src="/img/photos/host-team.jpg"
            width={3968}
            height={2648}
            alt="the host team"
            className="rounded shadow-lg md:aspect-square md:object-cover md:w-1/2"
          />

          <div className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8">
            <h2 className="h3 my-1">Access and Parking</h2>
            <p className="para text-base">
              There is plenty of parking available at St Edward&apos;s which
              makes it very easy to drive in and park. The main entrance is
              located on Cirencester Road and there will be a Freedom Church
              volunteer at the gates happy to direct you.
            </p>
            <p className="para text-base">
              Disabled parking is available onsite and the main event space,
              café area and toilets all accessible for guests with a disability.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 mx-auto md:w-1/2">
        <div className="relative flex w-full items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 shadow h-96">
          <iframe
            className="absolute inset-0"
            style={{
              filter: "grayscale(0.8) contrast(1) opacity(0.9)",
            }}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.0927607417066!2d-2.059686698268362!3d51.88541931084989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711bcc1f240cd7%3A0xeb5cb6acb237d40b!2sSt%20Edward&#39;s%20School!5e0!3m2!1sen!2suk!4v1709038886225!5m2!1sen!2suk"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
      <div className="container gap-10 md:mt-16 md:flex">
        <div className="md:w-1/2">
          <Image
            width={1080}
            height={1616}
            src="/img/photos/worship-2.jpg"
            alt=""
            className="rounded shadow md:aspect-square md:object-cover"
          />
        </div>
        <div className="md:flex md:w-6/12 md:flex-col md:justify-center lg:w-1/2">
          <h3 className="h3">What to Expect</h3>
          <p className="para">
            Whatever your background, beliefs or experience of Church, everyone
            is welcome at Freedom Church Cheltenham. We are an inclusive,
            diverse family and community that loves people, is passionate about
            people experiencing a life changing relationship with Jesus and
            wants to see people thrive.
          </p>
          <p className="para">
            Our host team will be the first to greet you at the door, showing
            you where to go and answering any questions you might have.
          </p>
        </div>
      </div>
      <div className="container mb-16 mt-10">
        <div className="mx-auto md:w-8/12 lg:w-1/2">
          <h3 className="h3">Our Event</h3>
          <p className="para">
            Our Church event is vibrant and passionate including worship, weekly
            notices, celebrations and a live or video message, where the content
            is relevant and transformational. We are a Church that believes the
            Bible to be true and have personally seen the gospel impact lives
            when embraced.
          </p>
          <p className="para">
            After the event, our café time, offers the chance to grab a coffee,
            tea or piece of cake and an opportunity to get to know us. Community
            is a core aspect to who we are and something we cherish.
          </p>
        </div>
      </div>
    </>
  )
}
