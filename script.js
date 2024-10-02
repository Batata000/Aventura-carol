document.addEventListener("DOMContentLoaded", () => {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Botão clicado!'); // Verifique se isso aparece
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        });
    });
});