let Omikuji = document.getElementById('Omikuji');
let Result = document.getElementById('result');

Omikuji.addEventListener('click',()=>{
let Omikuji_Result = ['大吉','中吉','小吉','吉','凶']
let num = Math.floor(Math.random() * 5)
console.log(num)
console.log(Omikuji_Result[num])
Result.textContent = '結果 : ' + Omikuji_Result[num];
})