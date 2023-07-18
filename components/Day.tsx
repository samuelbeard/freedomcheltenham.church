import { format } from "date-fns"
import { FC } from "react"

interface Props {
    day: Date
    events?: IEvent[]
}

const Day: FC<Props> = ({ day, events }) => {
    const now = new Date().setHours(0, 0, 0, 0)
    const formattedDay = format(day, "dd/MM/yyyy")

    const todaysEvents = () => {
        if (events) {
            return events.map(event => {
                const formatted = format(new Date(event.date), "dd/MM/yyyy")
                if (formatted === formattedDay) {
                    return (
                        <div
                            key={event.id}
                            className="my-1 overflow-hidden whitespace-nowrap rounded-sm bg-blue-500 px-1 py-1 text-xs font-thin uppercase text-white md:px-2 md:font-bold"
                        >
                            {event.title}
                        </div>
                    )
                }
            })
        }
    }

    const style = () => {
        if (format(day, "ddMMyyyy") === format(new Date(), "ddMMyyyy")) {
            return "bg-stone-400 font-bold"
        }

        if (day.getTime() < now) {
            return "bg-stone-100 text-stone-300"
        }

        return "bg-stone-300 font-bold"
    }

    return (
        <div
            className={`h-20 overflow-scroll rounded-sm text-center md:p-2 md:text-left lg:h-32 ${style()}`}
        >
            <div>{format(day, "d")}</div>
            <div>{todaysEvents()}</div>
        </div>
    )
}

export default Day
