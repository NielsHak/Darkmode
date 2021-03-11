const textContainer = document.querySelector('.text-container');
const button = document.querySelector('button');
const body = document.querySelector('body');
const links = document.querySelector('.nav-link');
const hamburgerLines = document.querySelectorAll('.hamburger-line');

button.addEventListener('click', function() {
    textContainer.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    hamburgerLines.forEach.classList.toggle('.hamburger-dark');
    if(button.innerHTML === 'enter light-mode') {
        button.innerHTML = 'enter dark-mode';
        button.classList.remove('btn-light');
        body.classList.remove('dark-background');
        } else {
            button.innerHTML = 'enter light-mode';
            button.classList.add('btn-light');
            body.classList.add('dark-background');
        }
    
})



// const tabItems = document.querySelectorAll('.tab-item');

// function selectItem(e){
//     removeBorder();
//     removeShow();
//     this.classList.add('tab-border');
// }

// function removeBorder(){
//     tabItems.forEach(item => item.classList.remove('tab-border'));
// }

// tabItems.forEach(item => item.addEventListener('click', selectItem));


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
})







