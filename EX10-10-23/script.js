const prompt = require("prompt-sync")();
//1.
function ex1() {
    let nome = prompt("nome:")
    let idade = prompt("idade:")
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos de idade")    
}
//2.
function ex2(){
    let number = 3
    let number2 = 4
    let number3 = number + number2 * number
    console.log(n3 / 3)    
}
//3.
function ex3(){
    let string = "exercício "
    let number = 3
    let concatenação = string + number.toString()
    console.log(concatenação)   
}
//4.
function ex4(){
    function Uppercase(string) {
        let text = string
        text = string.toUpperCase()
        return text
    }
    console.log(Uppercase("lorem ipsum"))
}
//5.
function ex5(){
    let porcentagem = 50
    let n1 = 10
    let results = 10/100*porcentagem
    console.log(results)
}
//6.
function ex6(){
    function squared(numb){
    let number = numb
    let result = number*number
    return result
}
console.log(squared(4)) 
}
//7.
function ex7(){
    let number = 7
    number++
    console.log(number)
}
function ex8(){
    let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni consequatur illo, similique incidunt placeat ullam cum rem excepturi tenetur vitae sit esse dolore et consequuntur fugiat. Voluptates, vero perferendis."
    text = text.slice(50)
    console.log(text)
}
function ex9(){
    function reverseString(str){
        let string = str
        string = string.split("")
        string = string.reverse()
        string = string.join()
        return(string)
    }
    console.log(reverseString("Javascript"))
}
function ex10(){
    let number = 11
    number--
    console.log(number)
}
ex1()
