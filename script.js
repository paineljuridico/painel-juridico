// script.js

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
            textoModelo = `EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA VARA ÚNICA DA COMARCA DE SÃO PAULO DO POTENGI, ESTADO DO RIO GRANDE DO NORTE

EXECUÇÃO DE SENTENÇA

PROCESSO: 0100310-18.2016.8.20.0132

JOSE HERIBERTO DOS SANTOS, já devidamente qualificado nos autos do processo em epígrafe, por intermédio do seu Advogado, conforme instrumento procuratório já se encontra acostado nos referidos autos, vem a presença de Vossa Excelência, informar e requerer.
Excelência, o processo transitou em julgado conforme se verifica no (ID 138401233) em 11/12/2024, ou seja, não existiu qualquer intimação para a parte autora requerer o que entende de direito, como por exemplo apresentara execução de sentença, logo, a secretaria ARQUIVOU O PROCESSO FORMA ERRADA, acarretando assim mais um atraso na tramitação do processo.

Disso isso, se faz necessário o desarquivamento dos autos do processo e intimação da parte requerida para pagar ou impugnar a EXECUÇÃO DE SENTENÇA, ora apresentada sem a devida intimação.

I - DANOS MATERIAIS
Valor de cada desconto indevido: R$ 19,06
Valor em dobro de parcela indevida: R$ 38,12 X 72 = R$ 2.744,64
Data da correção (data da citação): 14/03/2016
Data dos juros (data do evento danoso): 01/02/2015

VALOR ATUALIZADO DOS DESCONTOS INDEVIDOS: R$ 7.555,08

II - DANOS MORAIS
Valor do dano moral:  R$ 5.000,00
Data da correção (data da sentença): 01/11/2024
Data dos juros (data do evento danoso): 01/02/2015

VALOR ATUALIZADO DOS DANOS MORAIS: R$ 11.078,26
III – DOS HONORÁRIOS SUCUMBENCIAIS 10%
10% DE HONORÁRIOS SUCUMBENCIAIS = R$ 1.863,33

IV - VALOR TOTAL DA EXECUÇÃO DE SENTENÇA
Danos Materiais = R$ 7.555,08
Danos Morais = R$ 11.078,26
10% de honorários sucumbencial = R$ 1.863,33
VALOR TOTAL DA EXECUÇÃO DA SENTENÇA = R$ 20.496,64

Todos os cálculos (danos materiais e danos morais) foram realizados na calculadora do TJRN, conforme arquivos em anexo.
Dessa forma, Excelência, requer que a parte executada seja intimada para realizar a complementação do pagamento do cumprimento da sentença devidamente atualizado em R$ 20.496,64 (vinte mil quatrocentos e noventa e seis reais e sessenta e quatro centavos), sob pena de aplicação da multa de 10% (dez por cento) sobre o montante da condenação, conforme estabelece o art. 523, §1º, do novo CPC.

Por fim, caso transcorra o prazo do cumprimento da execução de sentença sem o devido cumprimento ou impugnação, requer desde já a aplicação de multa de 10% (dez por cento) do valor da condenação, bem como a penhora online de valores e numerários suficientes a cumprir a execução pretendida, com utilização do sistema BACENJUD, conforme os valores apresentados do site do TJRN, arquivos em anexo.
Nestes termos, pede e espera o deferimento.

Santa Cruz/RN, data do expediente eletrônico.

JULIO CÉSAR MAGALHÃES SOARES
OAB/RN 19.847`;
            break;
        case 'gerardocumentoscomia':
            textoModelo = 'Funcionalidade de geração de documentos com IA em desenvolvimento... 🧠✨';
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
