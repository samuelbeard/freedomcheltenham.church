"use client"
import { RiMapPin2Fill, RiTimeFill, RiCalendar2Fill } from "react-icons/ri"
import { format } from "date-fns"
import Link from "next/link"
import { useEffect, useState } from "react"

interface IEvent {
  identifier: string
  name: string
  datetime_start: string
  datetime_end: string
  location: {
    name: string
  }
  images: {
    md: {
      url: string
    }
  }
  signup_options: {
    tickets: {
      url: string
    }
  }
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      let response = await fetch(
        `https://freedomcheltenham.churchsuite.com/embed/calendar/json?num_results=4`,
      )

      let events = await response.json()

      setEvents(events)
    }
    fetchEvents()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {events?.map((event: IEvent) => {
        return (
          <Link
            href={event.signup_options.tickets.url}
            target="_blank"
            rel="noreferrer"
            key={event.identifier}
            className="rounded-lg shadow-lg overflow-hidden group hover:shadow transition-all"
          >
            <div className="aspect-video bg-brand-red flex justify-center items-center group-hover:opacity-90 transition-all">
              {!!event.images.md ? (
                <img
                  src={event.images.md.url}
                  alt=""
                  className="h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <h3 className="h3 m-0 text-white uppercase">
                    {format(event.datetime_start, "EEEE")}
                  </h3>
                  <h3 className="h1 m-0 text-white uppercase">
                    {format(event.datetime_start, "do")}
                  </h3>
                  <h3 className="h3 m-0 text-white uppercase">
                    {format(event.datetime_start, "MMMM")}
                  </h3>
                </div>
              )}
            </div>
            <div className="px-5 py-5 text-brand-dark-gray">
              <h4 className="h4 mt-0 font-normal">{event.name}</h4>
              <h5 className="">
                <RiCalendar2Fill className="inline opacity-30" />{" "}
                {format(event.datetime_start, "do MMMM, yyyy")}
              </h5>
              <h5 className="mt-2">
                <RiTimeFill className="inline opacity-30" />{" "}
                {format(event.datetime_start, "h:mm a")} to{" "}
                {format(event.datetime_end, "h:mm a")}
              </h5>
              {event.location.name && (
                <h5 className="mt-2">
                  <RiMapPin2Fill className="inline opacity-30" />{" "}
                  {event.location.name}
                </h5>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default UpcomingEvents
