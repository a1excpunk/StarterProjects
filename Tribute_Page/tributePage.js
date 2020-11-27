//DOM elements
const tarantinoOcupation = document.querySelector('h1');
const quotes = document.querySelector('.qoute_container');
const bioBTN = document.querySelector('.bio');
const hiddenQuotes = document.getElementById('quotes_ul');
const tarantonoBio = document.getElementById('birth');
const hiddenElement = document.getElementById('UL');


// shows tarantino's occupation
tarantinoOcupation.addEventListener('click', () => {
    if (hiddenElement.classList.contains('hidden')) {
        hiddenElement.classList.remove('hidden') ;
        tarantinoOcupation.textContent = 'Occupation';
    } else {
        hiddenElement.classList.add('hidden');
        tarantinoOcupation.textContent = 'Quentin Tarantino';
    }
});

// shows tarantinos's quotes
quotes.addEventListener('click', () => {
    if (hiddenQuotes.classList.contains('hidden')){
        hiddenQuotes.classList.remove('hidden');
        tarantonoBio.classList.add('hidden')
    } else {
        hiddenQuotes.classList.add('hidden');
    }
});

// shows tarantino's bio
bioBTN.addEventListener('click', () => {
    if (tarantonoBio.classList.contains('hidden')){
        tarantonoBio.classList.remove('hidden');
        hiddenQuotes.classList.add('hidden')
    } else {
        tarantonoBio.classList.add('hidden');
    }

});