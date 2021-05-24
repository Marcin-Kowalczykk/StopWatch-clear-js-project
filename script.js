const questMark = document.querySelector('.btn-instruction');
const instruction = document.querySelector('.wrapper2');
const btnClose = document.querySelector('.btn-close');
const mainTime = document.querySelector('.time-stopwatch');
const lastTime = document.querySelector('.time-to-archive');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');
const btnArchive = document.querySelector('.btn-archive');
const btnResetAll = document.querySelector('.btn-x');
const archiveList = document.querySelector('.archive-list');
// colors 
const palette = document.querySelector('.btn-palette');
const colorsToChoice = document.querySelector('.colors');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const white = document.querySelector('.white');
// css variables
var color = document.querySelector(':root');

// show and remove instruction
const showInstruction = () => {
    instruction.classList.add('show-instruction');
}
const closeInstruction = () => {
    instruction.classList.remove('show-instruction');
}
// events for instruction 
questMark.addEventListener('click', showInstruction);
btnClose.addEventListener('click', closeInstruction);

// initial conditions
let measurement = 0;
let sec = 0;
let min = 0;
let hour = 0;
let stopTime = true;
// functions for stopwatch
const startStopWatch = () => {
    if (stopTime == true) {
        stopTime = false;
        timer();
    }
}
const pauseStopWatch = () => {
    if(stopTime == false) {
        stopTime = true;
    }
}
const showLastTime = time => {
    time.style.visibility = 'visible';
    time.innerHTML = `last time: ${hour}:${min}:${sec}`;
}
// add times to archive
const saveTime = (list, x) => {
    archiveList.classList.add('background');
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Time number ${x}: ${hour}:${min}:${sec}`);
    node.appendChild(textnode);
    list.appendChild(node);
}
const stopStopWatch = () => { 
    stopTime = true;
    
    measurement = measurement + 1;

    showLastTime(lastTime);
    saveTime(archiveList, measurement);

    sec = 0;
    min = 0;
    hour = 0;
    mainTime.innerHTML = `00:00:00`;
}
const resetAll = () => {
    stopStopWatch();
    archiveList.classList.remove('background');
    measurement = 0;
    lastTime.innerHTML = '';
    archiveList.innerHTML = ''; 
}
const timer = () => {
    if (stopTime == false) {
        lastTime.style.visibility = 'hidden';
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);

        sec = sec + 1;

        if(sec == 60) {
            sec = 0;
            min = min + 1;
        }
        if(min == 60) {
            sec = 0;
            min = 0;
            hour = hour + 1;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hour < 10 || hour == 0) {
            hour = '0' + hour;
        }

        mainTime.innerHTML = `${hour}:${min}:${sec}`;
        setTimeout('timer()', 1000);
    }
}
// function for archive 
const showArchive = () => {
    archiveList.classList.toggle('show-list');
}

// events for buttons 
btnStart.addEventListener('click', startStopWatch);
btnPause.addEventListener('click', pauseStopWatch);
btnStop.addEventListener('click', stopStopWatch);
btnArchive.addEventListener('click', showArchive);
btnResetAll.addEventListener('click', resetAll);

// functions for colors
const showColors = () => {
    colorsToChoice.classList.toggle('show-colors');
}
const getColor = () => {
    // var CssColor = getComputedStyle(color);
    // CssColor.getPropertyValue('--elements-color');
}
const setColor = c => {
    color.style.setProperty('--elements-color', c);
}
// events for colors
palette.addEventListener('click', showColors);
red.addEventListener('click', () => {
    setColor('rgb(199, 26, 14)')
});
blue.addEventListener('click', () => {
    setColor('rgba(29, 88, 199, 0.774)')
});
green.addEventListener('click', () => {
    setColor('rgb(15, 185, 0)')
});
yellow.addEventListener('click', () => {
    setColor('rgb(189, 179, 39)')
});
white.addEventListener('click', () => {
    setColor('white')
});








