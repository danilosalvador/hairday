const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //Obtém o li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if (isConfirm) {
                    
                }
            }
        }
    })
})