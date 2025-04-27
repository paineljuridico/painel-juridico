function carregarModelo(tipo) {
    let textoModelo = '';

    switch (tipo) {
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
            textoModelo = 'Selecione um modelo para carregar.';
    }

    document.getElementById('textoModelo').value = textoModelo;
}

function copiarTexto() {
    const textarea = document.getElementById('textoModelo');
    textarea.select();
    document.execCommand('copy');
    alert('Petição copiada com sucesso! ✅');
}

function baixarTexto() {
    const texto = document.getElementById('textoModelo').value;
    const blob = new Blob([texto], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'peticao.doc';
    link.click();
}
