import Image from "next/image"

export const metadata = {
    title: "Contact Us | Freedom Church Cheltenham",
}

export default function Page() {
    return (
        <>
            <section className="section bg-[url('/img/photos/smiling.jpg')] md:bg-[url('/img/photos/smiling-cropped.jpg')] bg-cover md:bg-center">
                <div className="bg-black w-full py-24 bg-opacity-50">
                    <h1 className="h1 text-6xl text-white text-center">
                        Get in Contact
                    </h1>
                </div>
            </section>
            <div className="section py-20">
                <div className="xl:container mx-auto px-6 md:px-12">
                    <div className="mb-16 md:w-2/3 lg:w-1/2">
                        <h2 className="mb-4 text-2xl font-bold">
                            Got questions?
                        </h2>
                    </div>
                    <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="relative rounded-xl h-fit overflow-hidden">
                            <Image
                                className="mx-auto w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                src="/img/photos/pastors.jpg"
                                alt="Pastors Any and Emily Rattenbury"
                                loading="lazy"
                                width={558}
                                height={815}
                            />
                            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-6 py-6 bg-brand-black transition duration-300 ease-in-out text-white">
                                <div>
                                    <h4 className="text-xl font-semibold text-white">
                                        Andy &amp; Emily
                                    </h4>
                                    <span className="block text-sm">
                                        Pastors
                                    </span>
                                    <span className="block text-sm mt-2">
                                        cheltenham@freedomchurch.cc
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl h-fit overflow-hidden">
                            <Image
                                className="mx-auto h-fu"
                                src="/img/photos/lorah.jpg"
                                alt=""
                                loading="lazy"
                                width={558}
                                height={815}
                            />
                            <div className="px-6 py-6 bg-brand-black text-white">
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        Lorah
                                    </h4>
                                    <span className="block text-sm">
                                        Kids Pastor
                                    </span>
                                    <span className="block text-sm mt-2">
                                        ctm.kids@freedomchurch.cc
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl h-fit overflow-hidden">
                            <Image
                                className="mx-auto h-fu"
                                src="/img/photos/charlie-img.jpg"
                                alt=""
                                loading="lazy"
                                width={558}
                                height={815}
                            />
                            <div className="px-6 py-6 bg-brand-black text-white">
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        Charlie
                                    </h4>
                                    <span className="block text-sm">
                                        Volunteer Coordinator Pastor
                                    </span>
                                    <span className="block text-sm mt-2">
                                        ctm.volunteering@freedomchurch.cc
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-xl h-fit overflow-hidden">
                            <Image
                                className="mx-auto h-fu"
                                src="/img/photos/john-and-abi-img.jpg"
                                alt=""
                                loading="lazy"
                                width={558}
                                height={815}
                            />
                            <div className="px-6 py-6 bg-brand-black text-white">
                                <div>
                                    <h4 className="text-xl font-bold text-white">
                                        John &amp; Abi
                                    </h4>
                                    <span className="block text-sm">
                                        Zeal Pastors
                                    </span>
                                    <span className="block text-sm mt-2">
                                        ctm.zeal@freedomchurch.cc
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
