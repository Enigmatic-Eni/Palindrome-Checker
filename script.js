const button = document.getElementById("check-btn");



button.addEventListener('click', 
function (){
   const input = document.getElementById('text-input')
  const inputValue = input.value;
if(!inputValue){
alert("Please input a value")
return;
}
const result = document.getElementById("result")
const inputArr = inputValue.toLowerCase().split("").filter((c) => !c.match(/[\(\)\\.\s_,-]/gi))

for (let i = 0; i<inputArr.length; i++){
if(inputArr[i] !== inputArr[inputArr.length - i -1]){
result.innerText = `${inputValue} is not a palindrome`
return
}
}
result.innerText = `${inputValue} is a palindrome`


})

