let nav = document.querySelector('.navigation');

let feedbackForm = document.getElementById('feedback-form');
let textField = document.getElementById('text-field');
let textLength = document.getElementById('text-length')

let navOpen = document.getElementById('nav-open');
let navClose = document.getElementById('nav-close');

navOpen.addEventListener('click', showNav);
navClose.addEventListener('click', hideNav);

function showNav() {
    nav.hidden = false;
    document.onkeyup = function(evt) {
        if (evt.key == 'Escape') {
            hideNav();
        }
    };
}

function hideNav() {
    nav.hidden = true;
}

feedbackForm.onsubmit = function() { // ???
    let fields = document.querySelectorAll('.feedback__field[required]');
    for (let field of fields) {
        field.classList.add('required');
    }
}

textField.oninput = function () {
    textLength.value = textField.value.length;
    if (textLength.value >= 1000) {
        textLength.style.color = 'red';
    } else {
        textLength.style.color = null;
    };
}