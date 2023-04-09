const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc-top");
const dropdown2 = document.querySelector(".dropdown2");
const btnDrop2 = document.querySelector(".bloc-top2");
const dropdown3 = document.querySelector(".dropdown3");
const btnDrop3 = document.querySelector(".bloc-top3");
const dropdown4 = document.querySelector(".dropdown4");
const btnDrop4 = document.querySelector(".bloc-top4");



let toggleIndex = {
    val: 0
}
let toggleIndex2 = {
    val: 0
}
let toggleIndex3 = {
    val: 0
}
let toggleIndex4 = {
    val: 0
}




btnDrop3.addEventListener("click", () => {
    dropdownFunct(dropdown3, btnDrop3, toggleIndex3)
})

btnDrop4.addEventListener("click", () => {
    dropdownFunct(dropdown4, btnDrop4, toggleIndex4)
})

btnDrop2.addEventListener("click", () => {
    dropdownFunct(dropdown2, btnDrop2, toggleIndex2)
})

btnDrop.addEventListener("click", () => {
    dropdownFunct(dropdown, btnDrop, toggleIndex)
})




function dropdownFunct(dropdown, btnDrop, toggleIndex) {
    if (toggleIndex.val === 0) {
        dropdown.style.height = `${dropdown.
            scrollHeight}px`;
        toggleIndex.val++;
    } else {
        dropdown.style.height = `${btnDrop.
            scrollHeight}px`;
        toggleIndex.val--;
    }

}

// function bloc-top() {
//     const elements = document.querySelectorAll(".bloc-top:active");
//     for (let element of elements) {
//         element.classList.toggle("bloc-top:active");
//     }
// }

// const btnDrop = document.querySelector(".bloc-top");
// btnDrop.addEventListener("click", bloc - top);





