const buttonRandom = document.querySelector('.button-random')
const mensage = document.querySelector('.mensage')
const drawnNumber = document.querySelector('.drawn-number')

function clicou() {
    const firstValue = document.querySelector('.first-value').value;
    const secondValue = document.querySelector('.second-value').value;

    const randomNumber = Math.random() * (firstValue, secondValue)
    const result = randomNumber.toFixed(0);
    mensage.innerHTML = 'O número sorteador foi: <br>'
    drawnNumber.innerHTML = result
}

buttonRandom.addEventListener('click', clicou)