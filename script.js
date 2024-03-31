const formElm = document.querySelector('#newsletter')
formElm.style.padding = '2rem'
formElm.style.backgroundColor = '#f0f0f0'

const textPole = document.querySelector('#email')


textPole.addEventListener('input', (event) => {
    const vyplnenyEmail = textPole.value
    const maZavinac = vyplnenyEmail.includes('@')
    console.log(vyplnenyEmail)

    //Zkouším, zda  i jde udělat podmínka na to, zda zavináč v emailu je nebo není
    if(maZavinac === false) {
        textPole.classList.add('red-border')
        console.log("Funguju na zavináč")
    }

    //zde chci spojit podmínku na to, že je prázdné pole a zároveň neobsahuje zavináč
    if(vyplnenyEmail === '' || !maZavinac) {
        textPole.classList.add('red-border')
        console.log("Funguju")
    }
})


formElm.addEventListener('submit', (event) => {
    event.preventDefault()
    formElm.textContent = 'Děkujeme za Váš zájem, nyní Vás budeme každý týden bombardovat s nabídkami, které nikdy nevyužijete :)'
})

