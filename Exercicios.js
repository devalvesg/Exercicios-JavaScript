function calcularSubtracao(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let total = n1 - n2;
    
    document.getElementById("valorFinal").innerHTML = "O resultado da subtração é: " + total;
}

function calcularMult(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    
    let total = n1 * n2 * n3;
    
    document.getElementById("total").innerHTML = "O resultado da multiplicação foi:  " + total;
}

function calcularDivisao(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let total = n1 / n2;

    document.getElementById("total").innerHTML = "O resultado dessa divisão é: " + total;
}

function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
   
    let total = (n1 * 2 + n2 * 3)/2

    document.getElementById("total").innerHTML = "O resultado da média: " + total;
}

function calcularDesconto(){
    let n1 = Number(document.getElementById("n1").value);

    let valorFinal = n1 - n1*0.10;

    document.getElementById("valorFinal").innerHTML = "O valor final do produto com desconto é de: R$" + valorFinal;
}

function calcularSalario(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let comissao = n2 * 0.04;
    let salarioFinal = comissao + n1;

    document.getElementById("salarioFinal").innerHTML = "O seu salário final é de: R$ " + salarioFinal;
    document.getElementById("comissao").innerHTML = "Sua comissão foi de: R$ " + comissao; 
}

function calcularPeso(){
    let n1 = Number(document.getElementById("n1").value);

    let engordar = n1 + n1 * 0.15;
    let emagrecer = n1 - n1 * 0.20;

    document.getElementById("engordar").innerHTML = "Caso você engorde 15% do seu peso atual, você tera um novo peso de: " + engordar + "Kg";
    document.getElementById("emagrecer").innerHTML = "Caso você emagreça 20% do seu peso atual, você tera um novo peso de: " + emagrecer + "Kg";
}

function calcularGramas(){
    let n1 = Number(document.getElementById("n1").value);

    let gramas = n1 * 1000;

    document.getElementById("pesoGramas").innerHTML = "Seu peso de " + n1 + "Kg, em gramas fica: " + gramas + "g";
}

function calcularArea(){
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let h = Number(document.getElementById("h").value);

    let area = (n1 + n2) + h/2;

    document.getElementById("area").innerHTML = "A área do trapézio é de: " + area + "cm²";
}

function calcularAreaQ(){
    let n1 = Number(document.getElementById("n1").value);

    let area = n1 * n1;

    document.getElementById("area").innerHTML = "A área do quadrado é de: " + area + "cm²";
 }