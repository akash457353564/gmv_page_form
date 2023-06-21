let userName;
let userWeddingDate;
let userPhone;
let userLocation;

const country_code = document.querySelector("#country_code");
country_code.value = `+91`;
country_code.setAttribute("readonly", " ");

const gmv_form = document.querySelector("#gmv_v3");

const user_name = document.querySelector("#name_field");
const user_mob = document.querySelector("#mob_num");
const wedding_date = document.querySelector("#wedding_date");
const user_location = document.querySelector("#location");

const name_err = document.querySelector("#name_err");
const phn_err = document.querySelector("#phn_err");

const submit_btn = document.querySelector("#form_submit_btn");

const otp_modal = document.querySelector(".otp_modal_wrapper");
const modal_close_btn = document.querySelector(".close_btn");
const pop_up_form_close_btn = document.querySelector(".pop-up-form_close");
const otp_field = document.querySelector("#otp_field");

const otp_err = document.querySelector("#otp_err");

const otp_sub_btn = document.querySelector("#otp_submit");

const otp_form_block = document.querySelector(".otp_form_block");
const validating_otp_block = document.querySelector(".validating_otp_block");
const succ_block = document.querySelector(".success_block");

const final_name = document.querySelector("#final_name");
const final_date = document.querySelector("#final_date");
const final_num = document.querySelector("#final_num");
const final_location = document.querySelector("#final_location");

const final_submit_btn = document.querySelector("#final_form_submit");

wedding_date.type = "date";

user_name.addEventListener("input", () => {
  name_err.style.display = "none";
});

user_mob.addEventListener("input", () => {
  phn_err.style.display = "none";
});

submit_btn.addEventListener("click", (e) => {
  const alphabets = /^[a-zA-Z]+$/;
  if (!user_name.value) {
    e.preventDefault();
    name_err.style.display = "flex";
  } else if (!user_mob.value) {
    e.preventDefault();
    phn_err.style.display = "flex";
  } else if (
    user_mob.value.match(alphabets) ||
    user_mob.value.length > 10 ||
    user_mob.value.length < 10 ||
    user_mob.value.startsWith("1") ||
    user_mob.value.startsWith("2") ||
    user_mob.value.startsWith("3") ||
    user_mob.value.startsWith("4") ||
    user_mob.value.startsWith("5")
  ) {
    e.preventDefault();
    phn_err.style.display = "flex";
    phn_err.textContent = "Please enter a valid phone number";
  } else {
    userName = user_name.value;
    userWeddingDate = wedding_date.value;
    userPhone = user_mob.value;
    userLocation = user_location.value;
  }
});

modal_close_btn.addEventListener("click", () => {
  otp_modal.style.display = "none";
});

const send_otp = function () {
  let data = JSON.stringify({
    isd_code: "91",
    mobile: `${Number(user_mob.value)}`,
    medium: "SMS",
  });

  let request = new XMLHttpRequest();
  let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/otp/send/`);
  let url = endPoint.toString();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.send(data);
};

gmv_form.addEventListener("submit", () => {
  otp_modal.style.display = "flex";
  send_otp();
  document.querySelector(
    ".sent_otp_to_txt"
  ).textContent = `We have sent OTP to ${user_mob.value}`;
  document.cookie = "formSubmitted=true";
});

let verify_otp_status;

function callback(status) {
  verify_otp_status = status;
}

let verify_otp = function (callback) {
  let data = JSON.stringify({
    mobile: `${Number(user_mob.value) || Number(user_mob2.value)}`,
    isd_code: "91",
    otp: `${Number(otp_field.value)}`,
  });

  let request = new XMLHttpRequest();
  let endPoint = new URL(
    `https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`
  );
  let url = endPoint.toString();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.onload = function () {
    callback(request.status);
  };
  request.send(data);
};

otp_sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  verify_otp(callback);
  validating_otp_block.style.display = "flex";

  if (!otp_field.value) {
    validating_otp_block.style.display = "none";

    otp_err.style.display = "flex";
  }

  setTimeout(function () {
    if (otp_field.value && verify_otp_status == 200) {
      //console.log('IN 200:', verify_otp_status)
      otp_form_block.style.display = "none";
      validating_otp_block.style.display = "none";
      succ_block.style.display = "flex";

      final_name.value = userName;
      final_num.value = userPhone;
      final_date.value = userWeddingDate;
      final_location.value = userLocation;
      final_submit_btn.click();
    } else if (otp_field.value && verify_otp_status != 200) {
      //console.log('IN !200',verify_otp_status)

      validating_otp_block.style.display = "none";
      otp_form_block.style.display = "flex";
      otp_err.textContent = "Please enter correct OTP";
      otp_err.style.display = "flex";
    }
  }, 1000);
});

///////////////SHOWING POP UP///////////////
let options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting == true) {
      if (document.cookie.indexOf("formSubmitted=true") !== -1) {
        document.querySelector(".pop_up-form-wrapper").style.display = "none";
      } else {
        document.querySelector(".pop_up-form-wrapper").style.display = "flex";
      }

      if (document.cookie.indexOf("popupFormSubmitted=true") !== -1) {
        document.querySelector(".pop_up-form-wrapper").style.display = "none";
      } else {
        document.querySelector(".pop_up-form-wrapper").style.display = "flex";
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(document.querySelector(".testimonial_block"));

/////////////////SHOWING POP UP ENDS//////////////////////////

/////////////////////////////////////////////////////////////////POP UP FORM/////////////////////////////////////////////////////////////////

const country_code2 = document.querySelector("#country_code_2");
country_code2.value = `+91`;
country_code2.setAttribute("readonly", " ");

const gmv_form2 = document.querySelector("#gmv_v3_2");

const user_name2 = document.querySelector("#name_field_2");
const user_mob2 = document.querySelector("#mob_num_2");
const wedding_date2 = document.querySelector("#wedding_date_2");
wedding_date2.type = "date";
const user_location2 = document.querySelector("#location_2");

const submit_btn2 = document.querySelector("#form_submit_btn_2");

const name_err2 = document.querySelector("#name_err_2");
const phn_err2 = document.querySelector("#phn_err_2");

user_name2.addEventListener("input", () => {
  name_err2.style.display = "none";
});

user_mob2.addEventListener("input", () => {
  phn_err2.style.display = "none";
});

submit_btn2.addEventListener("click", (e) => {
  console.log("here");
  const alphabets = /^[a-zA-Z]+$/;
  if (!user_name2.value) {
    e.preventDefault();
    name_err2.style.display = "flex";
  } else if (!user_mob2.value) {
    e.preventDefault();
    phn_err2.style.display = "flex";
  } else if (
    user_mob2.value.match(alphabets) ||
    user_mob2.value.length > 10 ||
    user_mob2.value.length < 10 ||
    user_mob2.value.startsWith("1") ||
    user_mob2.value.startsWith("2") ||
    user_mob2.value.startsWith("3") ||
    user_mob2.value.startsWith("4") ||
    user_mob2.value.startsWith("5")
  ) {
    e.preventDefault();
    phn_err2.style.display = "flex";
    phn_err2.textContent = "Please enter a valid phone number";
  } else {
    userName = user_name2.value;
    userWeddingDate = wedding_date2.value;
    userPhone = user_mob2.value;
    userLocation = user_location2.value;
  }
});

const send_otp2 = function () {
  let data = JSON.stringify({
    isd_code: "91",
    mobile: `${Number(user_mob2.value)}`,
    medium: "SMS",
  });

  let request = new XMLHttpRequest();
  let endPoint = new URL(`https://api.betterhalf.ai/v2/auth/otp/send/`);
  let url = endPoint.toString();
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.send(data);
};

gmv_form2.addEventListener("submit", () => {
  document.querySelector(".pop_up-form-wrapper").style.display = "none";
  otp_modal.style.display = "flex";
  send_otp2();
  document.querySelector(
    ".sent_otp_to_txt"
  ).textContent = `We have sent OTP to ${user_mob2.value}`;
  document.cookie = "popupFormSubmitted=true";
});

pop_up_form_close_btn.addEventListener("click", () => {
  document.querySelector(".pop_up-form-wrapper").style.display = "none";
});

////////////LOCATION SUGGESTION FOR POPUP FORM/////////////////

let get_location_2 = function (id, childId) {
  const cardContainerSearch = document.getElementById(id);
  cardContainerSearch.innerHTML = "";

  let request = new XMLHttpRequest();
  let endPoint = new URL(
    `https://search.betterhalf.ai/search/city?charlist=${user_location2.value}`
  );
  let url = endPoint.toString();

  request.open("GET", url, true);

  request.onload = function () {
    let suggestions = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      suggestions.result.forEach((suggestion) => {
        const style = document.getElementById(childId);
        const cardSearch = style.cloneNode(true);
        cardSearch.setAttribute("id", "");

        cardSearch.style.display = "grid";

        const search_suggestion =
          cardSearch.getElementsByClassName("suggestion_txt")[0];
        search_suggestion.textContent = suggestion.city;

        const state = cardSearch.getElementsByClassName("state")[0];
        state.textContent = suggestion.state;

        const country = cardSearch.getElementsByClassName("country")[0];
        country.textContent = suggestion.country;

        cardSearch.onclick = () => {
          const location = `${suggestion.city}`;
          user_location2.value = location;

          cardContainerSearch.innerHTML = "";
        };

        cardContainerSearch.appendChild(cardSearch);
      });
    }
  };
  request.send();
};
user_location2.addEventListener(
  "input",
  get_location_2.bind(event, "Cards-Container_search2", "samplestyle_search2"),
  false
);

///////////////////////////////////////////////////////////////////POP UP FORM ENDS///////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////SLIDER CODE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function venue_vendor() {
  let splides = $(".venue_vendor");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 4,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
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
          gap: "4vw",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "4vw",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "4vw",
        },
      },
    }).mount();
  }
}
venue_vendor();

function wedding_success() {
  let splides = $(".wedding_success");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 2,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: false, // 'slider' or false
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
          gap: "4vw",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "4vw",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "4vw",
        },
      },
    }).mount();
  }
}
wedding_success();

Array.from(document.querySelectorAll("#left-arrow")).forEach(function (el) {
  el.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".splide__arrow--prev")).forEach(
      (el) => {
        el.click();
      }
    );
  });
});

Array.from(document.querySelectorAll("#right-arrow")).forEach(function (el) {
  el.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".splide__arrow--next")).forEach(
      (el) => {
        el.click();
      }
    );
  });
});

Array.from(document.querySelectorAll(".splide__arrow--next")).forEach((el) => {
  el.style.display = "none";
});

Array.from(document.querySelectorAll(".splide__arrow--prev")).forEach((el) => {
  el.style.display = "none";
});

////////////////////////////////////////////////////////SLIDER CODE ENDS////////////////////////////////////////////////////////

//////////////////SEND OTP FUNCTION USING fetch()//////////////////
/*
const validating_otp_block = document.querySelector(".validating_block");
const success_block = document.querySelector(".success_block");
const otp_err_warning = document.querySelector(".otp_err");

const sub_btn = document.querySelector(".otp_submit_btn");

let data_to_send_otp = {
  isd_code: "91",
  mobile: `2222222222`,
  medium: "SMS",
};

const otp_send = async function () {
  const res = await fetch(`https://api.betterhalf.ai/v2/auth/otp/send/`, {
    method: "POST",
    body: JSON.stringify(data_to_send_otp),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);
};

otp_send();

let data_to_verify_otp = {
  mobile: `2222222222`,
  isd_code: `91`,
  otp: `2828`,
};

const otp_verify = async function () {
  const res = await fetch(
    `https://api.betterhalf.ai/v2/auth/wedding-store/otp/verify/`,
    {
      method: "POST",
      body: JSON.stringify(data_to_verify_otp),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(`Verifying OTP...`);
  validating_otp_block.style.display = "flex";

  const data = await res.json();
  if (res.status == 200) {
    console.log(data);
    success_block.style.display = "flex";
  } else {
    console.log(res.status, `Wrong OTP entered`);
    validating_otp_block.style.display = "none";
    otp_err_warning.style.display = "flex";
  }
};

sub_btn.addEventListener("click", (e) => {
  e.preventDefault();
  otp_verify();
});
*/
