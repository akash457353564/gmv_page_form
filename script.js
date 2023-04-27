
const user_name = document.querySelector('#name_field');
const user_mob = document.querySelector('#mob_num');
const wedding_date = document.querySelector('#wedding_date')

const name_err = document.querySelector('#name_err');
const phn_err = document.querySelector('#phn_err');

const submit_btn = document.querySelector('#form_submit_btn');

wedding_date.type = 'date'

user_name.addEventListener('input', ()=>{
    name_err.style.display = 'none'
})

user_mob.addEventListener('input', ()=>{
    phn_err.style.display = 'none'
})

submit_btn.addEventListener('click', (e)=>{
    const alphabets = /^[a-zA-Z]+$/
    if(!user_name.value){
        e.preventDefault()
        name_err.style.display = 'flex'
    } else if(!user_mob.value){
        e.preventDefault()
        phn_err.style.display = 'flex'
    } else if (user_mob.value.match(alphabets) || user_mob.value.length > 10 || user_mob.value.length < 10 || user_mob.value.startsWith('1') || user_mob.value.startsWith('2') || user_mob.value.startsWith('3') || user_mob.value.startsWith('4') || user_mob.value.startsWith('5')){
        e.preventDefault()
        phn_err.style.display = 'flex'
        phn_err.textContent = 'Please enter a valid phone number'
    }
})
