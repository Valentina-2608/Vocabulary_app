/* dictionary */

const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

let result=document.getElementById('result');
let search_btn=document.getElementById('search_btn');

search_btn.addEventListener('click', ()=>{

    let inputWord=document.getElementById('input_word').value;
    console.log(inputWord);
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML=`
            <div class="word">${inputWord}</div>
            <div class="word_transription">${data[0].phonetic}</div>
            <div class="word_description">${data[0].meanings[0].definitions[0].definition}</div>
        `;
    })
    .catch(() => {
        result.innerHTML=`<h3 class="error">Could not find this word. Please, try again</h3>`
    })
});