// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.cart-content__list') && parseInt(counter.innerText) === 1) {
			event.target.closest('.cart-content__item').remove();

			// Отображение статуса корзины Пустая / Полная
			toggleCartStatus();

			// Пересчет общей стоимости товаров в корзине
			calcCartPriceAndDelivery();
		}

	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-content__list')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});