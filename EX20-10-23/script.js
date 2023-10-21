function primo(num){
    let i = 1
    let divisores = 0
    while(i <= num){
        if(num%i==0){
            divisores++
            i++
        }else{
            i++
        }
    }
    return divisores > 2 ? "não primo" : "primo"
}
function parimpar(min, max){
    let i = min
    let par = 0
    let impar = 0
    while(i <= max){
        if (i%2 == 0) {
            par++
        }else{
            impar++
        }
        i++
    }
    return par + " pares e " + impar + " ímpares"
}

function sumdig(num){
    let numstr = num.toString().split("")
    let i = 0
    let result = 0
    while(i < numstr.length){
        numstr[i] = parseInt(numstr[i])
        i++
    }
    i = 0
    while(i < numstr.length){
        result = result + numstr[i]
        i++
    }
    return result
}

function fibonacci(n){
    let i = 0
    let previous = 0
    let current = 1
    let sequence = []
    while(i <= n){
        sequence[i] = current + previous 
        previous = current
        current = sequence[i]
        i++
    }
    return sequence
}

function tabuada(n){
    let i = 0
    while(i <= 10){
        console.log(n * i)
        i++
    }
}
