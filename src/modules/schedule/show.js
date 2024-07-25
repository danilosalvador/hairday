import dayjs from "dayjs"
import { scheduleListByDay } from "../../services/schedule-list-by-day.js"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export async function scheduleShow({ date }) {
    try {
        const dailySchedules = await scheduleListByDay({ date })

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")

            const time = document.createElement("strong")
            const name = document.createElement("span")
            const cancelIcon = document.createElement("img")

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            item.append(time, name, cancelIcon)

            const hour = dayjs(schedule.when).hour()

            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
        })
    } catch (error) {
        console.log(error)
        alert("Não foi possível carregar a lista de agendamentos.")
    }
}