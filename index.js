var btn_iniciar = document.getElementById('iniciar');
var nivel_input = document.getElementById('nivel');
var nivel = localStorage.getItem('nivel');

function iniciar() {
    if(nivel_input.value != 'primeiro') {
        nivel = nivel_input.value;
        localStorage.setItem('nivel', nivel);
        window.location.href = 'jogo.html';
    }else {
        alert('Selecione uma dificuldade para iniciar!')
    }
}

btn_iniciar.addEventListener('click', () => iniciar());