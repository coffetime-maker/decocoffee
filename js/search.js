const searchInput = document.querySelector('#searchInput');
searchInput.oninput = function () {
    let searchValue = this.value.trim().toLowerCase();
    let searchItems = document.querySelectorAll('.cards__item');

    if (searchValue != '') {
        searchItems.forEach(e => {
            if (e.innerText.toLowerCase().search(searchValue) == -1) {
                e.classList.add('hide');
            };
        });
    } else {
        searchItems.forEach(e => {
            e.classList.remove('hide');
        });
    };
};
