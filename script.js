// Função para mostrar o formulário ao clicar no botão
function mostrarFormulario(tipo) {
    document.getElementById('formularioPeticao').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight); // rola para o formulário
}

// Função para gerar a petição com os dados preenchidos
function gerarPeticao() {
    const nomeAutor = document.getElementById('nomeAutor').value;
    const cpfAutor = document.getElementById('cpfAutor').value;
    const enderecoAutor = document.getElementById('enderecoAutor').value;
    const nomeReu = document.getElementById('nomeReu').value;
    const valorCausa = document.getElementById('valorCausa').value;
    const numeroProcesso = document.getElementById('numeroProcesso').value;
    const varaProcesso = document.getElementById('varaProcesso').value;

    const peticao = `
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ${varaProcesso}

Processo nº ${numeroProcesso}

${nomeAutor}, brasileiro, portador do CPF nº ${cpfAutor}, residente e domiciliado à ${enderecoAutor}, vem, respeitosamente, por meio de seus advogados infra-assinados, propor

AÇÃO DE INDENIZAÇÃO POR DANOS MORAIS

em face de ${nomeReu}, pelas razões de fato e de direito que passa a expor.

DOS FATOS
(Descrever aqui os fatos...)

DO PEDIDO
Diante do exposto, requer a condenação do réu ao pagamento de ${valorCausa}, acrescido de juros e correção monetária.

Termos em que, pede deferimento.

Natal/RN, 26 de abril de 2025.
`;

    document.getElementById('textoPeticao').value = peticao;
}

// Função para copiar o texto gerado
function copiarTexto() {
    const textarea = document.getElementById('textoPeticao');
    textarea.select();
    document.execCommand('copy');
    alert('Petição copiada com sucesso! ✅');
}

// Função para baixar o texto gerado
function baixarTexto() {
    const texto = document.getElementById('textoPeticao').value;
    const blob = new Blob([texto], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'peticao_inicial.doc';
    link.click();
}
