import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = todayDate
selectedDate.min = todayDate

form.onsubmit = (event) => {
    event.preventDefault()

}