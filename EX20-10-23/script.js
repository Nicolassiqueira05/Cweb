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
function somadig(num){

}