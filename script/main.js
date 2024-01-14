let time = document.getElementById("current-time");

setInterval(() => {
    let datetime = new Date();
    time.innerHTML = datetime.toLocaleTimeString();
}, 1000);

window.onload = function() {
    let datetime = new Date();
    time.innerHTML = datetime.toLocaleTimeString();
}