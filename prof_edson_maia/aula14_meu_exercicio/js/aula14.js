let formulario = document.querySelector("#formulario");
let cxNome  = document.querySelector("#nome");
let cxIdade = document.querySelector("#idade");
let cxPeso  = document.querySelector("#peso");
let cxAltura = document.querySelector("#altura");
let bntEnviar = document.querySelector("#btnEnviar");
let cxImc = document.querySelector("#imc");

bntEnviar.addEventListener('click' , function(event){
    event.preventDefault();

    let nome = cxNome.value;
    let idade = cxIdade.value;
    let altura = cxAltura.value;
    let peso = cxPeso.value;
    let imc = (peso / (altura * altura));
    imc = imc.toFixed(1);

    console.log(nome);
    console.log(idade);
    console.log(peso);
    console.log(altura);
    console.log(imc)

    cxImc.value = imc;

    document.querySelector('#rNome').innerHTML= nome; 
    document.querySelector('#rIdade').textContent= idade ;
    document.querySelector('#rPeso').textContent = peso  ;
    document.querySelector('#rAltura').textContent = altura ;


});