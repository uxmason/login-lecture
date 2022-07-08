"use strict"

const id = document.querySelector("#id");
const psword = document.querySelector("#password");
const loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", () => {
    const req = {
        id: id.value,
        psword: psword.value
    }
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href="/"
        }else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.err(new Error('로그인 중 에러 발생'))
    })
})