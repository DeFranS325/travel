(function () {
    console.log('1) Слайдер изображений в секции destinations + 50\n'+
    '2) Нажатие на кнопку Login(кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n'+
    '3) Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету(То есть нажатие не закрывает модал а просто меняет его наполнение). + 25\n\n' +
        'ИТОГО: 125'); 
}());

(function MenuAndLogin() {
    const burgerOpen = document.querySelector('.burger-menu-open');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('.main-menu');
    const bodyBefore = document.body;
    const menuButton = document.querySelectorAll('.nav-item');
    const loginButton = document.getElementById('login');
    const burgerLoginButton = document.getElementById('burgerLogin');
    const loginPanel = document.querySelector('.login-section');
    const linkGoToSignUp = document.getElementById('goto-signup');
    const linkGoToPopUp = document.getElementById('goto-popup');
    const popup = document.querySelector('.popup');
    const signup = document.querySelector('.signup');

    //Click outside burger menu or login panel
    bodyBefore.addEventListener('click', () => {
        if (event.target.className == 'body-before-active') {
            menu.classList.remove('main-menu-active');
            bodyBefore.classList.remove('body-before-active');
            loginPanel.classList.remove('login-section-open');
        }
    });

    for (let i = 0; i < menuButton.length; i++) {
        if (menuButton[i].classList.value.indexOf('burgerLogin') < 0) {
            menuButton[i].addEventListener('click', () => {
                menu.classList.remove('main-menu-active');
                bodyBefore.classList.remove('body-before-active');
            });
        }
        else {
            menuButton[i].addEventListener('click', () => {
                menu.classList.remove('main-menu-active');
            });
        }
            
    }

    //Open burger menu
    burgerOpen.addEventListener('click', () => {
        menu.classList.add('main-menu-active');
        bodyBefore.classList.add('body-before-active');
    });

    //Close burger menu
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('main-menu-active');
        bodyBefore.classList.remove('body-before-active');
    });

    //Click LOGIN button in header
    loginButton.addEventListener('click', () => {
        signup.classList.remove('signup-visible');
        popup.classList.remove('popup-disable');
        loginPanel.classList.add('login-section-open');
        bodyBefore.classList.add('body-before-active');
    });

    //Click ACCOUNT button in burger menu
    burgerLoginButton.addEventListener('click', () => {
        signup.classList.remove('signup-visible');
        popup.classList.remove('popup-disable');
        loginPanel.classList.add('login-section-open');
        bodyBefore.classList.add('body-before-active');
    });

    //Show Registry panel
    linkGoToSignUp.addEventListener('click', () => {
        popup.classList.add('popup-disable');
        signup.classList.add('signup-visible');
    });

    //Show Login panel
    linkGoToPopUp.addEventListener('click', () => {
        signup.classList.remove('signup-visible');
        popup.classList.remove('popup-disable');
    });
}());

//Display of entered login information
(function alertSignInForm() {
    const signInForm = document.getElementById('sign-in-form');
    signInForm.addEventListener('submit', () => {
        event.preventDefault();
        const email = 'E-mail: ' + document.getElementById('email').value;
        const pass = 'Password: ' + document.getElementById('password').value;
        alert(email + '\n' + pass);
    });
}());