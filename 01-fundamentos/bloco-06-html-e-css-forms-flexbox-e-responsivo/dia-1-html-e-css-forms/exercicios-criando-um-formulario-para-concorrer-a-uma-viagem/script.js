function submit('click', (event) => {
    event.preventDefault();
});

window.onload  = function() {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', submit);
}