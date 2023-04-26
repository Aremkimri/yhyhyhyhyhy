const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const btns = document.querySelectorAll('.hidden_btn');
const overlay = document.querySelector('.overlay');
console.log(btns);

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btns.length; i++)
btns[i].addEventListener('click', openModal);

close.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    // console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});