function calculoImc(){
    //Entrada
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    //Processamento
    let valorImc = valorPeso / (valorAltura*2);


    //Saída
    document.getElementById("valorImc").textContent = "O valor do seu IMC é de " + valorImc.toFixed(2);
    if (valorImc<18.5) {
        document.getElementById("classificacaoImc").textContent = "Você está abaixo do peso";
    }   else if (valorImc>=18.5 && valorImc<=24.9) {
        document.getElementById("classificacaoImc").textContent = "Você está no peso ideal";
    }   else if (valorImc>=25 && valorImc<=29.9) {
        document.getElementById("classificacaoImc").textContent = "Você está com excesso de peso";
    }   else if (valorImc>=30 && valorImc<=34.9) {
        document.getElementById("classificacaoImc").textContent = "Você está em obesidade";
    } 
    else {
        document.getElementById("classificacaoImc").textContent = "Você está em obesidade extrema";
    }

}
