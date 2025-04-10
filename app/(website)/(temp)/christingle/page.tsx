import Image from "next/image"
import Link from "next/link"
import Carousel from "../../../../components/Carousel"

export const metadata = {
  title: "Christingle | 10th December",
  description:
    "Join us for a spirited Christingle event that beautifully combines cherished traditions with a lashing of modern magic.",
}

export default function Page() {
  return (
    <div className="w-full bg-[#171717] font-serif text-xl text-[#dec87f]">
      <Image
        src="/img/christingle/website-top.png"
        alt=""
        width={2160}
        height={588}
      />
      <Image
        width={1080}
        height={1080}
        src="/img/christingle/christingle-logo.png"
        className="relative mx-auto px-10 md:-top-20 md:w-[700px]"
        alt=""
      />
      <Image
        src="/img/christingle/christopher-full.png"
        width={2359}
        height={963}
        alt="10th Dec at 11AM and 3PM"
        className="hidden w-screen md:inline"
      />
      <Image
        src="/img/christingle/christopher-small.png"
        alt=""
        width={1080}
        height={819}
        className="mt-20 w-screen md:hidden"
      />
      <div className="mt-20">
        <Image
          src="/img/christingle/border.png"
          width={2160}
          height={148}
          alt=""
          className="w-screen"
        />
      </div>
      <div className="mt-12 flex justify-center md:mt-20">
        <div className="mx-auto flex flex-col gap-12 md:flex-row md:gap-0">
          <div className="xh-24 center w-60">
            <h2 className="text-[32px]">
              SUNDAY <span className="md:hidden">10 DEC</span>
            </h2>
          </div>
          <div className="center hidden w-60 flex-col border-[#dec87f] md:flex md:border-x">
            <h1 className="mb-3 mt-0 text-[100px]">10</h1>
            <h2 className="mt-12 text-[32px]">DEC</h2>
          </div>
          <div className="-mt-7 text-center md:hidden">
            <h2 className="text-2xl">AT 11am & 3pm</h2>
          </div>
          <div className="center hidden w-60 text-[32px] md:flex">
            <div className="mr-4">
              <h2 className="">AT</h2>
            </div>
            <div>
              <h2 className="mb-3">11:00 AM</h2>
              <h2>3:00 PM</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-24 text-center text-[32px] leading-10 lg:w-2/3">
        <p className="uppercase">
          JOIN US FOR A SPIRITED CHRISTINGLE EVENT THAT BEAUTIFULLY COMBINES
          CHERISHED TRADITIONS WITH A LASHING OF MODERN MAGIC.
        </p>
        <p className="mt-24">
          Embark on an exciting interactive adventure with Christopher Tingle, a
          spirited orange who leads us through a whirlwind journey uncovering
          the true essence of the Christingle. He&apos;ll also be joined live by
          other lovable characters such as Claus Funkeld Von Heidleberg,
          professor of light &amp; his loyal assistant&nbsp;Otto.
        </p>
        <p className="mt-24 uppercase">
          RESERVE YOUR SEAT TODAY AND JOIN US IN CELEBRATING LOVE, LIGHT, AND
          COMMUNITY.
        </p>
      </div>
      <div className="mt-24 text-center">
        <Link
          href="https://freedom.churchsuite.com/events/883stjme"
          className="rounded-lg bg-[#dec87f] px-6 py-3 text-4xl text-[#171717]"
        >
          Sign up here!
        </Link>
      </div>
      <div className="mx-auto mt-32 flex w-8/12 flex-col gap-10 text-center md:flex-row">
        <div className="w-full md:w-1/3">
          <Image
            width={1080}
            height={1080}
            src="/img/christingle/family.png"
            className="mx-auto w-60"
            alt=""
          />
          <h3 className="mt-10 text-3xl font-bold uppercase">
            Whole family
            <br />
            event
          </h3>
          <p>
            Our modern Christingle event is designed for all ages, a wonderful
            opportunity to take a step back from the hustle and bustle, and
            reconnect with what truly matters.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            width={1080}
            height={1080}
            src="/img/christingle/christingle.png"
            className="mx-auto w-60"
            alt=""
          />
          <h3 className="mt-10 text-3xl font-bold uppercase">
            Your own
            <br />
            christingle
          </h3>
          <p>
            Go on a whole family journey with fun characters and stories to
            craft your very own Christingle, a symbol of hope and light.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            width={1080}
            height={1080}
            src="/img/christingle/event.png"
            className="mx-auto w-60"
            alt=""
          />
          <h3 className="mt-10 text-3xl font-bold uppercase">
            Double
            <br />
            event
          </h3>
          <p>
            Join us either in the morning or afternoon for an unforgettable
            celebration.
          </p>
        </div>
      </div>
      <Image
        src="/img/christingle/grotto-border-top.png"
        width={2160}
        height={338}
        alt=""
        className="mt-20 w-screen md:mt-0"
      />
      <div className="bg-[#bf1c06] py-12">
        <div className="container">
          <Image
            src="/img/christingle/grotto-title.png"
            width={513}
            height={127}
            alt="Santa's Grotto"
          />
          <div className="flex w-full flex-col  md:flex-row">
            <div className="text-3xl md:w-2/3">
              <p>
                We&apos;re thrilled to invite you to our free Santa's Grotto
                experience, filled with twinkling lights, festive decorations,
                and the jolly man himself, Santa Claus. Bring your little ones
                to meet Santa, share their wishes, and receive a special,
                complimentary gift to make their Christmas season even brighter.
              </p>
              <p className="mt-10 font-bold">PRE BOOKING ESSENTIAL</p>
              <p>
                Santa&apos;s grotto places only open for those attending the
                Christingle&nbsp;event.
              </p>
            </div>
            <div className="mt-12 md:mt-0 md:w-1/3">
              <Image
                src="/img/christingle/grotto.png"
                width={1080}
                height={1080}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/img/christingle/grotto-border-bottom.png"
        width={2160}
        height={338}
        alt=""
        className="w-screen"
      />
      <div className="mt-24">
        <Carousel
          direction="right"
          speed={20}
          carouselNumber={4}
          totalImages={9}
        />
      </div>
      <div className="mt-24">
        <div className="container">
          <h2 className="text-4xl font-bold uppercase">How to find us</h2>
        </div>
      </div>
      <div>
        <div className="container mt-10 flex flex-col gap-10 md:flex-row">
          <div className="h-96 w-full md:w-1/2">
            <iframe
              className="xabsolute inset-0 w-full"
              style={{
                filter: "grayscale(0.8) contrast(1.2) opacity(0.9)",
              }}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4923.379817736884!2d-2.0784703225860617!3d51.903122825411856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f32b943a245ff21!2sDanceworks!5e0!3m2!1sen!2suk!4v1652795920370!5m2!1sen!2suk"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <p className="text-xl uppercase">
              Danceworks studios
              <br />
              35 St George&apos;s st
              <br />
              Cheltenham
              <br />
              GL50&nbsp;4AF
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24 text-center">
        <Link
          href="https://freedom.churchsuite.com/events/883stjme"
          className="rounded-lg bg-[#dec87f] px-6 py-3 text-4xl text-[#171717]"
        >
          Sign up here!
        </Link>
      </div>
      <div className="mt-32">
        <Image
          src="/img/carols/welcome.png"
          className="mx-auto px-10"
          width={513}
          height={127}
          alt=""
        />
        <Image
          width={1080}
          height={1080}
          src="/img/carols/baby-jesus-footer.png"
          className="mx-auto mt-20 w-64 md:-mb-32"
          alt=""
        />
        <Image
          src="/img/carols/website-bottom.png"
          alt=""
          width={2160}
          height={588}
        />
      </div>
    </div>
  )
}
