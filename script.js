// https://api.adviceslip.com/advice

var idNumber = document.getElementById('advice-id');
var advice = document.querySelector('.advice');
var dice = document.querySelector('.dice');

async function getAdvice(){
    await fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(function(out){    
        idNumber.innerHTML = out.slip.id
        advice.textContent = out.slip.advice[0] = `"` +  out.slip.advice + `"`
        console.log(out)
    })
}

dice.addEventListener('click', ()=>{
    getAdvice();
})

window.addEventListener('load', ()=>{
    getAdvice();

})

