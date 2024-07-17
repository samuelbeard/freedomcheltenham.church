import Image from "next/image"
import connectLinks from "../../../lib/connect-links.json"
import Link from "next/link"

export const metadata = {
  title: "Connect",
}

export default function Page() {
  return (
    <>
      <section className="section bg-[url('/img/photos/people.jpg')] bg-cover md:bg-[url('/img/photos/people-cropped.jpg')] md:bg-center">
        <div className="w-full bg-black bg-opacity-50 py-24">
          <h1 className="h1 text-center text-6xl text-white">Connect</h1>
        </div>
      </section>
      <div className="xbg-black bg-white">
        <div className="section container py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {connectLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col items-center justify-center rounded bg-black  text-center overflow-hidden"
            >
              <Image
                src={`/img/${link.image}`}
                alt={link.name}
                width={link.width}
                height={link.height}
                className="mx-auto"
              />
              <div className="p-6 text-center">
                <h2 className="h2 text-white text-2xl m-0 font-bold">
                  {link.name}
                </h2>
                <h3 className="h3 text-white text-lg m-0 font-bold">
                  {link.subtitle}
                </h3>
                <Link
                  href={link.url}
                  className="block bg-brand-red button text-white font-bold text-xl px-4 py-2 rounded-full mt-6 hover:bg-black transition-all"
                  target="_blank"
                >
                  {link.button}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
