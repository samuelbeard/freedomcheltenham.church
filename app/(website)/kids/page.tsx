import Image from "next/image"

export const metadata = {
  title: "Kids",
}

export default function Page() {
  return (
    <>
      <div className="container mt-12 mb-16">
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <Image
                src="/img/kids/kids-logo-vertical.svg"
                width={200}
                height={100}
                alt="Freedom Kids"
              />
              <p className="max-w-md leading-relaxed xl:text-xl">
                <strong>Welcome to Freedom Kids!</strong>
                <br /> We're all about helping your kids explore what it means
                to follow Jesus in a way that makes sense to them.
              </p>
            </div>

            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <Image
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover object-center"
                  width="500"
                  height="500"
                  src="/img/kids/cubs-2.jpg"
                />
              </div>

              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <Image
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover object-center"
                  width="500"
                  height="500"
                  src="/img/kids/adv-2.jpeg"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto">
          <h3 className="h3">Relevant content for all age groups</h3>
          <p className="para">
            We go through teaching in series bringing a topic to life over
            several weeks. This is also tailored to each age group, making sure
            each session is relevant, engaging and fun.
          </p>
          <div className="flex flex-col md:flex-row gap-10 mt-6">
            <div className="md:w-1/2">
              <h3 className="h3">First Time?</h3>
              <p className="para">
                We can&apos;t wait to meet you! One of our friendly Kids
                volunteers will meet you and your children to welcome them!
              </p>
              <p className="para">
                At check-in, we will ask for the following personal information;
                family member&apos;s names, children&apos;s names and
                birthdates, address, phone number, and any special instructions
                such as allergies or special needs for your child.
              </p>
              <p className="para">
                Your child&apos;s safety is of utmost importance to us and we
                commit to creating an environment that is both fun and engaging
                as well as safe.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/kids/check-in.jpg"
                width={4028}
                height={6048}
                alt="the kids check in desk"
                className="rounded shadow-lg h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-ramblers-yellow py-16">
        <div className="w-7/12 mx-auto">
          <div className="flex items-center flex-col sm:flex-row text-center">
            <Image
              width="500"
              height="500"
              src="/img/kids/ramblers-logo.svg"
              alt="ramblers"
              className="sm:w-24 sm:mr-6 md:w-40"
            />
            <h2 className="text-black text-5xl font-bold">
              Preschool and Reception
            </h2>
          </div>
        </div>
        <div className="container 2xl:px-56">
          <div className="md:flex gap-24 mt-6">
            <div className="md:w-1/2">
              <p className="para text-black">
                A fun, loving environment for children aged two to four years.
                Children will enjoy play time, snack time, Bible stories, fun
                activities and exciting songs about Jesus. We love to share
                God&apos;s love with our ramblers!
              </p>
            </div>
            <div className="w-1/2">
              <Image
                className="rounded shadow-lg w-96"
                src="/img/kids/ramblers-1.jpg"
                alt=""
                width={336}
                height={336}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-adventurers-green py-16">
        <div className="w-7/12 mx-auto">
          <div className="flex items-center flex-col sm:flex-row text-center">
            <Image
              width="500"
              height="500"
              src="/img/kids/adventurers-logo.svg"
              alt="adventurers"
              className="sm:w-24 sm:mr-6 md:w-40"
            />
            <h2 className="text-5xl font-bold">Infants & Juniors</h2>
          </div>
        </div>
        <div className="container 2xl:px-56">
          <div className="lg:flex gap-6 mt-6">
            <div className="lg:w-1/2 2xl:w-1/3">
              <Image
                className="rounded shadow-lg mb-3"
                src="/img/kids/adv-1.jpg"
                alt=""
                width={372}
                height={279}
              />
            </div>
            <div className="lg:w-1/2 2xl:w-1/3  flex items-center">
              <p className="para text-black">
                For children in school years 1 to 4. Your children will begin to
                learn to learn about their relationship with God in ways that
                are simple, creative and lots of fun!
              </p>
            </div>
            <div className="lg:hidden 2xl:inline 2xl:w-1/3">
              <Image
                className="rounded shadow-lg"
                src="/img/kids/adv-2.jpeg"
                alt=""
                width={372}
                height={279}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-explorers-red py-16">
        <div className="w-7/12 mx-auto">
          <div className="flex items-center flex-col sm:flex-row text-center">
            <Image
              width="500"
              height="500"
              src="/img/kids/explorers-logo.svg"
              alt="explorers"
              className="sm:w-24 sm:mr-6 md:w-40"
            />
            <h2 className="text-white text-5xl font-bold">Juniors +</h2>
          </div>
        </div>
        <div className="container 2xl:px-56">
          <div className="md:flex gap-5 lg:gap-24 mt-6">
            <div className="md:w-1/2 mx-auto flex items-center">
              <p className="para text-white">
                For children in school years 5 and 6. Your children will enjoy
                fun and games with an opportunity to dive deeper into the
                teaching and their personal relationship with God.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-10">
        <p className="para">
          All our kids leaders are DBS checked and meet regularly for
          safeguarding training.
        </p>
      </div>
      <section className="container mt-10 mb-10">
        <h2 className="h2">Baby Room</h2>
        <p className="para">
          A dedicated space for nursing mums and guardians of young children
          aged 0-2 years.
        </p>
        <p className="para">
          The parent and baby room is a warm, engaging and fun space for
          parents/guardians to engage with the Sunday service via live stream,
          whilst being able to care for their little ones as they play. It's
          equipped with baby and toddler-friendly amenities including changing
          facilities, high chairs, toys, comfortable seating, snacks, and a
          Nespresso machine for parents to have a hot coffee.
        </p>
        <p className="para">
          It is a place for parents and young children to feel comfortable, play
          freely and build friendships whilst watching the live stream to the
          service. There are dedicated room hosts ready and on hand to help with
          settling in and supporting parents to connect in too. We can’t wait to
          meet you!
        </p>
      </section>
    </>
  )
}
