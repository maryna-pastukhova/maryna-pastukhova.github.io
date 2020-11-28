// insert style
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
  
</style>
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

      document.querySelectorAll('.load_phone__item').forEach((item) => {
        item.addEventListener('click', function () {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'pdp_more_characteristics',
            'eventAction':  'click on popUp',
            'eventLabel' : 'phone number'
          });
        })
      })

      document.querySelector('.rating-group').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          'event': 'event-to-ga',
          'eventCategory': 'pdp_more_characteristics',
          'eventAction': 'click on popUp rate'
        });
      });

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
