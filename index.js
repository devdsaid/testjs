let mode = 'time';
const date = document.querySelector('#date');
const timer = document.querySelector('#time');
const result = document.querySelector('.result');

let resultDate = function(time) {
    let now = new Date()
    switch (time) {
        case 'date':
            return now.toLocaleDateString();
        case 'time':
            return now.toLocaleTimeString();
        default:
            return now.toLocaleTimeString()
    }
}

let resultFunction = function(t) {
    return function() {
        mode = t
        update()
    }
}

function update() {
    result.textContent = resultDate(mode)
}

setInterval(update, 1000)
update()


date.onclick = resultFunction('date')
timer.onclick = resultFunction('time')