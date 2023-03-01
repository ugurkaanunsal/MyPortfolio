const daysElements=document.getElementById("days1");
const hoursElements=document.getElementById("hours1");
const minutesElements=document.getElementById("minutes1");
const secondsElements=document.getElementById("seconds1");


const newYears = '1 Jan 2024';

function kaan(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();


    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);

    const hours=Math.floor(totalseconds/3600)%24;

    const minutes= Math.floor(totalseconds/60)%60;

    const seconds= Math.floor(totalseconds)%60;

    daysElements.innerHTML= days;
    hoursElements.innerHTML=hours;
    minutesElements.innerHTML=minutes;
    secondsElements.innerHTML=seconds;

        console.log(days, hours, minutes, seconds);
    

        

    
}

kaan();

setInterval(kaan, 1000);
    