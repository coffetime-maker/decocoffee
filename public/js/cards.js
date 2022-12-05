const cardsData = [
    {
        id: 1,
        isSpecial: true,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Premium Polished Вьетнам 250гр.',
        descr: 'Горький шоколад с хлебными нотками',
        acidityImgUrl: 'img/one.svg',
        densityImgUrl: 'img/three.svg',
        price: 699
    },

    {
        id: 2,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Fancy Cerrado Бразилия 250гр.',
        descr: 'Малина, орехи, шоколад',
        acidityImgUrl: 'img/three.svg',
        densityImgUrl: 'img/four.svg',
        price: 599
    },

    {
        id: 3,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Shabunda 13/14 Конго 250гр.',
        descr: 'Мёд, цитрус и шоколад',
        acidityImgUrl: 'img/four.svg',
        densityImgUrl: 'img/three.svg',
        price: 699
    },

    {
        id: 4,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Sidamo GR4 Эфиопия 250гр.',
        descr: 'Тропические фрукты, кислотность спелого лимона и шоколад',
        acidityImgUrl: 'img/two.svg',
        densityImgUrl: 'img/three.svg',
        price: 699
    },

    {
        id: 5,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Supremo Колумбия 250гр.',
        descr: 'Зелёные яблоки, грейпфрут, запечённый ржаной хлеб',
        acidityImgUrl: 'img/four.svg',
        densityImgUrl: 'img/four.svg',
        price: 599
    },

    {
        id: 6,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе SHB Coban Гватемала 250гр.',
        descr: 'Апельсин, черный чай, шоколад и карамель',
        acidityImgUrl: 'img/four.svg',
        densityImgUrl: 'img/five.svg',
        price: 699
    },

    {
        id: 7,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Yirgacheffe GR2 Эфиопия 250гр.',
        descr: 'Яркие ноты жасмина, лимона и специй с яркой кислотностью спелого лайма ',
        acidityImgUrl: 'img/four.svg',
        densityImgUrl: 'img/three.svg',
        price: 599
    },

    {
        id: 8,
        isSpecial: false,
        isAvailable: false,
        imgUrl: 'img/product.svg',
        text: 'Кофе Sidamo GR1 Эфиопия 250гр.',
        descr: 'Тропические фрукты, кислотность спелого лимона и шоколад',
        acidityImgUrl: 'img/five.svg',
        densityImgUrl: 'img/three.svg',
        price: 699
    },

    {
        id: 9,
        isSpecial: false,
        isAvailable: false,
        imgUrl: 'img/product.svg',
        text: 'Кофе Premium Black Эфиопия 250гр.',
        descr: 'Премиум купаж нескольких сортов арабики из Эфиопии',
        acidityImgUrl: 'img/three.svg',
        densityImgUrl: 'img/five.svg',
        price: 699
    },

    {
        id: 10,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Premium Black Noir Бразилия 250гр.',
        descr: 'Кофе премиум класса с интенсивным фруктовым оттенком',
        acidityImgUrl: 'img/three.svg',
        densityImgUrl: 'img/three.svg',
        price: 599
    },

    {
        id: 11,
        isSpecial: true,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Without Caffeine 250гр.',
        descr: 'Производится из обычных кофейных зёрен, из которых различными методами извлекается до 99,5% кофеина',
        acidityImgUrl: 'img/two.svg',
        densityImgUrl: 'img/one.svg',
        price: 499
    },

    {
        id: 12,
        isSpecial: false,
        isAvailable: true,
        imgUrl: 'img/product.svg',
        text: 'Кофе Premium Polished Вьетнам 250гр.',
        descr: 'Горький шоколад, какао и фрукты',
        acidityImgUrl: 'img/three.svg',
        densityImgUrl: 'img/four.svg',
        price: 699
    }
];

let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

let createCard = function (product) {
    let cardsItem = makeElement('li', 'cards__item');

    let picture = makeElement('img', 'cards__item__pic');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    cardsItem.appendChild(picture);

    let cardContent = makeElement('div', 'cards__item__content');
    cardsItem.appendChild(cardContent);

    let title = makeElement('p', 'cards__item__content__title', product.text);
    cardContent.appendChild(title);

    let price = makeElement('p', 'cards__item__content__price', product.price + ' руб.');
    cardContent.appendChild(price);

    let button = makeElement('button', 'cards__item__content__btn');
    button.textContent = 'Подробнее';
    button.setAttribute('data-btn', '')
    cardContent.appendChild(button);

    if (product.isSpecial) {
        cardsItem.classList.add('special');
    };

    if (!product.isAvailable) {
        cardsItem.classList.add('unavailable');
        picture.classList.add('disabled')
    }

    return cardsItem;
};

const cardList = document.querySelector('.cards');

for (let i = 0; i < cardsData.length; i++) {
    let cardItem = createCard(cardsData[i]);
    cardList.appendChild(cardItem);
};


const createOpenCard = function (details) {
    let detailsItem = makeElement('li', 'details__item');
    detailsItem.setAttribute('data-details', 'close')
    detailsItem.setAttribute('data-id', details.id)

    let detailsRight = makeElement('div', 'details__item__right');
    detailsItem.appendChild(detailsRight);

    let detailsImg = makeElement('img', 'details__item__right__img');
    detailsImg.src = details.imgUrl;
    detailsImg.alt = details.text;
    detailsRight.appendChild(detailsImg);

    let detailsImgDescr = makeElement('p', 'details__item__right__descr', 'Каждый день мы обжариваем кофе и бесплатно доставляем по всей России');
    detailsRight.appendChild(detailsImgDescr);

    let detailsLeft = makeElement('div', 'details__item__left');
    detailsItem.appendChild(detailsLeft);

    let closeButton = makeElement('button', 'details__item__left__close-btn');
    detailsLeft.appendChild(closeButton);

    let closeButtonImg = makeElement('img', 'details__item__left__close-btn__pic');
    closeButtonImg.src = 'img/close.svg';
    closeButton.appendChild(closeButtonImg);

    let detailsLeftTitle = makeElement('p', 'details__item__left__title', details.text);
    detailsLeft.appendChild(detailsLeftTitle);

    let detailsLeftPrice = makeElement('p', 'details__item__left__price', details.price + ' руб.');
    detailsLeft.appendChild(detailsLeftPrice)

    let detailsLeftDescr = makeElement('p', 'details__item__left__descr', details.descr);
    detailsLeft.appendChild(detailsLeftDescr);

    let propertysContainer = makeElement('div', 'details__item__left__properties');
    detailsLeft.appendChild(propertysContainer);

    let acidityContainer = makeElement('div', 'property-container');
    propertysContainer.appendChild(acidityContainer);

    let acidityText = makeElement('span', 'property-container__text', 'Кислотность:');
    acidityContainer.appendChild(acidityText);

    let acidityImg = makeElement('img', 'property-container__pic');
    acidityImg.src = details.acidityImgUrl;
    acidityImg.alt = details.text;
    acidityContainer.appendChild(acidityImg);

    let densityContainer = makeElement('div', 'property-container');
    propertysContainer.appendChild(densityContainer);

    let densityText = makeElement('span', 'property-container__text', 'Плотность:');
    densityContainer.appendChild(densityText);

    let densityImgUrl = makeElement('img', 'property-container__pic');
    densityImgUrl.src = details.densityImgUrl;
    densityImgUrl.alt = details.text;
    densityContainer.appendChild(densityImgUrl);

    let counterWrapper = makeElement('div', 'counter-wrapper');
    detailsLeft.appendChild(counterWrapper);

    let minus = makeElement('button', 'counter-control', '-');
    minus.setAttribute('data-action', 'minus');
    counterWrapper.appendChild(minus);

    let counterCurrent = makeElement('span', 'counter-current', '1');
    counterCurrent.setAttribute('data-counter', '')
    counterWrapper.appendChild(counterCurrent);

    let plus = makeElement('button', 'counter-control', '+');
    plus.setAttribute('data-action', 'plus');
    counterWrapper.appendChild(plus);

    let detailsLeftButton = makeElement('button', 'details__item__left__btn');
    detailsLeftButton.setAttribute('data-cart', '');
    detailsLeftButton.textContent = '+ Добавить в корзину';

    detailsLeftButton.onclick = function () {
        let cartButtonQuantity = document.querySelector('.cart-btn__quantity');
        cartButtonQuantity.style.display = 'inline-flex'
    };

    detailsLeft.appendChild(detailsLeftButton);

    if (!details.isAvailable) {
        detailsImg.classList.add('disabled');
        detailsLeftButton.classList.add('disabled');
        detailsLeftPrice.classList.add('disabled');
        propertysContainer.classList.add('disabled');
        detailsLeftDescr.classList.add('disabled');
        minus.classList.add('disabled');
        minus.setAttribute('disabled', 'true');
        plus.classList.add('disabled');
        plus.setAttribute('disabled', 'true');
        detailsLeftButton.textContent = 'Нет в наличии';
        detailsLeftButton.setAttribute('disabled', 'true');
    }

    return detailsItem;
};

const detailsList = document.querySelector('.details__list');

for (let i = 0; i < cardsData.length; i++) {
    let detailsCardItem = createOpenCard(cardsData[i]);
    detailsList.appendChild(detailsCardItem);
};

const openCard = document.querySelectorAll('.details__item');
const openCardButtons = document.querySelectorAll('.cards__item__content__btn');
const productsSection = document.querySelector('.products');
const detailsCloseButton = document.querySelectorAll('.details__item__left__close-btn');

for (let i = 0; i < openCardButtons.length; i++) {
    openCardButtons[i].onclick = function () {
        openCard[i].classList.add('visible');
        openCard[i].setAttribute('data-details', 'open')
        openCard[i].scrollIntoView();
    };
};


for (let i = 0; i < detailsCloseButton.length; i++) {
    detailsCloseButton[i].onclick = function () {
        openCard[i].classList.remove('visible');
    };
}

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-btn')){
    }
  })