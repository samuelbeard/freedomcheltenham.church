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
            className={`bg-stone-500 rounded-sm h-8 lg:h-12 text-xs lg:text-base flex justify-center items-center text-white`}
        >
            <span className="hidden md:inline">{dayNames[day]}</span>
            <span className="inline md:hidden">{dayNames[day][0]}</span>
        </div>
    )
}

export default DayHeader
