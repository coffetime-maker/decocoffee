$('.details__item__left__btn').click(function (e) { /* Клик по кнопке "Добавить в корзину" */
	var butWrap = $(this).parents('.details__item__left'); /* Запоминаем враппер кнопки */
	butWrap.append('<div class="animtocart"></div>'); /* Добавляем во враппер кружок, который будет анимирован и улетать от кнопки в корзину */
	$('.animtocart').css({ /* Присваиваем стили кружку и позицию курсора мыши */
		'position': 'absolute',
		'background': 'var(--green)',
		'width': '30px',
		'height': '30px',
		'border-radius': '100%',
		'z-index': '100',
		'left': e.pageX - 25,
		'top': e.pageY - 25,
	});
	var cart = $('.cart-btn__quantity').offset(); /* Получаем местоположение корзины на странице, чтобы туда полетел кружок */
	$('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 'px', width: 0, height: 0 }, 1500, function () { /* Делаем анимацию полёта кружка от кнопки в корзину и по окончанию, удаляем его */
		$(this).remove();
	});
});