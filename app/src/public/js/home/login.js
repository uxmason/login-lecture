"use strict"

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

console.log(id)

loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        psword: password.value
    }
})