const day = document.getElementById("day");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();
console.log(currentYear);

/* Шаблонные литералы для года*/ 
const newYear = new Date(`1 Jan ${currentYear+1} 00:00:00`);
console.log(newYear);

/* каждую секунду вызывается ф-ия. Unix time с 1970года. Конвертер*/
function countdownTimer() {
    const todayDate = Date.now();
    console.log(todayDate);
    // получим разницу между Новым годом и текущей датой Unix
    const gap = newYear - todayDate;
    console.log(gap);

    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24); //по модулю остаток от 24часов
    const m = Math.floor((gap / 1000 / 60 ) % 60); // по модулю остаток от 60мин
    const s = Math.floor((gap/ 1000 ) % 60);  // по модулю остаток от 60сек
    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);

    //встраиваем все в HTML (одноименные теги там уже имеются)
    day.innerHTML = d < 10 ? "0" + d : d;
    hrs.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;

} 

//функция вызывается только один раз! 
//countdownTimer();

// установим таймер, по которому будет вызываться наша функция, 
// которая будет вызывать обновление - каждую 1000милисекунду
setInterval(countdownTimer, 1000);


