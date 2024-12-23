const result_text = document.getElementById("result")
const number_one = document.getElementById("number_one")
const number_two = document.getElementById("number_two")
const calc_btn = document.getElementById("calc_btn")

calc_btn.onclick = () => {
    const num_1 = Number(number_one.value)
    const num_2 = Number(number_two.value)
    result_text.innerHTML = num_1 + num_2
}