import { FC } from "react"

interface DayProps {
    day: number
}

const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

const DayHeader: FC<DayProps> = ({ day }) => {
    return (
        <div
            className={`flex h-8 items-center justify-center rounded-sm bg-stone-500 text-xs text-white lg:h-12 lg:text-base`}
        >
            <span className="hidden md:inline">{dayNames[day]}</span>
            <span className="inline md:hidden">{dayNames[day][0]}</span>
        </div>
    )
}

export default DayHeader
