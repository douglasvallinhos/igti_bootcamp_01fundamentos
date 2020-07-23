window.addEventListener('load', function () {
    let timer = $('#timer');

    let count = 0;
    /*
    const interval = setInterval(()=> {
        timer.textContent = ++count;
    }, 1000);
    SetInterval pra fazer algo repetitivo em x segundos, é preciso usar o clearInterval pra parar de fazer
    setTimeout so faz uma unica vez em um tempo que configurar
*/
    const interval = setInterval(() => {
        timer.textContent = ++count;

        if (count === 15) {
            this.clearInterval(interval);
            return;
        }

        if (count % 5 === 0) {
            setTimeout(() => {
                timer.textContent = count + ',5';
            }, 500);
        }

    }, 1000);

});

function $(component) {
    return document.querySelector(component);
}

