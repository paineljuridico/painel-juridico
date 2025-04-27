// Funções de carregamento de modelo
function carregarModelo(modelo) {
    let textoModelo = '';

    switch (modelo) {
        case 'peticaoInicial':
            textoModelo = 'Modelo de Petição Inicial carregado...';
            break;
        case 'replica':
            textoModelo = 'Modelo de Réplica carregado...';
            break;
        case 'contestacao':
            textoModelo = 'Modelo de Contestação carregado...';
            break;
        case 'execucaoSentenca':
            textoModelo = 'Modelo de Execução de Sentença carregado...';
            break;
        default:
            textoModelo = 'Selecione um modelo para carregar...';
    }

    document.getElementById('textModelo').value = textoModelo;
}

// Função para copiar o texto
function copiarTexto() {
    const textarea = document.getElementById('textModelo');
    textarea.select();
    document.execCommand('copy');

    alert('Texto copiado com sucesso! ✅');
}

// Função para baixar o texto como Word
function baixarTexto() {
    const texto = document.getElementById('textModelo').value;
    const blob = new Blob([texto], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'peticao.doc';
    link.click();
}

