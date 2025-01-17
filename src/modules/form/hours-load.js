import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    hours.innerHTML = ""

    const busySchedules = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    const opening = openingHours.map((hour) => {
        const [ scheduleHour, _ ] = hour.split(":")

        const isHourIsPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !busySchedules.includes(hour) && !isHourIsPast

        return {
            hour,
            available
        }
    })

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00") {
            hourHeader("Manhã")
        } else if (hour === "12:00") {
            hourHeader("Tarde")
        } else if (hour === "18:00") {
            hourHeader("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}

function hourHeader(title) {
    const li = document.createElement("li")

    li.classList.add("hour-period")
    li.textContent = title

    hours.append(li)
}