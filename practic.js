const day = document.querySelector('.days')
const hour = document.querySelector('.hours')
const minet = document.querySelector('.minets')
const secend = document.querySelector('.secends')

const nawYear = new Date().getFullYear()
console.log("gg",nawYear);
const nextYear = new Date(` ${nawYear + 1} 00:00:00`)



function udaitDate (){
    const nawDait = new Date()
    const diff = nextYear - nawDait

    const days = Math.floor(diff / 1000/ 60/ 60 /24)
    const hours = Math.floor(diff / 1000/ 60/ 60) %24
    const minets = Math.floor(diff / 1000/ 60)%60
    const secends = Math.floor(diff / 1000)%60



    day.innerText = days < 10 ? "0"+days : days;;
    hour.innerText = hours < 10 ? "0"+hours : hours;;
    minet.innerText = minets < 10 ? "0"+minets : minets;
    secend.innerText = secends < 10 ? "0"+secends : secends;
}
udaitDate ()
setInterval(udaitDate,1000)

