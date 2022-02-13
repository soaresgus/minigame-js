var nivel = localStorage.getItem('nivel');
var mosca = document.getElementById('mosca');
var tempo = 0;
var vida = 3;
var pontos = 0;

function moscaAcao() {
    if(nivel == 'normal') {
        tempo = 15;
    }else {
        tempo = 30;
    }

    var velocidade = 800;
    
    if(nivel == 'hardcore') {
        velocidade = 600;
    }

    var tamanho = 0.0;
    var lado = 0;
    var top = 0
    var left = 0


    const t_global = setInterval(() => {
        document.getElementById('tempo').textContent = tempo;
        tempo--;
        tamanho = Math.random() * 1 + 0.3;
        lado = Math.floor(Math.random() * 2);
        top = Math.floor(Math.random() * 30 + 5);
        left = Math.floor(Math.random() * 80 + 10);
        const t1 = setInterval(() => {
            mosca.style.display = 'block';
            if (lado == 1) {
                mosca.style.transform = 'scale('+tamanho+') scaleX(-1)';
            } else {
                mosca.style.transform = 'scale('+tamanho+') scaleX(1)';
            }

            mosca.style.marginTop = top + '%';
            mosca.style.marginLeft = left + '%';

            clearInterval(t1);
            const t2 = setInterval(() => {
                mosca.style.display = 'none';
                clearInterval(t2);
                vida--;
                if (vida > 0) {
                    document.getElementById('c-' + (vida + 1)).src = 'imagens/coracao_vazio.png';
                }else if(vida <= 0) {
                    localStorage.setItem('tempo', tempo);
                    localStorage.setItem('pontos', pontos);
                    window.location.href = 'gameover.html';
                }
            }, velocidade);
        }, velocidade);

        if (tempo < 0) {
            clearInterval(t_global);
            localStorage.setItem('pontos', pontos);
            window.location.href = 'vitoria.html';
        }
    }, 1000);


}

function matar() {
    pontos++;
    vida++;
    mosca.style.display = 'none';
    document.getElementById('pontos').textContent = pontos;
}

moscaAcao();

mosca.addEventListener('click', () => matar());