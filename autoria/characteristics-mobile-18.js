let a = document.createElement("script");
a.src = "//code.jquery.com/jquery-3.3.1.min.js"
document.getElementsByTagName("head")[0].appendChild(a);

// insert style
let openTimeTxt = window.initialState.salon_schedule[0][2].hours.slice(0, 5)
let closeTimeTxt = window.initialState.salon_schedule[0][2].hours.slice(7)

let t1 = 'залиште свій номер телефону',
    t2 = 'ми зателефонуємо і надамо інформацію про наявність',
    callMe = 'Зателефонувати мені',
    wrongNumber = 'Мобільний телефон некоректний. Приклад 0931234567',
    timeWork = `Відділ продажу салону працює<br>з ${openTimeTxt} до ${closeTimeTxt}`
    thx1 = 'Дякуємо за вашу заявку!',
    thx2 = 'Ми зателефонуємо вам у найближчий час'

if (!window.location.pathname.includes('/uk/')) {
    t1 = 'оставьте свой номер телефона'
    t2 = 'мы перезвоним и дадим информацию по кредитам'
    callMe = 'Позвонить мне'
    wrongNumber = 'Мобильный телефон некорректен. Пример 0931234567'
    timeWork = `Отдел продаж салона работает<br>c ${openTimeTxt} до ${closeTimeTxt}`
    thx1 = 'Спасибо за вашу заявку!'
    thx2 = 'Мы с вами свяжемся в ближайшее время'
}

let style = `
<style>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
  }

  .fuel_info {
    display: flex;
  }
  .fuel_info svg {
    flex-shrink: 0;
    height: 20px;
    margin-right: 10px;
  }
  .fuel_info p {
    color: #256799;
    font-size: 16px;
  }
  .fuel_info .blue-underline {
    line-height: 20px;
    border-bottom: 2px dotted #256799;
  }

  .more-characteristics {
    padding: 20px;
    background-color: #F3FAFD;
    border-radius: 6px;
  }
  .more-characteristics p {
    font-size: 13px;
    color: #414042;
    margin-bottom: 12px;
  }
  .more-characteristics p b {
    font-size: 16px;
    font-weight: 700;
  }

  .more-characteristics button, .equipment button {
    background-color: #219BE7;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    padding: 10px 15px;
    border: none;
  }
  
  #auto-complectation-block {
   background-color: #F3FAFD;
   margin: 20px -15px 0;
   padding: 15px;
  }
  
  #auto-complectation-block h3 {
    font-size: 20px;
    font-weight: 700;
  }
  
  #auto-complectation-block ul li.active {
    display: none;
  }
  
  #auto-complectation-block .complectation {
  border-bottom: none;
  }
  
  #auto-complectation-block ul li {
    margin: 20px 0;
    border-top: none;
    background-color: white;
    padding: 10px;
  }

  .equipment > p {
    font-size: 13px;
    color: #414042;
    margin-bottom: 12px;
  }
  
  .react_modal__header h4{
    margin: 30px 0 15px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  
  .react_modal__header p{
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  
  .react_modal__body {
    text-align: center;
  }
  
  .react_modal__body .icons_list {
    margin: 0 auto 15px;
  }
    .react_modal__body .popup-content > div:last-child > *:not(:last-child) {
      margin-bottom: 12px;
    }

    .react_modal__body .popup-content .popup-phone-block {
      border-radius: 6px;
      border: 1px solid #9B9B9B;
      padding: 12px;
      font-size: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
    .react_modal__body .popup-content .popup-phone-block > *:not(:last-child) {
      margin-bottom: 8px;
    }

    .react_modal__body .popup-content .popup-phone-block .work-time {
      color: #9B9B9B;
      padding: 25px 0 17px;
    }

    .react_modal__body .popup-content .popup-phone-block form {
      display: flex;
      height: 40px;
    }
    .react_modal__body .popup-content .popup-phone-block form label {
      position: relative;
    }
    .react_modal__body .popup-content .popup-phone-block form label:first-child {
      width: 55%;
    }
    .react_modal__body .popup-content .popup-phone-block form label:last-child {
      width: 45%;
    }
    .react_modal__body .popup-content .popup-phone-block form label svg {
      position: absolute;
      height: 12px;
      left: 14px;
      top: 14px;
    }
    .react_modal__body .popup-content .popup-phone-block form input{
      width: 100%;
      height: 100%;
      border: 1px solid #9B9B9B;
      border-radius: 5px 0px 0px 5px;
      padding-left: 40px;
      font-size: 13px;
      color: #414042;
    }
    .react_modal__body .popup-content .popup-phone-block form input::placeholder {
      font-family: "Arial", sans-serif;
      font-size: 13px;
      color: #9B9B9B;
    }
    .react_modal__body .popup-content .popup-phone-block form button {
      width: 50%;
      height: 100%;
      background-color: #3C9806;
      color: white;
      font-size: 13px;
      font-weight: 700;
      border: none;
      border-radius: 0 5px 5px 0;
    }
    
    .react_modal__body .popup-content .popup-phone-block form button:focus {
      outline: none;
    }
    
    .react_modal__body .wrong-number {
      display: none;
      color:#db5c4c;
      font-size:12px;
      margin: -5px 0 0
    }
    
    .react_modal__body.error .wrong-number {
      display: block;
    }
    
    .thankyou .react_modal__body .popup-content > div {
      width: 100%;
    }
    
    .thankyou .react_modal__container{
      max-width: 350px !important;
    }
    
    .thx_holder{text-align:center}
    .thx_holder .modal_title{padding:0;font-size:20px; font-weight: 700;}
    .thx_holder .info_text{padding:4px 0 0; color: #9B9B9B}
    .thx_holder .info_text p{margin-bottom: 0;}
</style>
`

let htmlBlock = `
  <div class="popup-content">
    <div>
      <div class="popup-phone-block">
        <p class="work-time">${timeWork}</p>
        <p><b>${t1}</b></p>
        <p>${t2}</p>
        <form>
          <label>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75387 0.980217C2.91787 0.816198 3.11487 0.688926 3.3318 0.606844C3.54874 0.524763 3.78065 0.489747 4.01215 0.504121C4.24365 0.518495 4.46944 0.58193 4.67456 0.690218C4.87967 0.798505 5.05942 0.94917 5.20187 1.13222L6.88287 3.29422C7.19187 3.69022 7.30087 4.20722 7.17887 4.69422L6.66587 6.74722C6.63919 6.85375 6.64055 6.96537 6.66981 7.07121C6.69908 7.17706 6.75525 7.27353 6.83287 7.35122L9.13687 9.65422C9.21456 9.73183 9.31102 9.78801 9.41687 9.81727C9.52272 9.84654 9.63434 9.8479 9.74087 9.82122L11.7929 9.30822C12.0336 9.24811 12.2848 9.24352 12.5275 9.2948C12.7702 9.34608 12.9981 9.45189 13.1939 9.60422L15.3559 11.2852C16.1329 11.8892 16.2049 13.0382 15.5089 13.7332L14.5389 14.7032C13.8459 15.3962 12.8089 15.7012 11.8419 15.3612C9.36827 14.4906 7.12242 13.0742 5.27087 11.2172C3.41351 9.36576 1.99681 7.1199 1.12587 4.64622C0.785867 3.67922 1.09087 2.64222 1.78387 1.94822L2.75387 0.979217V0.980217Z" fill="#9B9B9B"/>
            </svg>
            <input class="input_number" type="text" placeholder="(000) 000 00 00" onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\\d{0,9}$/.test(this.value));">
          </label>
          <button type="submit" class="modal_btn">${callMe}</button>
        </form>
        <div class="wrong-number">${wrongNumber}</div>
      </div>
    </div>
  </div>
`

let carModel = document.querySelector('.view-auto_testimonials_full .rating+span strong').textContent;

let fuelInfo = `
<div class="fuel_info test-popup">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8.98047C9 8.71525 9.10536 8.4609 9.29289 8.27336C9.48043 8.08583 9.73478 7.98047 10 7.98047C10.2652 7.98047 10.5196 8.08583 10.7071 8.27336C10.8946 8.4609 11 8.71525 11 8.98047V14.9805C11 15.2457 10.8946 15.5 10.7071 15.6876C10.5196 15.8751 10.2652 15.9805 10 15.9805C9.73478 15.9805 9.48043 15.8751 9.29289 15.6876C9.10536 15.5 9 15.2457 9 14.9805V8.98047Z" fill="#256799"/>
    <path d="M10 4.05078C9.73478 4.05078 9.48043 4.15614 9.29289 4.34367C9.10536 4.53121 9 4.78556 9 5.05078C9 5.316 9.10536 5.57035 9.29289 5.75789C9.48043 5.94542 9.73478 6.05078 10 6.05078C10.2652 6.05078 10.5196 5.94542 10.7071 5.75789C10.8946 5.57035 11 5.316 11 5.05078C11 4.78556 10.8946 4.53121 10.7071 4.34367C10.5196 4.15614 10.2652 4.05078 10 4.05078Z" fill="#256799"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10Z" fill="#256799"/>
  </svg>
  <p><span class="blue-underline">Дізнатися про фактичні витрати по українських дорогах (по місту / по трасі)</span></p>
</div>
`

let moreCharacteristics = `
<div class="more-characteristics">
  <p><b>Бракує характеристик авто на сайті?</b></p>
  <p>Запитайте безпосередньо у автосалону потрібну інформацію</p>
  <button class="test-popup char">Уточнити характеристики</button>
</div>
`

let equipment = `
    <div class="equipment">
        <p>Ви можете дізнатись про найближчі поставки даного авто (у наступні 30 днів).</p>
        <button class="test-popup equip">Дізнатись про найближчі поставки</button>
    </div>
`

let v = `Інші варіанти комплектації ${carModel}:`
let p1 = `<h4>Дізнатися про фактичні витрати палива ${carModel}</h4>
          <p>Офіційний сервіс автосалону може надати вам <b>реальні дані щодо витрат палива,</b> грунтуючись на авто, яких вони обслуговують.</p>`
let p2 = `<h4>Уточнити характеристики ${carModel}</h4>
          <p>Запросіть інформацію про авто, якої бракує на сайті.</p>`
let p3 = `<h4>Дізнатися про поставки ${carModel}</h4>
          <p>Запросіть інформацію про найближчі поставки даного авто (у наступні 30 днів).</p>`


if (!window.location.pathname.includes('/uk/')) {
  fuelInfo = `
    <div class="fuel_info test-popup">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 8.98047C9 8.71525 9.10536 8.4609 9.29289 8.27336C9.48043 8.08583 9.73478 7.98047 10 7.98047C10.2652 7.98047 10.5196 8.08583 10.7071 8.27336C10.8946 8.4609 11 8.71525 11 8.98047V14.9805C11 15.2457 10.8946 15.5 10.7071 15.6876C10.5196 15.8751 10.2652 15.9805 10 15.9805C9.73478 15.9805 9.48043 15.8751 9.29289 15.6876C9.10536 15.5 9 15.2457 9 14.9805V8.98047Z" fill="#256799"/>
        <path d="M10 4.05078C9.73478 4.05078 9.48043 4.15614 9.29289 4.34367C9.10536 4.53121 9 4.78556 9 5.05078C9 5.316 9.10536 5.57035 9.29289 5.75789C9.48043 5.94542 9.73478 6.05078 10 6.05078C10.2652 6.05078 10.5196 5.94542 10.7071 5.75789C10.8946 5.57035 11 5.316 11 5.05078C11 4.78556 10.8946 4.53121 10.7071 4.34367C10.5196 4.15614 10.2652 4.05078 10 4.05078Z" fill="#256799"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10Z" fill="#256799"/>
      </svg>
      <p><span class="blue-underline">Узнать фактический расход по украинским дорогам (по городу / трассе)</span></p>
    </div>
  `

  moreCharacteristics = `
    <div class="more-characteristics">
      <p><b>Не хватает характеристик авто на сайте?</b></p>
      <p>Спросите непосредственно у автосалона нужную информацию</p>
      <button class="test-popup char">Уточнить характеристики</button>
    </div>
  `

  equipment = `
      <div class="equipment">
          <p>Вы можете узнать о ближайших поставках данного авто (в последующие 30 дней).</p>
          <button class="test-popup equip">Узнать о ближайших поставках</button>
      </div>
  `

  v = `Другие варианты комплектации ${carModel}:`
  p1 = `<h4>Узнать о фактических расходах топлива ${carModel}</h4>
        <p>Официальный сервис автосалона может предоставить вам <b>реальные данные о расходах топлива</b>, основываясь на авто, которых они обслуживают.</p>`
  p2 = `<h4>Уточнить характеристики ${carModel}</h4>
        <p>Запросите информацию об авто, которой не хватает на сайте.</p>`
  p3 = `<h4>Узнать о поставках ${carModel}</h4>
        <p>Запросите информацию о ближайших поставках данного авто (в последующие 30 дней).</p>`
}

document.body.insertAdjacentHTML('afterbegin', style);
document.querySelector('.defines_list>*:nth-child(8)').insertAdjacentHTML('afterend', fuelInfo);
document.querySelector('.characteristics').insertAdjacentHTML('afterend', moreCharacteristics);
let char = document.querySelector('.more-characteristics');
let complectationBlock = document.getElementById('auto-complectation-block');
if(complectationBlock) {
  char.after(complectationBlock);
  document.querySelector('#auto-complectation-block h3').innerHTML = `${v}`;
  document.querySelector('#auto-complectation-block ul').insertAdjacentHTML('afterend', equipment);
}


document.querySelectorAll('.test-popup').forEach((item)=> {
  item.addEventListener('click', function () {

    let mut = new MutationObserver((mutations) => {
      if(this.classList.contains('fuel_info')) {
        document.querySelector('.react_modal__header').childNodes[0].remove();
        document.querySelector('.react_modal__header').insertAdjacentHTML('afterbegin', p1);
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction': 'click on characteristics area',
          'eventLabel' : 'fuel consumption'
        });
      } else if (this.classList.contains('char')) {
        document.querySelector('.react_modal__header').childNodes[0].remove();
        document.querySelector('.react_modal__header').insertAdjacentHTML('afterbegin', p2);
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction':  'click on characteristics area',
          'eventLabel' : 'more characteristics'
        });
      } else if (this.classList.contains('equip')) {
        document.querySelector('.react_modal__header').childNodes[0].remove();
        document.querySelector('.react_modal__header').insertAdjacentHTML('afterbegin', p3);
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction':  'click on characteristics area',
          'eventLabel' : 'deliveries'
        });
      }
      document.querySelector('.react_modal .react_modal__body').innerHTML = htmlBlock

      document.querySelector('.react_modal__body .input_number').addEventListener("focus", function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction': 'click on popUp',
          'eventLabel': 'number input'
        });
      })

      document.querySelector('.react_modal__body .input_number').addEventListener("focusout", function (e) {
        let phone = document.querySelector('.react_modal__body .input_number').value.length
        if(phone < 10 || phone > 10) {
          document.querySelector('.react_modal__body').classList.add('error');
        } else {
          document.querySelector('.react_modal__body').classList.remove('error');
        }
      })

      document.querySelector('.react_modal__body .modal_btn').addEventListener('click', function (e) {
        e.preventDefault()
        let phone = document.querySelector('.react_modal__body .input_number').value
        if(phone.length === 10) {
          let formdata = new FormData()
          formdata.append('phone', phone)
          formdata.append('page', window.location.href)
          fetch('https://devxy.site/api/save', {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          })
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error))
          $(".react_modal__body").remove()
          $(".react_modal__header h4").text(thx1)
          $(".react_modal__header p").text(thx2)
          window.dataLayer = window.dataLayer || []
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "pdp_more_characteristics",
            eventAction: "click on popUp",
            eventLabel: "call me"
          })
        } else {
          document.querySelector('.react_modal__body').classList.add('error');
        }
      })

      document.querySelector('.react_modal__close').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction': 'click on popUp',
          'eventLabel': 'close'
        });
      });

      document.querySelector('.react_modal__backdrop').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction': 'click out of popUp',
          'eventLabel': 'close'
        });
      });
      mut.disconnect();
    })

    mut.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
      characterDataOldValue: true
    });

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'pdp_more_characteristics',
      'eventAction':  'popUp loaded'
    });
  })
})


try {
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1953436,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
  hj('trigger', 'pdp_more_characteristics');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'event-to-ga',
  'eventCategory': 'pdp_more_characteristics',
  'eventAction': 'loaded'
});
