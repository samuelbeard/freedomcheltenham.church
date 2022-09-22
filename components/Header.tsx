/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
    RiBookMarkLine,
    RiCalendar2Line,
    RiBarChart2Line,
    RiCursorLine,
    RiMenuLine,
    RiPhoneLine,
    RiPlayLine,
    RiRefreshLine,
    RiShieldLine,
    RiLoader2Fill,
    RiGridLine,
    RiXingLine,
    RiArrowDownFill,
    RiArrowDropDownLine,
    RiCloseLine,
    RiInstagramLine,
    RiFacebookBoxFill,
    RiYoutubeFill,
} from "react-icons/ri"
import Link from "next/link"

const links = [
    {
        name: "About",
        description: "DESCRIPTION",
        href: "/about",
        icon: RiBarChart2Line,
    },
    {
        name: "Visit",
        description: "DESCRIPTION",
        href: "/visit",
        icon: RiCursorLine,
    },
    {
        name: "Messages",
        description: "DESCRIPTION",
        href: "/messages",
        icon: RiShieldLine,
    },
    // {
    //     name: "Kids",
    //     description: "DESCRIPTION",
    //     href: "/kids",
    //     icon: RiGridLine,
    // },
    {
        name: "Give",
        description: "DESCRIPTION",
        href: "/give",
        icon: RiRefreshLine,
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
]
// const callsToAction = [
//     { name: "Watch Demo", href: "#", icon: RiPlayLine },
//     { name: "Contact Sales", href: "#", icon: RiPhoneLine },
// ]
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: RiLoader2Fill,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: RiBookMarkLine,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: RiCalendar2Line,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: RiShieldLine,
    },
]
// const recentPosts = [
//     { id: 1, name: "Boost your conversion rate", href: "#" },
//     {
//         id: 2,
//         name: "How to use search engine optimization to drive traffic to your site",
//         href: "#",
//     },
//     { id: 3, name: "Improve your customer experience", href: "#" },
// ]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

interface Props {
    background?: null | "red"
}

const Header: FC<Props> = ({ background }) => {
    return (
        <Popover
            className={`z-50 relative ${
                background === "red" ? `bg-brand-red` : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <a>
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-10 w-auto sm:h-10"
                                    src="/img/logo/logo-white.svg"
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="p-2 mr-2 inline-flex items-center justify-center text-white hover:text-gray-200">
                            <span className="sr-only">Open menu</span>
                            <RiMenuLine
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as="nav"
                        className="hidden md:flex space-x-10"
                    >
                        {/* <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900"
                                                : "text-white",
                                            "group xbg-white rounded-md inline-flex items-center text-base font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        )}
                                    >
                                        <span>Solutions</span>
                                        <RiArrowDropDownLine
                                            className={classNames(
                                                open
                                                    ? "text-gray-600"
                                                    : "text-white",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                                                    {links.map(item => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon
                                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map(item => (
                                                        <div
                                                            key={item.name}
                                                            className="flow-root"
                                                        >
                                                            <a
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                            >
                                                                <item.icon
                                                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="ml-3">
                                                                    {item.name}
                                                                </span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */}

                        {links.map(link => (
                            <Link key={link.href} href={link.href}>
                                <a
                                    className={`text-base font-bold text-white ${
                                        background === "red"
                                            ? "hover:text-brand-dark-gray"
                                            : "hover:text-brand-red"
                                    } transition-all`}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        ))}

                        {/* <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? "text-gray-900"
                                                : "text-gray-500",
                                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        )}
                                    >
                                        <span>More</span>
                                        <RiArrowDownFill
                                            className={classNames(
                                                open
                                                    ? "text-gray-600"
                                                    : "text-gray-400",
                                                "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {resources.map(item => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon
                                                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {item.name}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                                            Recent Posts
                                                        </h3>
                                                        <ul
                                                            role="list"
                                                            className="mt-4 space-y-4"
                                                        >
                                                            {recentPosts.map(
                                                                post => (
                                                                    <li
                                                                        key={
                                                                            post.id
                                                                        }
                                                                        className="text-base truncate"
                                                                    >
                                                                        <a
                                                                            href={
                                                                                post.href
                                                                            }
                                                                            className="font-medium text-gray-900 hover:text-gray-700"
                                                                        >
                                                                            {
                                                                                post.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a
                                                            href="#"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        >
                                                            {" "}
                                                            View all posts{" "}
                                                            <span aria-hidden="true">
                                                                &rarr;
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover> */}
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {/* <a
                            href="#"
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Sign in
                        </a>
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-red hover:bg-indigo-700"
                        >
                            Sign up
                        </a> */}
                        {socialMedia.map(item => (
                            <Link key={item.href} href={item.href}>
                                <a className="mx-2">
                                    <item.icon
                                        className={`h-7 w-7 text-white ${
                                            background === "red"
                                                ? "hover:text-brand-dark-gray"
                                                : "hover:text-brand-red"
                                        } transition-all cursor-pointer`}
                                    />
                                </a>
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
                                    <img
                                        className="h-10 w-auto"
                                        src="/img/logo/logo-white.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="p-2 inline-flex items-center justify-center text-white focus:outline-none">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <RiCloseLine
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {links.map(item => (
                                        <Link href={item.href} key={item.name}>
                                            <a className="-m-3 p-3 flex items-center">
                                                <item.icon
                                                    className="flex-shrink-0 h-6 w-6 text-gray-800"
                                                    aria-hidden="true"
                                                />
                                                <span className="ml-3 font-bold text-white">
                                                    {item.name}
                                                </span>
                                            </a>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="flex justify-around">
                                {socialMedia.map(item => (
                                    <Link key={item.href} href={item.href}>
                                        <a className="mx-2">
                                            <item.icon
                                                className={`h-7 w-7 text-white ${
                                                    background === "red"
                                                        ? "hover:text-brand-dark-gray"
                                                        : "hover:text-brand-red"
                                                } transition-all cursor-pointer`}
                                            />
                                        </a>
                                    </Link>
                                ))}
                            </div>
                            {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>
                                {resources.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                            {/* <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{" "}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
export default Header
