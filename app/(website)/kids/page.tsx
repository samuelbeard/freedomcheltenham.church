import Image from "next/image"

export const metadata = {
    title: "Kids | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <>
            <div className="container mt-12 mb-16">
                <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                            <h1 className="mb-4 text-4xl font-bold text-brand-red sm:text-5xl md:mb-8 md:text-6xl">
                                KIDS
                            </h1>
                            <p className="max-w-md leading-relaxed xl:text-xl">
                                Freedom kids is a children&apos;s ministry
                                designed to be safe, age appropriate, fun and
                                engaging! We love teaching the next generation
                                about Jesus.
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
                <div className="md:w-8/12 lg:w-2/3 mx-auto">
                    <h3 className="h3">Relevant content for all age groups</h3>
                    <p className="para">
                        We go through teaching in series bringing a topic to
                        life over several weeks. This is also tailored to each
                        age group, making sure each session is relevant,
                        engaging and fun.
                    </p>
                    <h3 className="h3">First Time?</h3>
                    <p className="para">
                        We can&apos;t wait to meet you! One of our friendly Kids
                        volunteers will meet you and your children to welcome
                        them!
                    </p>
                    <p className="para">
                        At check-in, we will ask for the following personal
                        information; family member&apos;s names, children&apos;s
                        names and birthdates, address, phone number, and any
                        special instructions such as allergies or special needs
                        for your child.
                    </p>
                    <p className="para">
                        Your child&apos;s safety is of utmost importance to us
                        and we commit to creating an environment that is both
                        fun and engaging as well as safe.
                    </p>
                </div>
            </div>
            <section className="bg-cubs-red py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/cubs.png"
                            alt="cubs"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-white text-5xl font-bold">
                            Preschool and Reception
                        </h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="md:flex gap-24 mt-6">
                        <div className="text-white md:w-1/2">
                            <p className="para text-white">
                                A fun, loving environment for children aged two
                                to four years. Children will enjoy play time,
                                snack time, Bible stories, fun activities and
                                exciting songs about Jesus. We love to share
                                God&apos;s love with our cubs!
                            </p>
                            <h4 className="h4 text-white">Baby Room</h4>
                            <p className="para text-white">
                                On Sundays, we have a baby room for nursing
                                mothers. Kitted out with a changing station and
                                nap station. There are also soft toys, tea and
                                coffee and a screen to watch the preach.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <Image
                                className="rounded shadow-lg w-96"
                                src="/img/kids/cubs-1.JPG"
                                alt=""
                                width={336}
                                height={336}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-adventurers-yellow py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/adventurers.png"
                            alt="adventurers"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-5xl font-bold">Years 1 - 4</h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="lg:flex gap-6 mt-6">
                        <div className="lg:w-1/2 2xl:w-1/3">
                            <Image
                                className="rounded shadow-lg mb-3"
                                src="/img/kids/adv-1.jpeg"
                                alt=""
                                width={372}
                                height={279}
                            />
                        </div>
                        <div className="lg:w-1/2 2xl:w-1/3  flex items-center">
                            <p className="para text-brand-dark-gray">
                                For children aged four to seven years. Your
                                children will begin to learn about their
                                relationship with God in ways that are simple,
                                creative and lots of fun!
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
            <section className="bg-wave-blue py-16">
                <div className="w-7/12 mx-auto">
                    <div className="flex items-center flex-col sm:flex-row text-center">
                        <Image
                            width="500"
                            height="500"
                            src="/img/kids/the-wave.png"
                            alt="wave"
                            className="sm:w-24 sm:mr-6 md:w-32"
                        />
                        <h2 className="text-white text-5xl font-bold">
                            Years 5 and 6
                        </h2>
                    </div>
                </div>
                <div className="container 2xl:px-56">
                    <div className="md:flex gap-5 lg:gap-24 mt-6">
                        <div className="md:w-1/2 mx-auto flex items-center">
                            <p className="para text-white">
                                For children aged seven to eleven years. The
                                Wave currently joins The Adventurers for fun and
                                games with an opportunity to dive deeper into
                                the teaching and their personal relationship
                                with God.
                            </p>
                        </div>
                        <div>
                            <Image
                                className="rounded shadow-lg"
                                src="/img/kids/wave-1.jpg"
                                alt=""
                                width={372}
                                height={279}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container py-10">
                <p className="para">
                    All our kids vonunteers are DBS checked and meet regularly
                    for safeguarding training.
                </p>
            </div>
        </>
    )
}
