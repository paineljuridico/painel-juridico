let tipoPeticao = ""; // variável para controlar qual modelo será gerado

function mostrarFormulario(tipo) {
    tipoPeticao = tipo; // salva o tipo selecionado
    document.getElementById('formularioPeticao').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

function gerarPeticao() {
    const nomeAutor = document.getElementById('nomeAutor').value;
    const cpfAutor = document.getElementById('cpfAutor').value;
    const enderecoAutor = document.getElementById('enderecoAutor').value;
    const nomeReu = document.getElementById('nomeReu').value;
    const cnpjReu = document.getElementById('cnpjReu').value;
    const valorCausa = document.getElementById('valorCausa').value;
    const varaProcesso = document.getElementById('varaProcesso').value;

    let texto = "";

    if (tipoPeticao === "peticaoInicial") {
        texto = `
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ${varaProcesso}

Processo nº ${numeroProcesso}

${nomeAutor}, brasileiro, portador do CPF nº ${cpfAutor}, residente à ${enderecoAutor}, por seus advogados infra-assinados, vem propor

AÇÃO DE INDENIZAÇÃO POR DANOS MORAIS

em face de ${nomeReu}, pelos fundamentos de fato e de direito que passa a expor.

[DESCRIÇÃO DOS FATOS]

[VALOR DA CAUSA]: ${valorCausa}
        `;
    } else if (tipoPeticao === "replica") {
        texto = `
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ${varaProcesso}

Processo nº ${numeroProcesso}

${nomeAutor}, autor da ação em epígrafe, por seus advogados, vem, respeitosamente, apresentar

RÉPLICA

à contestação ofertada por ${nomeReu}, pelos seguintes fundamentos de fato e de direito:

[DESCRIÇÃO DA IMPUGNAÇÃO]

[VALOR DA CAUSA]: ${valorCausa}
        `;
    } else if (tipoPeticao === "contestacao") {
        texto = `
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ${varaProcesso}

Processo nº ${numeroProcesso}

${nomeReu}, por seus advogados infra-assinados, nos autos da ação movida por ${nomeAutor}, vem, respeitosamente, apresentar

CONTESTAÇÃO

pelos motivos de fato e de direito que passa a expor:

[DEFESA]

[VALOR DA CAUSA]: ${valorCausa}
        `;
    } else {
        texto = "Selecione um tipo de petição para gerar.";
    }

    document.getElementById('textoPeticao').value = texto;
}

function copiarTexto() {
    const textarea = document.getElementById('textoPeticao');
    textarea.select();
    document.execCommand('copy');
    alert('Documento copiado com sucesso! ✅');
}

function baixarTexto() {
    const texto = document.getElementById('textoPeticao').value;
    const blob = new Blob([texto], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = tipoPeticao + '.doc';
    link.click();
}
