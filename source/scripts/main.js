const number = document.getElementById('number');
const multiplicarButton = document.getElementById('multiplicar');

function multiplicar() {
    const newResult = number.innerHTML * 2;
    number.innerHTML = newResult;
}

multiplicarButton.addEventListener('click', multiplicar);