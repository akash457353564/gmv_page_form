
const gmv_form = document.querySelector('#gmv_v3')

const user_name = document.querySelector('#name_field');
const user_mob = document.querySelector('#mob_num');
const wedding_date = document.querySelector('#wedding_date')

const name_err = document.querySelector('#name_err');
const phn_err = document.querySelector('#phn_err');

const submit_btn = document.querySelector('#form_submit_btn');

const otp_modal = document.querySelector('.otp_modal_wrapper')
const modal_close_btn = document.querySelector('.close_btn')
const otp_field = document.querySelector('#otp_field')

const otp_err = document.querySelector('#otp_err')

const otp_sub_btn = document.querySelector('#otp_submit')

const otp_form_block = document.querySelector('.otp_form_block');
const validating_otp_block = document.querySelector('.validating_otp_block');
const succ_block = document.querySelector('.success_block');

wedding_date.type = 'date'

user_name.addEventListener('input', () => {
    name_err.style.display = 'none'
})

user_mob.addEventListener('input', () => {
    phn_err.style.display = 'none'
})

submit_btn.addEventListener('click', (e) => {
    const alphabets = /^[a-zA-Z]+$/
    if (!user_name.value) {
        e.preventDefault()
        name_err.style.display = 'flex'
    } else if (!user_mob.value) {
        e.preventDefault()
        phn_err.style.display = 'flex'
    } else if (user_mob.value.match(alphabets) || user_mob.value.length > 10 || user_mob.value.length < 10 || user_mob.value.startsWith('1') || user_mob.value.startsWith('2') || user_mob.value.startsWith('3') || user_mob.value.startsWith('4') || user_mob.value.startsWith('5')) {
        e.preventDefault()
        phn_err.style.display = 'flex'
        phn_err.textContent = 'Please enter a valid phone number'
    }
})

modal_close_btn.addEventListener('click', () => {
    otp_modal.style.display = 'none'
})

const send_otp = function () {
    let data = JSON.stringify(
        {
            "isd_code": "91",
            "mobile": `${Number(user_mob.value)}`,
            "medium": "SMS"
        }
    )

    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/otp/send/`);
    let url = endPoint.toString();
    request.open('POST', url, true)
    request.setRequestHeader("Content-Type", "application/json");

    request.send(data);
}

let verify_otp_status;



gmv_form.addEventListener('submit', () => {
    otp_modal.style.display = 'flex'
    send_otp()
    document.querySelector('.sent_otp_to_txt').textContent = `We have sent OTP to ${user_mob.value}`
})

otp_sub_btn.addEventListener('click', (e) => {
    if (!otp_field.value) {
        e.preventDefault()
        otp_err.style.display = 'flex'
    } else if (otp_field.value) {
        e.preventDefault()
        otp_form_block.style.display = 'none'
        validating_otp_block.style.display = 'flex'

        let data = JSON.stringify(
            {
                "mobile": `${Number(user_mob.value)}`,
                "isd_code": "91",
                "otp": `${otp_field.value}`
            }
        )

        let request = new XMLHttpRequest();
        let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`);
        let url = endPoint.toString();
        request.open('POST', url, true)
        request.setRequestHeader("Content-Type", "application/json");

        request.onload = function () {
            verify_otp_status = request.status

            if (verify_otp_status == 200) {
                validating_otp_block.style.display = 'none'
                succ_block.style.display = 'flex'
                console.log('Correct')
            } else {
                validating_otp_block.style.display = 'none'
                otp_form_block.style.display = 'flex'
                otp_err.textContent = 'Please enter correct OTP'
                otp_err.style.display = 'flex'
            }
        }

        request.send(data);

    }
})