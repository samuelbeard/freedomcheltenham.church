"use client"
import { useState, Fragment } from "react"
import { NextComponentType } from "next"
import { RiCalendarLine, RiMapPin2Line, RiTimeLine } from "react-icons/ri"
import { Dialog, Transition } from "@headlessui/react"

interface Props {
  date: string
  location: string
  time: string
  address: string
  mapUrl: string
}

const EventBanner = ({ date, location, time, address, mapUrl }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-black z-10 flex h-48 flex-wrap items-center justify-around md:h-20 md:flex-nowrap">
        <div className="text-brand-red flex items-center justify-center">
          <RiCalendarLine className="mr-3 h-8 w-8" />
          <h2 className="flex font-bold uppercase">{date}</h2>
        </div>
        <div className="text-brand-red flex w-full items-center justify-center md:w-auto">
          <RiMapPin2Line className="mr-3 h-8 w-8" />
          <h2 className="flex font-bold uppercase">{location}</h2>
        </div>
        <div className="text-brand-red flex items-center justify-center">
          <RiTimeLine className="mr-3 h-8 w-8" />
          <h2 className="flex font-bold uppercase">{time}</h2>
        </div>
        <div className="text-brand-red flex items-center justify-center">
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
                  <div className="mt-2 flex justify-between">
                    <div>
                      <p
                        className="text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: address,
                        }}
                      />
                    </div>
                    <div className="text-right">
                      <h2 className="h2 mb-0">{time}</h2>
                      <h3 className="h3 mt-0">{date}</h3>
                    </div>
                  </div>
                  <div className="container relative inset-0 mx-auto flex flex-wrap px-2 pt-4 sm:flex-nowrap">
                    <iframe
                      src={mapUrl}
                      width="400"
                      height="300"
                      data-style="border:0;"
                      loading="lazy"
                      title="A google maps location of St Edward's School"
                      referrerPolicy="no-referrer-when-downgrade"
                      frameBorder={0}
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
