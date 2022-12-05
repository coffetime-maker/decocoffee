const cartOpenButton = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart-content ');
cartOpenButton.addEventListener('click', openCart);

function openCart() {
	cart.classList.toggle('active');
	let menu = document.querySelector('.nav__list');
	menu.classList.remove('active');


	if (cartWrapper.children.length <= 0) {
		console.log('EMPTY');
		let emptyBtn = document.querySelector('.cart-content__btn')
		emptyBtn.classList.add('disabled');
		emptyBtn.setAttribute('disabled', 'true');
	};
}

const cartWrapper = document.querySelector('.cart-content__list');

window.addEventListener('click', function (event) {

	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.details__item');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.details__item__right__img').getAttribute('src'),
			title: card.querySelector('.details__item__left__title').innerText,
			price: card.querySelector('.details__item__left__price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		console.log(itemInCart);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);

		} else {

			const cartItemHTML = `<li class="cart-content__item" data-id="${productInfo.id}">
            <article class="cart-content__product cart-product">
                <img class="cart-product__pic" src=${productInfo.imgSrc}     alt=""> 
                <div class="cart-product__text">
                    <p class="cart-product__title">${productInfo.title}</p>
                    <span class="cart-product__price">${productInfo.price}   </span>
                </div>
                <div class="counter-wrapper">
                    <button class="counter-control" data-action="minus" aria-label="Минус один">
                        -
                    </button>
                    <span class="counter-current" data-counter="">${productInfo.counter}</span>
                    <button class="counter-control" data-action="plus" aria-label="Плюс один">
                        +
                    </button>
                </div>
            </article>
        </li>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		card.querySelector('[data-counter]').innerText = '1';

		toggleCartStatus();

		calcCartPriceAndDelivery();
	}
});