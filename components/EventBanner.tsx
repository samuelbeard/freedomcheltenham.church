"use client"

import { useState, Fragment, useMemo } from "react"
import { NextComponentType } from "next"
import {
    RiAtLine,
    RiCalendarLine,
    RiMapPin2Line,
    RiTimeLine,
} from "react-icons/ri"
import { Dialog, Transition } from "@headlessui/react"

const EventBanner: NextComponentType = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="z-10 flex h-48 flex-wrap items-center justify-around bg-brand-black md:h-20 md:flex-nowrap">
                <div className="flex items-center justify-center text-white">
                    <RiCalendarLine className="mr-3 h-8 w-8" />
                    <h2 className="flex font-bold uppercase">Every sunday</h2>
                </div>
                <div className="flex w-full items-center justify-center text-white md:w-auto">
                    <RiMapPin2Line className="mr-3 h-8 w-8" />
                    <h2 className="flex font-bold uppercase">
                        Danceworks, Cheltenham
                    </h2>
                </div>
                <div className="flex items-center justify-center text-white">
                    <RiTimeLine className="mr-3 h-8 w-8" />
                    <h2 className="flex font-bold uppercase">11AM</h2>
                </div>
                <div className="flex items-center justify-center text-white">
                    <h2
                        className="flex cursor-pointer underline"
                        onClick={() => setIsOpen(true)}
                    >
                        More Details
                    </h2>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Where to find us
                                    </Dialog.Title>
                                    <div className="mt-2 flex justify-between">
                                        <div>
                                            <p className="text-gray-500">
                                                Danceworks
                                                <br />
                                                35 St George&apos;s St,
                                                <br />
                                                Cheltenham
                                                <br />
                                                GL50&nbsp;4AF
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <h2 className="h2 mb-0">11AM</h2>
                                            <h3 className="h3 mt-0">
                                                Every Sunday
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="container relative inset-0 mx-auto flex flex-wrap px-2 pt-4 sm:flex-nowrap">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.63359743659!2d-2.0801020230815594!3d51.904150381641884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48711b9a13dcef19%3A0x7f32b943a245ff21!2sDanceworks!5e0!3m2!1sen!2suk!4v1688589294345!5m2!1sen!2suk"
                                            width="400"
                                            height="300"
                                            data-style="border:0"
                                            loading="lazy"
                                            title="A google maps location of Freedom Church Cheltenham"
                                        ></iframe>
                                    </div>
                                    <div className="mt-8 w-full">
                                        <button
                                            type="button"
                                            className="ml-auto block rounded border border-transparent bg-stone-100 px-4 py-2 text-sm text-stone-900 hover:bg-stone-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default EventBanner
