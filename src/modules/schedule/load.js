import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"
import { scheduleListByDay } from "../../services/schedule-list-by-day.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedules = await scheduleListByDay(date);

    scheduleShow({ dailySchedules })
    hoursLoad({ date, dailySchedules })
}