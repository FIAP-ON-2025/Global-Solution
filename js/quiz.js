function calcularResultado() {
    const quizForm = document.getElementById("quizForm");
    const respostas = new FormData(quizForm);
    const totalPerguntas = 7;
    let perguntasRespondidas = 0;
    const resultadoDiv = document.getElementById("resultado-message");
    resultadoDiv.innerHTML = ''; 

    let pontuacao = {
        'front-end': 0, 
        'back-end': 0,  
        'cloud-computing': 0, 
        'devops': 0    
    };
    for (let i = 1; i <= totalPerguntas; i++) {
        const nomePergunta = `q${i}`;
        const resposta = respostas.get(nomePergunta);
        
        if (resposta) {
            perguntasRespondidas++;
            if (resposta === 'frontend') {
                pontuacao['front-end']++;
            } else if (resposta === 'backend') {
                pontuacao['back-end']++;
            } else if (resposta === 'cloud') {
                pontuacao['cloud-computing']++; 
            } else if (resposta === 'infra') {
                pontuacao['devops']++; 
            }
        }
    }
    if (perguntasRespondidas < totalPerguntas) {
        resultadoDiv.innerHTML = `<p class="alert-error"><i class="bi bi-exclamation-triangle-fill me-2"></i> Por favor, responda a todas as ${totalPerguntas} perguntas para obter seu diagnóstico.</p>`;
        return; 
    }
    let areaFinal = 'front-end'; 
    let maxPontuacao = -1;

    for (const area in pontuacao) {
        if (pontuacao[area] > maxPontuacao) {
            maxPontuacao = pontuacao[area];
            areaFinal = area;
        }
    }
    let arquivoResultado = `../pages/${areaFinal}.html`;
    
    resultadoDiv.innerHTML = `<p class="alert-success-quiz"><i class="bi bi-check-circle-fill me-2"></i> Análise concluída! Seu perfil é ${areaFinal.replace('-', ' ').toUpperCase()}. Redirecionando...</p>`;

    setTimeout(() => {
        window.location.href = arquivoResultado;
    }, 1500); 
}