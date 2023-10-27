function primo(n){
    let num = n
    let divisores = 0
    for(let i = 1; i <= num; i++){
        if(num%i==0){
            divisores++
        }
    }
    if (divisores > 2){
        console.log("não é primo")
    }else{
        console.log("primo")
    }
}
function parimpar(arr){
    let list = arr
    let par = 0
    let impar = 0
    for(i = 0; i < list.length; i++){
        if(list[i]%2==0){
            par++
        }else{
            impar++
        }
    }
    return "pares: " + par + " impares: " + impar
}
function somadig(n){
    let num = n
    let list = num.toString().split("")
    let result = 0
    for(i = 0; i < list.length; i++){
        result += parseInt(list[i])
    }
    return result
}
function fibonacci(n){
    let current = 1
    let previous = 0
    let fibonacci = []
    for(i = 0; i <= n; i++){
        fibonacci[i] = current
        current += previous
        previous = fibonacci[i]
    }
    return fibonacci
}
function tabuada(n){
    let result = []
    for(i = 0; i <= 10; i++){
        result[i] = n*i
    }
    return result
}
function contador(n){
    let i = n
    while(i > 0){
        console.log(i)
        i--
    }
    for(i = 0; i <= n; i++){
        console.log(i)
    }
}

let input = document.querySelector("#gameInput")

function startGame(){
    let result = Math.floor(Math.random() * 100);
    if(result == input.value){
        window.alert("Venceu")
    }else{
        window.alert("Perdeu, o número correto era: " + result)
    }
}