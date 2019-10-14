let inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        (input.value == '') ? input.classList.remove('has-value') : input.classList.add('has-value');
    });
});