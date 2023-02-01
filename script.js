let enterBill = document.querySelector("#bill-amount")
generateBill = document.querySelector(".generate")

let addPeople = document.querySelector(".add-people");
let removePeople = document.querySelector(".remove-people");
let noOfPeople = document.querySelector(".people");
let billAmount = 0
let people = 1

addPeople.addEventListener("click", () => {

    noOfPeople.innerHTML = ++people;
});

removePeople.addEventListener("click", () => {
    --people;
    people < 1 ? people = 1 : people;
    noOfPeople.innerHTML = people
});

let tipAmount = 0

let but = document.querySelectorAll(".tip-button")
but.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.value)
        tipAmount = element.value
        but.forEach(nav => {
            nav.classList.remove("tip-button-active");
        })
        element.classList.add("tip-button-active")
    });
})

generateBill.addEventListener("click", () => {
        if (generateBill.innerHTML == "Generate Bill" && (document.querySelector("input").value > 0)) {
            billAmount = enterBill.value
            let tip = Math.floor(((tipAmount / 100) * billAmount) / people)
            console.log(tip)
            document.querySelector(".tip-amount").innerHTML = "₹ " + tip + ".00"
            let totalAmount = Math.floor(billAmount / people)
            document.querySelector(".total").innerHTML = "₹ " + Math.floor(((tipAmount / 100) * billAmount) + totalAmount) + ".00"
            generateBill.innerHTML = "Reset"
        } else if (generateBill.innerHTML == "Reset") {
            let tip = 0
            tipAmount = 0
            let totalAmount = 0
            document.querySelector(".tip-amount").innerHTML = "₹ " + tip + ".00"
            document.querySelector(".total").innerHTML = "₹ " + totalAmount + ".00"
            generateBill.innerHTML = "Generate Bill"
            document.querySelector("input").value = ""
            but.forEach(nav => {
                nav.classList.remove("tip-button-active");
            })
            people = 1
            noOfPeople.innerHTML = people
        }
    } 

)
