function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-content__list');
	const priceElements = cartWrapper.querySelectorAll('.cart-product__price');
	const totalPriceEl = document.querySelector('.fullprice');
	const cartButtonQuantity = document.querySelector('.cart-btn__quantity');
	
	let priceTotal = 0;

	priceElements.forEach(function (item) {
		const amountEl = item.closest('.cart-content__item').querySelector('[data-counter]');
		cartButtonQuantity.innerText = parseInt(amountEl.innerText)
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	totalPriceEl.innerText = priceTotal;
}