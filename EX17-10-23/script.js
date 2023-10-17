function parouimpar(num){
    if(num % 2 == 0){
        console.log("Par")
    }else(
        console.log("Ímpar")
    )
}
function parouimparv2(num){
    let result
    if(num % 2 == 0){
        result = "Par"
    }else{
        result = "Ímpar"
    }
    return result
}
function numvalue(num){
    let result
    if(num > 0){
        result = "positive"
    }else if(num < 0){
        result = "negative"
    }else{
        result = "zero"
    }
    return result
}
function triangle(l1, l2, l3){
    let result
    if(l1 == l2 && l2 == l3){
        result = "equilátero"
    }else if(l1 == l2 || l1 == l3 || l2 == l3){
        result = "isóceles"
    }else{
        result = "escaleno"
    }
    return result
}
function compra(valor, pagamento){
    let valorFinal
    if (pagamento == "avista"){
        valorFinal = valor * 0.9
    }else{
        valorFinal = valor
    }
    return valorFinal
}
function maiormenor(num1, num2){
    let result
    if(num1 > num2){
        result = "num1 é maior"
    }else if(num1 < num2){
        result = "num2 é maior"
    }else{
        result = "num1 e num2 são iguais"
    }
    return result
}
function bissexto(ano){
    let result
    if(ano % 4 == 0){
        result = ano + " é bissexto"
    }else{
        result = ano + " não é bissexto"
    }
    return result
}
