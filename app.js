const textContainer = document.querySelector('.text-container');
const button = document.querySelector('button');
const body = document.querySelector('body');


button.addEventListener('click', function(){
    textContainer.classList.toggle('dark-mode')
    if(button.innerHTML === 'enter light-mode') {
        button.innerHTML = 'enter dark-mode';
        button.classList.remove('btn-light');
        body.classList.remove('dark-background');
        } else {
            button.innerHTML = 'enter light-mode';
            button.classList.add('btn-light');
            body.classList.add('dark-background')
        }
})


