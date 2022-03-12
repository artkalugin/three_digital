let page = document.querySelector('.page');
let nav = document.querySelector('.navigation');
let submitButton = document.querySelector('.feedback__button');

function showNav() {
    nav.style.display = 'block';
    document.onkeyup = function(evt) {
        if (evt.key == 'Escape') {
            hideNav();
        }
    };
}

function hideNav() {
    page.style.backgroundColor = null;
    nav.style.display = 'none';
}

submitButton.onclick = function() {
    let fields = document.querySelectorAll('.feedback__field[required]');
    for (let field of fields) {
        field.classList.add('required');
    }
}