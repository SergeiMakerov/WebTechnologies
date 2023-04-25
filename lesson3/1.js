const temp_c = parseFloat(prompt("введите температуру в градусах Цельсия"));
function convertTemp() {
    temp_f = (9 / 5) * temp_c + 32;
    temp_f = temp_f.toFixed(1);
    return temp_f
}
alert(`Цельсий: ${temp_c}, Фаренгейт: ${convertTemp(temp_c)}`);