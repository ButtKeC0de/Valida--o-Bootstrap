
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

            const senha = document.getElementById('senha')
            const confsenha = document.getElementById('confsenha')

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            if (senha.value !== confsenha.value) {
                confsenha.setCustomValidity("As senhas não coincidem")
                event.preventDefault()
                event.stopPropagation()
            } else {
                confsenha.setCustomValidity("")
            }

            form.classList.add('was-validated')

        }, false)
    })
})()
