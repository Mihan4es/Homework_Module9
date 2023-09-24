const button = document.querySelector('button');

const useRequest = (height, width, cb) => {
    fetch(`https://picsum.photos/${height}/${width}`)
        .then(response => response)
        .then(json => {
            if(cb){
                cb(json.url);
            }
        })
}

function displayResult(jsonData){
    const cardBlock = `
    <div class="card">
    <img
    src = "${jsonData}"
    class = "card-image">
    </div>
`;

    resultContainer.innerHTML = cardBlock;
}

button.addEventListener('click', ()=>{
    const inputValue1 = Number(document.getElementById('input1').value);
    const inputValue2 = Number(document.getElementById('input2').value);
    if(inputValue1 >= 100 && inputValue1 <= 300 && inputValue2 >= 100 && inputValue2 <= 300){
        useRequest(inputValue1, inputValue2, displayResult);
    } else {
        document.getElementById('resultContainer').textContent = 'одно из чисел вне диапазона от 100 до 300';
    }
})