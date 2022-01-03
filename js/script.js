const insert = (num) => {
    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
}

const clean = () => document.getElementById('result').innerHTML = ''

const back = () => {
    let result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}

const calculate = () => {
    let result = document.getElementById('result').innerHTML
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }
}