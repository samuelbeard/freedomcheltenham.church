import Image from "next/image"

export const metadata = {
  title: "Contact Us",
}

export default function Page() {
  return (
    <>
      <section className="section bg-[url('/img/photos/smiling.jpg')] bg-cover md:bg-[url('/img/photos/smiling-cropped.jpg')] md:bg-center">
        <div className="w-full bg-black bg-opacity-50 py-24">
          <h1 className="h1 text-center text-6xl text-white">Get in Contact</h1>
        </div>
      </section>
      <div className="section py-20">
        <div className="mx-auto px-6 xl:container md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">Got questions?</h2>
          </div>
          <div className="grid gap-6 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative h-fit overflow-hidden rounded-xl">
              <Image
                className="ransition mx-auto w-full object-cover object-top duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="/img/photos/pastors.jpg"
                alt="Pastors Any and Emily Rattenbury"
                loading="lazy"
                width={558}
                height={815}
              />
              <div className="bg-brand-black absolute inset-x-0 bottom-0 mt-auto h-max px-6 py-6 text-white transition duration-300 ease-in-out">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Andy &amp; Emily
                  </h4>
                  <span className="block text-sm">Pastors</span>
                  <span className="mt-2 block text-sm">
                    cheltenham@freedomchurch.cc
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-fit overflow-hidden rounded-xl">
              <Image
                className="h-fu mx-auto"
                src="/img/photos/lorah.jpg"
                alt=""
                loading="lazy"
                width={558}
                height={815}
              />
              <div className="bg-brand-black px-6 py-6 text-white">
                <div>
                  <h4 className="text-xl font-bold text-white">Lorah</h4>
                  <span className="block text-sm">Kids Pastor</span>
                  <span className="mt-2 block text-sm">
                    ctm.kids@freedomchurch.cc
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-fit overflow-hidden rounded-xl">
              <Image
                className="h-fu mx-auto"
                src="/img/photos/charlie-img.jpg"
                alt=""
                loading="lazy"
                width={558}
                height={815}
              />
              <div className="bg-brand-black px-6 py-6 text-white">
                <div>
                  <h4 className="text-xl font-bold text-white">Charlie</h4>
                  <span className="block text-sm">
                    Volunteer Coordinator Pastor
                  </span>
                  <span className="mt-2 block text-sm">
                    ctm.volunteers@freedomchurch.cc
                  </span>
                </div>
              </div>
            </div>
            <div className="relative h-fit overflow-hidden rounded-xl">
              <Image
                className="h-fu mx-auto"
                src="/img/photos/john-and-abi-img.jpg"
                alt=""
                loading="lazy"
                width={558}
                height={815}
              />
              <div className="bg-brand-black px-6 py-6 text-white">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    John &amp; Abi
                  </h4>
                  <span className="block text-sm">Zeal Pastors</span>
                  <span className="mt-2 block text-sm">
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
