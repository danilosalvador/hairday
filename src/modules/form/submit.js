import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const name = document.getElementById("client")

const todayDate = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = todayDate
selectedDate.min = todayDate

form.onsubmit = (event) => {
    event.preventDefault()

    try {
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

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}