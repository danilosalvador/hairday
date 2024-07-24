import { schedulesDay } from "../schedule/load.js"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()