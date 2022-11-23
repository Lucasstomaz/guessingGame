// ------ VARIAVEIS -------

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')
let randomNumber = Math.round(Math.random() * 10)
//round arrendonda pro que ta mais perto

let xAttempts = 1
// numero de tentativas

// ------ EVENTOS ----

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// a função tryclick  e reservai ser executada ao clicar com a função do js "addeventlistener"

//  ------ FUNÇ --------

function handleTryClick(event) {
  event.preventDefault()
  // funçao js que bloqueio o padrão do button no form

  const inputNumber = document.querySelector('#inputNumber')
  //pegando a tag com id inputNumber do html

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector(
      'h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`
  }

  if (
    Number(inputNumber.value) < 0 ||
    Number(inputNumber.value) > 10 ||
    (!Number(inputNumber.value) && Number(inputNumber.value) != 0)
  ) {
    alert('Por favor insira um número de 0 a 10!')
  }

  if (inputNumber.value == '') {
    alert('Para jogar, você precisa digitar um numero!')
    xAttempts = 0
    randomNumber = Math.round(Math.random() * 10)
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
