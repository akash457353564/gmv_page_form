let userName;
let userWeddingDate;
let userPhone;

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

const final_name = document.querySelector('#final_name');
const final_date = document.querySelector('#final_date');
const final_num = document.querySelector('#final_num')

const final_submit_btn =document.querySelector('#final_form_submit')

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
    } else {
        userName = user_name.value;
        userWeddingDate = wedding_date.value;
        userPhone = user_mob.value;
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




gmv_form.addEventListener('submit', () => {
    otp_modal.style.display = 'flex'
    send_otp()
    document.querySelector('.sent_otp_to_txt').textContent = `We have sent OTP to ${user_mob.value}`
})

let verify_otp_status;

function callback(status){
    verify_otp_status = status
}

let verify_otp = function(callback){
    let data = JSON.stringify(
        {
            "mobile": `${Number(user_mob.value)}`,
            "isd_code": "91",
            "otp": `${Number(otp_field.value)}`
        }
    )

    let request = new XMLHttpRequest();
    let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`);
    let url = endPoint.toString();
    request.open('POST', url, true)
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        callback(request.status)

    }
    request.send(data);
}





otp_sub_btn.addEventListener('click', (e) => {
    e.preventDefault()
    verify_otp(callback)

    if (!otp_field.value) {
        //e.preventDefault()
        otp_err.style.display = 'flex'
    }  

    

    setTimeout(function(){
         if(otp_field.value && verify_otp_status == 200){
             console.log('IN 200:', verify_otp_status)
             otp_form_block.style.display = 'none'
             validating_otp_block.style.display = 'none'
             succ_block.style.display = 'flex'

             final_name.value = userName
             final_num.value =  userPhone
             final_date.value = userWeddingDate
            final_submit_btn.click()
             
            
        } else if(otp_field.value && verify_otp_status != 200){
            console.log('IN !200',verify_otp_status)
            //e.preventDefault()
            validating_otp_block.style.display = 'none'
                    otp_form_block.style.display = 'flex'
                    otp_err.textContent = 'Please enter correct OTP'
                    otp_err.style.display = 'flex'
        }
    }, 1000)

    
})

/////////////////////////////////////////////////////////SLIDER CODE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function venue_vendor() {

    let splides = $('.venue_vendor');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 3,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: 'slider', // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
venue_vendor();


function decoration_vendor() {

    let splides = $('.decoration_vendor');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 3,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: 'slider', // 'slider' or false
            pagination: false, // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
decoration_vendor();

function slider2() {

    let splides = $('.slider2');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 2,
            perMove: 1,
            focus: 0, // 0 = left and 'center' = center
            type: 'loop', // 'loop' or 'slide'
            gap: '2em', // space between slides
            arrows: false, // 'slider' or false
            pagination: 'slider', // 'slider' or false
            speed: 600, // transition speed in miliseconds
            dragAngleThreshold: 30, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: true, // go back to beginning when reach end
            rewindSpeed: 400,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: false, // true removes empty space from end of list
            autoplay: true,
            breakpoints: {
                991: {
                    // Tablet
                    perPage: 1,
                    gap: '4vw',
                },
                767: {
                    // Mobile Landscape
                    perPage: 1,
                    gap: '4vw',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1,
                    gap: '4vw',
                }
            }
        }).mount();
    }

}
slider2();



Array.from(document.querySelectorAll('#left-arrow')).forEach(function (el) {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.splide__arrow--prev')).forEach((el) => {
            el.click()
        })
    })
})


Array.from(document.querySelectorAll('#right-arrow')).forEach(function (el) {
    el.addEventListener('click', () => {
        Array.from(document.querySelectorAll('.splide__arrow--next')).forEach((el) => {
            el.click()
        })
    })
})




Array.from(document.querySelectorAll('.splide__arrow--next')).forEach((el) => {
    el.style.display = 'none';
})

Array.from(document.querySelectorAll('.splide__arrow--prev')).forEach((el) => {
    el.style.display = 'none';
})
