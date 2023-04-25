const tempC = Number.parseFloat(prompt("введите температуру в градусах Цельсия"));
function convertTemp(t) {
    const tempF = (9 / 5) * t + 32;
    return tempF.toFixed(1);
}
alert(`Цельсий: ${tempC}, Фаренгейт: ${convertTemp(tempC)}`);