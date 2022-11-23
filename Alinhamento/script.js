// Busca por categorias

let geral = document.getElementById('geral')
let ordem = document.getElementById('cronologia');
let f1 = document.getElementById('fase1');
let f2 = document.getElementById('fase2');
let f3 = document.getElementById('fase3');
let f4 = document.getElementById('fase4');
let f5 = document.getElementById('fase5');
let f6 = document.getElementById('fase6');
let series = document.getElementById('series');
let fundo = document.querySelector('.fundo');
let thema1 = document.getElementById('sol');
let thema2 = document.getElementById('lua');

let conteinerGeral = document.querySelector('.geral');
let conteiner = document.querySelector('.cronologia');
let conteiner1 = document.querySelector('.f1');
let conteiner2 = document.querySelector('.f2');
let conteiner3 = document.querySelector('.f3');
let conteiner4 = document.querySelector('.f4');
let conteiner5 = document.querySelector('.f5');
let conteiner6 = document.querySelector('.f6');
let conteinerSeries = document.querySelector('.series');

thema1.addEventListener('click', function() {
    thema1.style.backgroundColor = 'rgb(132, 0, 184)';
    thema2.style.backgroundColor = 'black';
    fundo.style.backgroundColor = '#F1F1F1';
    fundo.style.color = "black";
});
thema2.addEventListener('click', function() {
    thema2.style.backgroundColor = 'rgb(132, 0, 184)';
    sol.style.backgroundColor = 'black';
    fundo.style.backgroundColor = '#292C35';
    fundo.style.color = "white";
});




geral.addEventListener('click', function(){
    conteinerGeral.style.display = 'flex';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});
ordem.addEventListener('click', function(){
    conteiner.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});

f1.addEventListener('click', function() {
    conteiner1.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});

f2.addEventListener('click', function() {
    conteiner2.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});
f3.addEventListener('click', function() {
    conteiner3.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});
f4.addEventListener('click', function() {
    conteiner4.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});
f5.addEventListener('click', function() {
    conteiner5.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner6.style.display = 'none';
    conteinerSeries.style.display = 'none';
});
f6.addEventListener('click', function() {
    conteiner6.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteinerSeries.style.display = 'none';
});

series.addEventListener('click', function() {
    conteinerSeries.style.display = 'flex';
    conteinerGeral.style.display = 'none';
    conteiner.style.display = 'none';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
});


