import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import KeepConnectedSection from "./KeepConnectedSection"

const links = [
  ["About Us", "/about"],
  ["Our DNA", "/dna"],
  ["Visit", "/visit"],
  ["Beliefs", "/beliefs"],
]

const links2 = [
  ["Kids", "/kids"],
  ["Midweeks", "/midweeks"],
  ["Messages", "/messages"],
  ["Giving", "/giving"],
]

const links3 = [
  ["Events", "/events"],
  ["Connect", "/connect"],
  ["Contact Us", "/contact"],
]

const bottomLinks = [
  ["Privacy Policy", "/privacy"],
  ["Cookies", "/cookies"],
]

const Footer: FC = () => {
  return (
    <>
      <KeepConnectedSection />
      <footer className="footer bg-black pt-10 pb-5 text-white">
        <div className="w-5xl mx-auto grid max-w-5xl grid-cols-3 px-5 sm:grid-cols-5 sm:gap-12">
          <div className="col-span-3 text-center sm:col-span-1">
            <Image
              src="/img/logo/logo-beige-full.png"
              alt="Freedom Church"
              width={120}
              height={175}
              className="mx-auto"
            />
            <p className="mt-3 text-xs opacity-75">
              Registered charity in
              <br />
              England and Wales (1206262)
            </p>
          </div>
          <div className="hidden sm:col-span-1 sm:inline"></div>
          <div className="col-span-3 sm:col-span-1">
            <h4 className="h4 text-white">Links</h4>
            {links.map(link => {
              return (
                <Link key={link[0]} href={link[1]}>
                  {link[0]}
                </Link>
              )
            })}
          </div>
          <div className="col-span-3 sm:col-span-1">
            <h4 className="h4 hidden text-white sm:block">&nbsp;</h4>
            {links2.map(link => {
              return (
                <Link key={link[0]} href={link[1]}>
                  {link[0]}
                </Link>
              )
            })}
          </div>
          <div className="col-span-3 sm:col-span-1">
            <h4 className="h4 hidden text-white sm:block">&nbsp;</h4>
            {links3.map(link => {
              return (
                <Link key={link[0]} href={link[1]}>
                  {link[0]}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          {bottomLinks.map(link => {
            return (
              <Link className="mx-3" key={link[0]} href={link[1]}>
                {link[0]}
              </Link>
            )
          })}
        </div>
      </footer>
    </>
  )
}

export default Footer
