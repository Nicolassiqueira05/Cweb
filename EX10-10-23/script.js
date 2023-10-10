//1.
function ex1() {
    let nome = "Nicolas"
    let idade = 18
    alert("Meu nome é " + nome + " e eu tenho " + idade + " anos de idade")    
}
//2.
function ex2(){
    let number = 3
    let number2 = 4
    let n3 = n1 + n2 * n1
    alert(n3 / 3)    
}
//3.
function ex3(){
    let string = "exercício "
    let number = 3
    let concatenação = string + number.toString()
    alert(concatenação)   
}
//4.
function ex4(){
    function Uppercase(string) {
        let text = string
        text = string.toUpperCase()
        return text
    }
    alert(Uppercase("lorem ipsum"))
}
//5.
function ex5(){
    let porcentagem = 50
    let n1 = 10
    let results = 10/100*porcentagem
    alert(results)
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
    alert(number++)
}
function ex8(){
    let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magni consequatur illo, similique incidunt placeat ullam cum rem excepturi tenetur vitae sit esse dolore et consequuntur fugiat. Voluptates, vero perferendis."
    text = text.slice(50)
    alert(text)
}
function ex9(){
    function reverseString(str){
        let string = str
        string = string.split("")
        string = string.reverse()
        string = string.join()
        return(string)
    }
    alert(reverseString("Javascript"))
}
function ex10(){
    let number = 11
    number--
    alert(number)
}
