var m = 0;
var y;

function start() {
    y = setInterval(run, 100);
    m += 5
    function run() {

        if (m == 1200) {
            clearInterval(y);
            m = 0;
        }
        else {
            m += 15;
            var x = document.getElementById("car");
            x.style.marginLeft = m + 'px';
        }
    }
}
function stop() {
    clearInterval(y)
}