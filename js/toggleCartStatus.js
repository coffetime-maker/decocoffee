function toggleCartStatus() {
    const cartButton = document.querySelector('.cart-content__btn')
    const cartWrapper = document.querySelector('.cart-content__list');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    if (cartWrapper.children.length > 0) {
        console.log('FULL');
        cartEmptyBadge.classList.add('none');
        let emptyBtn = document.querySelector('.cart-content__btn')
		emptyBtn.classList.remove('disabled');
        emptyBtn.removeAttribute('disabled', 'true');
        let cartButtonQuantity = document.querySelector('.cart-btn__quantity');
		cartButtonQuantity.style.display = 'inline-flex'
    } else {
        console.log('EMPTY');
        cartEmptyBadge.classList.remove('none');
        console.log(cartButton);
        cartButton.classList.add('disabled')
        cartButton.setAttribute('disabled', 'true')
        let cartButtonQuantity = document.querySelector('.cart-btn__quantity');
		cartButtonQuantity.style.display = 'none'
    }

}