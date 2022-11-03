// dichiarazione variabili-costanti
const inputMailEl = document.getElementById("usermail");
const btnVerify = document.getElementById("btn_verify");
const users = ["aldo@gmail.com", "giovanni@gmail.com", "giacomo@gmail.com"];
const boxTrueEl = document.querySelector(".check_box1")
const boxFalseEl = document.querySelector(".check_box2");

// verifico email al click
btnVerify.addEventListener("click", function () {
    let check = 0;
    let nome = "";
    const listName = [ "Aldo" ,"Giovanni", "Giacomo"]

    // ciclo tra la lista delle email e controllo appartenza alla lista
    for (let i = 0; i < users.length; i++) {
        if (inputMailEl.value === users[i]) {
            check = 1;
            nome = listName[i];
        }
    }

    // messaggi condizionati dall'appartenenza alla lista di mail
    if (check === 1) {
        boxTrueEl.innerHTML = `${nome} sei in lista &#128526`;
        boxTrueEl.classList.remove("d-none");
        boxFalseEl.classList.add("d-none");
    } else{
        boxTrueEl.classList.add("d-none");
        boxFalseEl.classList.remove("d-none");
    }
})