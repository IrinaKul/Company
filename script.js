let inputName = document.getElementById('nameContact'),
    message = document.getElementById('messageContact');
let inputEmail = document.getElementById('emailContact');
let formContact = document.getElementById('formContact');

const anchors = document.querySelectorAll('a[href*="#"]');

//навигация
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

//меню-бургер
menu.onclick = function turnMenu() {
    let menuOn = document.getElementById('myTopnav');

    if (!menuOn.classList.contains('responsive')) {
        menuOn.classList.add('responsive');
    } else {
        menuOn.classList.remove('responsive');
    }
}

//форма контактов
if (localStorage.length != 0) {
    inputName.value = localStorage.getItem("name");
    inputEmail.value = localStorage.getItem("email");
    message.value = localStorage.getItem("message");
}

formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputName.value === '' || inputEmail.value === '' || message.value === '') {
        alert('Необходимо ввести данные');
    } else {
        alert('Привет,' + inputName.value);
        localStorage.setItem("name", inputName.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("message", message.value);
    }
})
