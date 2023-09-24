function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

const value = document.querySelector('.input');

function displayResult(apiData) {
    let picture = '';
    apiData.forEach(item => {
        let resultBlock = `<div class="result"> <img src="${item.download_url}" class="card-image" /> <p>${item.author}</p> </div>`;
        picture += resultBlock;
    });

    resultNode.innerHTML = picture;
}

btnNode.addEventListener('click', () => {
    if (value.value >= 1 && value.value <= 10) {
        useRequest(`https://picsum.photos/v2/list?limit=${value.value}`, displayResult);
    } else {
        resultNode.innerHTML = 'число вне диапазона от 1 до 10'
    }
})

