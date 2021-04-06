const textContainer = document.querySelector('.text-container');
const button = document.querySelector('.button');
const body = document.querySelector('body');
const links = document.querySelector('.nav-link');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

button.addEventListener('click', () => {
    textContainer.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
    if(button.innerHTML === 'enter light-mode') {
        button.innerHTML = 'enter dark-mode'
        button.classList.remove('btn-light')
        body.classList.remove('dark-background')
        } else {
            button.innerHTML = 'enter light-mode'
            button.classList.add('btn-light')
            body.classList.add('dark-background')
        }
});


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tabs-inner-content-text');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('show')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('show')
        tab.classList.add('active')
    })
});







