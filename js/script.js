const inputOne = document.getElementById('inputOne')
const inputTwo = document.getElementById('inputTwo')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
const submit = document.getElementById('submit')
let action = "+"

plus.addEventListener('click', function(){
    action = "+"
})
minus.addEventListener('click', function(){
    action = "-"
})
multiplication.addEventListener('click', function(){
    action = "*"
})
division.addEventListener('click', function(){
    action = "/"
})

submit.addEventListener('click', function(){
    if(action == "+"){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        
        result.textContent = sum
    }else if(action == "-"){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        
        result.textContent = sum
    }else if(action == "*"){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        
        result.textContent = sum
    }else{
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        
        result.textContent = sum
    }
})