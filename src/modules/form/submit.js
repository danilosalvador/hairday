import dayjs from "dayjs"

import { scheduleNew } from '../../services/schedule-new.js'

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = todayDate
selectedDate.min = todayDate

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if (!name) {
            alert("Informe o nome do cliente")
            return
        }

        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            alert("Selecione um horário!")
            return
        }

        const [hour, _] = hourSelected.innerText.split(":")
        
        const when = dayjs(selectedDate.value).add(hour, "hour")
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}