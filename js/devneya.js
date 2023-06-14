import {generateCode} from 'https://cdn.jsdelivr.net/gh/get-zen-dev/Devneya@master/lib/api.js';

const formSubmit = document.getElementById('devneya-form')

const buttonPopup = document.getElementById('devneya')
const response = document.getElementById('response')

formSubmit.addEventListener("submit", function(event){
    response.value = "";
    event.preventDefault();

    let apiKey = document.getElementById("api-key").value;
    let prompt = document.getElementById("prompt").value;

    (async () => {
        let data = await generateCode(apiKey, 3, prompt)
        let res = JSON.parse(JSON.stringify(data))
        response.value = res
    })();

})

buttonPopup.addEventListener("click", function(event){
    
    formSubmit.classList.toggle("active")
});