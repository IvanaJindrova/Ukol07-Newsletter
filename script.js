const formElm = document.querySelector('#newsletter')

formElm.addEventListener('submit', () => {
    //formElm.style.display = 'none'
    //document.body.innerHTML += `<p>Úspěšně jste se přihlásili k odběru e-mailů na adresu: ${email}. Děkujeme!</p>`
    //formElm.value.add = 'Děkujeme za Váš zájem, nyní Vás budeme každý týden bombardovat s nabídkami, které nikdy nevyužijete :)'
    formElm.textContent = 'Děkujeme za Váš zájem, nyní Vás budeme každý týden bombardovat s nabídkami, které nikdy nevyužijete :)'
 // alert('Děkujeme za Váš zájem, nyní Vás budeme každý týden bombardovat s nabídkami, které nikdy nevyužijete :)');
})

