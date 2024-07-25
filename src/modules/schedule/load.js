import { hoursLoad } from "../form/hours-load"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value

    await scheduleShow({ date })
    hoursLoad({ date })
}