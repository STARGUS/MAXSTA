window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    if (document.getElementById("LoginUser").classList.contains("show")) {
        if (document.querySelector(".entrance > .line").classList.contains("Rectangle-1")) {
            console.log("все ок")
        } else {
            document.querySelector(".entrance > .line").classList.add("Rectangle-1");
            document.querySelector(".registration > .line").classList.remove("Rectangle-2");
        }
    }
    document.querySelector(".registration").addEventListener("click", () => {
        document.querySelector(".registration > .line").classList.add("Rectangle-2");
        document.querySelector(".entrance > .line").classList.remove("Rectangle-1");
        document.getElementById("LoginUser").classList.remove("show");
        document.getElementById("LoginUser").classList.add("hide");
        document.getElementById("Registration").classList.add("show");
        document.getElementById("Registration").classList.remove("hide");
        document.querySelector(".wrapper").classList.add("reg");
    });
    document.querySelector(".entrance").addEventListener("click", () => {
        document.querySelector(".registration > .line").classList.remove("Rectangle-2");
        document.querySelector(".entrance > .line").classList.add("Rectangle-1");
        document.getElementById("LoginUser").classList.add("show");
        document.getElementById("LoginUser").classList.remove("hide");
        document.querySelector(".wrapper").classList.remove("reg");
        document.getElementById("Registration").classList.remove("show");
        document.getElementById("Registration").classList.add("hide");
    });

    document.querySelector(".check").addEventListener("click", () => {
        document.querySelector(".checkbox")[checked];
    })

});