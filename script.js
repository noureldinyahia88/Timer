let conutDown = new Date('sep 13, 2023 23:59:59').getTime()

let counter = setInterval(()=>{
    let DateNow = new Date().getTime();

    let dateDiff = conutDown - DateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60))
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60 * 24))/(1000 *60))
    let secounds = Math.floor((dateDiff % (1000 * 60 * 60 * 24))/(1000))
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector('.minuts').innerHTML = minuts < 10 ? `0${minuts}` : `${minuts} Min`
    document.querySelector('.secounds').innerHTML = secounds < 10 ? `0${secounds}` : `${secounds} Sec`

    if(dateDiff < 0) {
        clearInterval(counter)
    }
}, 1000) 