import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        const [ scheduleHour, _ ] = hour.split(":")

        const isHourIsPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourIsPast
        }
    })
}