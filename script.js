const modelos = {
    peticaoInicial: `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA _______________

Autor: {{autor}}
Réu: {{reu}}
CPF do Autor: {{cpfAutor}}
RG do Autor: {{rgAutor}}
Endereço: {{enderecoAutor}}

DOS FATOS:
{{fatos}}

Valor da Causa: R$ {{valorCausa}}

Termos em que, pede deferimento.`,
    
    replica: `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA _______________

(Conteúdo da réplica aqui - preencher conforme necessidade)`,
    
    expediçãodealvará: `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA _______________

(Conteúdo da réplica aqui - preencher conforme necessidade)`,

    contestacao: `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA _______________

(Conteúdo da contestação aqui - preencher conforme necessidade)`,
    
    execucaoSentenca: `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA ÚNICA DA COMARCA DE SÃO PAULO DO POTENGI, ESTADO DO RIO GRANDE DO NORTE.

    PRIORIDADE PROCESSUAL: IDOSO COM 92 ANOS DE IDADE

    EXECUÇÃO DE SENTENÇA

MANOEL PEREIRA DA SILVA, já devidamente qualificado nos autos do processo em epígrafe, por intermédio do seu Advogado, conforme instrumento procuratório já se encontra acostado nos referidos autos, vem a presença de Vossa Excelência, apresentar a EXECUÇÃO DE SENTENÇA.
    
    I - DANOS MATERIAIS
    Valor de cada desconto indevido: R$ 140,46
    Valor em dobro de parcela indevida: R$ 280,92 X 72 = R$ 20.226,24
    Data da correção (data do efetivo prejuízo): 01/07/2018
    Data dos juros (data da citação): 09/09/2019
    
    VALOR ATUALIZADO DOS DESCONTOS INDEVIDOS: R$ 40.397,09
    II - DANOS MORAIS
    Valor do dano moral:  R$ 3.000,00 
    Data da correção (data da sentença): 02/02/2024
    Data dos juros (data do efetivo prejuízo): 01/07/2018
    
    VALOR ATUALIZADO DOS DANOS MORAIS: R$ 5.577,01
    III – DOS HONORÁRIOS SUCUMBENCIAIS 15%
    10% DE HONORÁRIOS SUCUMBENCIAL = R$ 6.896,11

    IV – DEVOLUÇÃO DO TED RECEBIDO
    Devolução do TED creditado na conta do autor = R$ 5.105,17
    V - VALOR TOTAL DA EXECUÇÃO DE SENTENÇA
    Danos Materiais = R$ 40.397,09
    Danos Morais = R$ R$ 5.577,01
    15% de honorários sucumbencial = R$ 6.896,11
    Devolução do TED creditado na conta do autor = - R$ 5.105,17
    VALOR TOTAL DA EXECUÇÃO DA SENTENÇA = R$ 47.765,04
    
    Todos os cálculos (danos materiais e danos morais) foram realizados na calculadora do TJRN, conforme arquivos em anexo.
    
    Dessa forma, Excelência, requer que a parte executada seja intimada para realizar o pagamento do cumprimento da sentença devidamente atualizado em R$ 47.765,04 (quarenta e sete mil setecentos e sessenta e cinco reais e quatro centavos), sob pena de aplicação da multa de 10% (dez por cento) sobre o montante da condenação, conforme estabelece o art. 523, §1º, do novo CPC.
    
    Por fim, caso transcorra o prazo do cumprimento da execução de sentença sem o devido cumprimento ou impugnação, requer desde já a aplicação de multa de 10% (dez por cento) do valor da condenação, bem como a penhora online de valores e numerários suficientes a cumprir a execução pretendida, com utilização do sistema BACENJUD, conforme os valores apresentados do site do TJRN, arquivos em anexo.
    Nestes termos, pede e espera o deferimento.
    
    Santa Cruz/RN, data do expediente eletrônico.
     
    JULIO CÉSAR MAGALHÃES SOARES
    OAB/RN 19.847`
    
};

function carregarModelo(tipo) {
    const textarea = document.getElementById('textoModelo');
    textarea.value = modelos[tipo];
}

function copiarTexto() {
    const textarea = document.getElementById('textoModelo');
    textarea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

function baixarTexto() {
    const texto = document.getElementById('textoModelo').value;
    const blob = new Blob([texto], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'peticao.docx';
    link.click();
}

function gerarPeticao() {
    const autor = document.getElementById('autor').value;
    const reu = document.getElementById('reu').value;
    const cpfAutor = document.getElementById('cpfAutor').value;
    const rgAutor = document.getElementById('rgAutor').value;
    const enderecoAutor = document.getElementById('enderecoAutor').value;
    const fatos = document.getElementById('fatos').value;
    const valorCausa = document.getElementById('valorCausa').value;

    let texto = document.getElementById('textoModelo').value;

    texto = texto.replaceAll('{{autor}}', autor)
                 .replaceAll('{{reu}}', reu)
                 .replaceAll('{{cpfAutor}}', cpfAutor)
                 .replaceAll('{{rgAutor}}', rgAutor)
                 .replaceAll('{{enderecoAutor}}', enderecoAutor)
                 .replaceAll('{{fatos}}', fatos)
                 .replaceAll('{{valorCausa}}', valorCausa);

    document.getElementById('textoModelo').value = texto;
}

/* 
Mini tutorial interno:

Para adicionar novos campos:
1. Adicione o novo <input> ou <textarea> no formulário HTML.
2. Pegue o valor no gerarPeticao() usando document.getElementById().
3. Faça replaceAll no texto do modelo, usando o novo campo.
4. No modelo (petição), use {{novoCampo}} onde quiser substituir.

Pronto!
*/
