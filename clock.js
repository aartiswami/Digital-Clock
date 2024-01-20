let hour1 = document.getElementById("hours")
let munutes1 = document.getElementById("minutes")
let seconds1 = document.getElementById("seconds")
let ampm1 = document.getElementById("ampm")

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h > 12) {
        h = h - 12
        ampm = "AM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hour1.innerText = h

    munutes1.innerText = m
    seconds1.innerText = s
    ampm1, innerText = ampm
    setTimeout(() => {
        updateclock()
    }, 1000);

}
updateclock();