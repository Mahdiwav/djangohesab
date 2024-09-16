var historyContainer = document.getElementById('calc-history-container');
var historyBox = document.getElementById('calc-history');
function updateScroll() {
  if (historyBox.scrollHeight > historyContainer.clientHeight) {
    historyContainer.classList.add('scrollable');
  } else {
    historyContainer.classList.remove('scrollable');
  }
}

window.addEventListener('load', updateScroll);

window.addEventListener('resize', updateScroll);
function s(v) { document.getElementById('res').value = v }
function a(v) {
document.getElementById('res').value += v;
}
function e() {
try {
    var result = eval(document.getElementById('res').value);
    document.getElementById('calc-history').innerHTML += "<div>" + document.getElementById('res').value + " = " + result + "</div>";
    s(result);
} catch(e) {
    s('Error');
}
}
function x() {
    if(document.getElementById('res').value == 1) {
    document.getElementById('res').value = 0;
} else {
    document.getElementById('res').value = document.getElementById('res').value.substring(0, document.getElementById('res').value.length - 1);
}
}
function sqrt() {
    try {
        var currentValue = document.getElementById('res').value;
        if (currentValue) {
            var result = Math.sqrt(eval(currentValue));
            document.getElementById('calc-history').innerHTML += "<div>√" + currentValue + " = " + result + "</div>";
            s(result);
        }
    } catch(e) {
        s('Error');
    }
}
