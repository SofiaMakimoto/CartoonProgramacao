let date = new Date ();
function getCurrentDate(){
    let monthDay = date.getDate(); // 1-31
    let arrayDay = new Array(
        'DOMINGO','SEGUNDA','TERÇA','QUARTA','QUINTA','SEXTA','SÁBADO'
       );
    let weekday = arrayDay[date.getDay()];
    document.getElementById('data').innerHTML = weekday + " " + monthDay;
}
getCurrentDate();

function getCurrentHour() {  
    let hour = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let str_hour = hour + ':' + minutes;
    document.getElementById('hour').innerHTML = str_hour;
}
getCurrentHour()

function createSchedule() {
    let timeOfTheDay
    let hour = date.getHours()
    let countColor = 0
    for (let index = 0; index < 24; index++) {
        let a = index
        countColor = countColor  >= 3 ? 0 : countColor
        timeOfTheDay = document.createElement("BUTTON");
        let divClass = document.createAttribute("class");
        divClass.value = "hourOfTheDay"
        timeOfTheDay.attributes.setNamedItem(divClass)
        if (a == hour){
            timeOfTheDay.style.backgroundColor ="#000000"
            if (countColor == 0){
                timeOfTheDay.style.color ="#009ade"
            } else if (countColor == 1) {
                timeOfTheDay.style.color ="#ec0080"
            } else if (countColor == 2){
                timeOfTheDay.style.color ="#ffea00 "
            }
        } else {
            if (countColor == 0){
                timeOfTheDay.style.backgroundColor ="#009ade"
            } else if (countColor == 1) {
                timeOfTheDay.style.backgroundColor ="#ec0080"
            } else if (countColor == 2){
                timeOfTheDay.style.backgroundColor ="#ffea00"
            }
        }

        countColor++
        timeOfTheDay.innerHTML = a = a < 10 ? '0'+ a + "h" : a + "h"
        document.getElementById("schedule").appendChild(timeOfTheDay)
            
    }
    let nextDay = document.createElement("BUTTON");
    let nextDayId = document.createAttribute("id");
    nextDayId.value = "nextDayButton"
    nextDay.attributes.setNamedItem(nextDayId)
    nextDay.innerHTML = ">";
    document.getElementById("schedule").appendChild(nextDay)
}
createSchedule();

function viewHourSchedule(){
    let aside = document.getElementById("selectedHour")
    let hour = document.getElementById("displaySelectedHour")
    let button = document.querySelectorAll(".hourOfTheDay")
    for (let index = 0; index < button.length; index++) {
        let b = index
        button[index].onclick = () => {
            aside.style.display = 'block'
            aside.style.backgroundColor = button[index].style.backgroundColor
            if (b < 10){
                hour.innerHTML = "0" + b + "h"
            } else {
                hour.innerHTML = b + "h"
            }            
        }
    }
}
viewHourSchedule()

function goTonextDay() {
    let buttonNextDay = document.getElementById("nextDayButton");
    buttonNextDay.onclick = () => {
        let monthDay = date.getDate() + 1;
        let arrayDay = new Array(
            'DOMINGO','SEGUNDA','TERÇA','QUARTA','QUINTA','SEXTA','SÁBADO'
        );
        let weekday = arrayDay[date.getDay() + 1];       
        document.getElementById('data').innerHTML = weekday + " " + monthDay;
    }
}
goTonextDay()


  