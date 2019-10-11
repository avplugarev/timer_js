//Что сделано: немного переписан таймер, добавлены кнопки стоп, продолжить, возобновить,
// добавлено скрытие и появление нужных кнопок в нужное время.

const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const again = document.querySelector('.again')

let countSec = 0;
let countMin = 0;

//функция апдейта чисел таймера
const updateText = () =>{
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

//фцнкция таймера
function countDown() {
    let total = countSec + countMin * 60;
    const stop = document.querySelector('.stop');
    stop.style.display = 'inline'
    start.style.display = 'none'
    const timeinterval = setTimeout(countDown, 1000);

    if (total <= 0) {
        clearInterval(timeinterval);
        timer.style.display = 'none';
        message.innerHTML = '<p>I am done...</p>'
        start.innerText = 'start'
        start.style.display = 'none'
        again.style.display = 'inline'
        plus.style.display = 'none'
        minus.style.display = 'none'
        stop.style.display = 'none'
    }

    if (countSec > 0) countSec--;
    else {
        countSec = 59;
        countMin--;
    }
    updateText();

    //описана работа кнопки остановки
    stop.onclick = () => {
        clearInterval(timeinterval);
        again.style.display = 'inline';
        start.innerText = 'continue';
        start.style.display = 'inline';
        message.innerHTML = '<p>I am done?</p>';
        stop.style.display = 'none';
    }
}

//работа кнопки плюс
plus.onclick = () =>{
    if(countSec < 59) ++countSec;
    else{
        countSec = 0;
        ++countMin;
    }
    updateText()
}
//работа кнопки минус
minus.onclick = () =>{
    if(countMin <= 0 && countSec===0){
        countSec = 0;
        countMin = 0;
        return;
    }
    if(countSec > 0) --countSec;
    else{
        countSec = 59;
        --countMin;
    }
    updateText();
}

//работа кнопки старт
start.onclick = () => {
    message.innerHTML = '';
    countDown();
    plus.style.display = 'none'
    minus.style.display = 'none'
    stop.style.display = 'inline'
}

//вовозбновление таймера без перезагрузки страницы
again.onclick = () => {
    timer.style.display = 'inline-block';
    start.innerText = 'start'
    message.innerHTML = '';
    countSec = 0;
    countMin = 0;
    updateText();
    again.style.display = 'none';
    plus.style.display = 'inline'
    minus.style.display = 'inline'
    start.style.display = 'inline'
}






