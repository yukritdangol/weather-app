function show() {
    const button = document.querySelector('.weather');
    button.style.display = 'contents';
}

var cityName;

document.getElementById("button").onclick = function () {
    cityName = document.querySelector("input").value;
    document.querySelector("h2").innerHTML = cityName;
    show();
}