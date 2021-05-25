const questMark = document.querySelector('.btn-instruction');
const shadow = document.querySelector('.wrapper2');
const instruction = document.querySelector('.instruction-container');
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
    shadow.classList.add('show-animation');
    instruction.classList.add('show');
    shadow.classList.add('show');
}
const closeInstruction = () => {
    shadow.classList.remove('show-animation');
    instruction.classList.remove('show');
    shadow.classList.remove('show');
}
// events for instruction 
questMark.addEventListener('click', showInstruction);
btnClose.addEventListener('click', closeInstruction);
window.addEventListener('click', e => {e.target === shadow ? closeInstruction() : false});

// initial conditions
let measurement = 0;
let msec = 0;
let sec = 0;
let min = 0;
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
    time.innerHTML = `last time: ${min}:${sec}:${msec}`;
}
// add times to archive
const saveTime = (list, x) => {
    list.classList.add('background');
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`Time number ${x}: ${min}:${sec}:${msec}`);
    node.appendChild(textnode);
    list.appendChild(node);
}
const stopStopWatch = () => { 
    stopTime = true;
    
    measurement = measurement + 1;

    if(msec > 0 || sec > 0 || min > 0 ) {
        showLastTime(lastTime);
        saveTime(archiveList, measurement);
    }

    msec = 0;
    sec = 0;
    min = 0;
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
        msec = parseInt(msec);
        sec = parseInt(sec);
        min = parseInt(min);

        msec = msec + 1;

        if(msec == 100) {
            msec = 0;
            sec = sec + 1;
        }
        if(sec == 60) {
            msec = 0;
            sec = 0;
            min = min + 1;
        }

        if (msec < 10 || msec == 0) {
            msec = '0' + msec;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        mainTime.innerHTML = `${min}:${sec}:${msec}`;
        setTimeout('timer()', 10);
    }
}
// function for archive 
const showArchive = () => {
    archiveList.classList.toggle('show-list-animation');
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
    colorsToChoice.classList.toggle('show-animation');
    colorsToChoice.classList.toggle('show');
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

// zeby sie tak nie pultał      





