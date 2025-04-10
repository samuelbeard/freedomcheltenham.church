"use client"

import { FC, Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  RiMenuLine,
  RiArrowDropDownLine,
  RiCloseLine,
  RiInstagramLine,
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiBarChart2Line,
} from "react-icons/ri"
import { FaPodcast } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

interface ILink {
  name: string
  description?: string
  href: string
  active: boolean
  links: ILinkLink[]
  actions: ILinkAction[]
}
interface ILinkLink {
  name: string
  description?: string
  href: string
}
interface ILinkAction {
  name: string
  icon: any
  href: string
  description?: string
}

const links: ILink[] = [
  {
    name: "About",
    href: "/about",
    active: true,
    links: [
      {
        name: "Visit",
        href: "/visit",
      },
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Our DNA",
        href: "/dna",
      },
      {
        name: "Beliefs",
        href: "/beliefs",
      },
    ],
    actions: [],
  },
  {
    name: "Families",
    href: "/families",
    active: false,
    links: [
      {
        name: "Kids",
        description: "2 - 11 Years",
        href: "/kids",
      },
    ],
    actions: [
      {
        name: "Sign your Child Up",
        icon: RiBarChart2Line,
        href: "/kids-check-in",
        description:
          "Joining us for the first time? Pre-register your kids here.",
      },
    ],
  },
  {
    name: "Events",
    href: "/events",
    active: true,
    links: [],
    actions: [],
  },
  {
    name: "Connect",
    href: "/connect",
    active: true,
    links: [],
    actions: [],
  },
  {
    name: "Giving",
    href: "/giving",
    active: true,
    links: [],
    actions: [],
  },
  {
    name: "Contact&nbsp;Us",
    href: "/contact",
    active: true,
    links: [],
    actions: [],
  },
]

const socialMedia = [
  {
    name: "YouTube",
    href: "/youtube",
    icon: RiYoutubeFill,
  },
  {
    name: "Facebook",
    href: "/facebook",
    icon: RiFacebookBoxFill,
  },
  {
    name: "Instagram",
    href: "/instagram",
    icon: RiInstagramLine,
  },
  {
    name: "Podcast",
    href: "/podcast",
    icon: FaPodcast,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

interface Props {
  background?: null | "red" | "black"
}

const Header: FC<Props> = ({ background }) => {
  return (
    <Popover className="z-50 relative shadow-lg bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-10 w-auto sm:h-10"
                src="/img/logo/logo-red.png"
                alt=""
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="p-2 mr-2 inline-flex items-center justify-center text-white hover:text-gray-200">
              <span className="sr-only">Open menu</span>
              <RiMenuLine className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {links.map(link => {
              return link.links.length > 0 ? (
                <Popover className="relative" key={link.href}>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-white",
                          "group rounded-md inline-flex items-center text-base font-bold hover:opacity-60 focus-visible:outline-none transition-all",
                        )}
                      >
                        <span>{link.name}</span>
                        <RiArrowDropDownLine
                          className={classNames(
                            open ? "text-gray-600" : "text-white",
                            "ml-2 -mr-3 h-5 w-5 group-hover:opacity-60",
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {link.links.map(l => {
                                return (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {l.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {l.description}
                                      </p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                            {link.actions.length > 0 && (
                              <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {link.actions.map(item => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center flex-col rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <span className="ml-3 w-full">
                                        {item.name}
                                      </span>
                                      {item.description && (
                                        <span className="w-full ml-3 text-sm">
                                          {item.description}
                                        </span>
                                      )}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-bold text-white ${
                    background === "red"
                      ? "hover:text-brand-dark-gray"
                      : "hover:text-brand-red"
                  } transition-all`}
                  dangerouslySetInnerHTML={{ __html: link.name }}
                />
              )
            })}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {socialMedia.map(item => (
              <Link key={item.href} href={item.href} className="mx-2">
                <item.icon className="h-7 w-7 text-brand-red hover:text-white transition-all cursor-pointer" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 bg-brand-red divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-10 w-auto"
                    src="/img/logo/logo-beige.png"
                    alt="Workflow"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="p-2 inline-flex items-center justify-center text-white focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map(item => {
                    return item.links.length > 0 ? (
                      <div
                        className="-m-3 p-3 xflex items-center"
                        key={item.name}
                      >
                        <span className="ml-3 text-sm font-bxold text-white">
                          {item.name}
                        </span>

                        <div className="flex xflex-col pl-5">
                          {item.links.map(l => {
                            return (
                              <Link
                                key={l.href}
                                href={l.href}
                                className="mr-8 font-bold text-white mt-1"
                              >
                                {l.name}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="-m-3 p-3 flex items-center"
                      >
                        <span
                          className="ml-3 font-bold text-white"
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        />
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex justify-around">
                {socialMedia.map(item => (
                  <Link key={item.href} href={item.href} className="mx-2">
                    <item.icon className="h-7 w-7 text-white hover:text-brand-red transition-all cursor-pointer" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default Header
