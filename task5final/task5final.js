const numbers = document.querySelector("#width");
const limit = document.querySelector("#heigth");
const btn = document.querySelector("#submit");
let div = document.querySelector("#div");

loadPhotosFromLocalStorage();

btn.addEventListener("click", func1);

function func1() {
    if (
        (Number(numbers.value) < 1 || Number(numbers.value) > 10) &&
        (Number(limit.value) < 1 || Number(limit.value) > 10)
    ) {
        console.log("Номер страницы и лимит вне диапазона от 1 до 10");
        return;
    } else if (Number(numbers.value) < 1 || Number(numbers.value) > 10) {
        console.log("Номер страницы вне диапазона от 1 до 10");
        return;
    } else if (Number(limit.value) < 1 || Number(limit.value) > 10) {
        console.log("Лимит вне диапазона от 1 до 10");
        return;
    } else {
        fetch(
            `https://jsonplaceholder.typicode.com/photos?_page=${Number(
                numbers.value
            )}&_limit=${Number(limit.value)}`
        )
            .then((response) => response.json())
            .then((json) => {
                func2(json);
                savePhotosToLocalStorage();
            });
    }
}

function func2(arg) {
    let container = String();
    arg.forEach((arg) => {
        const containerBlock = `
        <img src="${arg.url}" alt="фото">`;
        container = container + containerBlock;
    });
    div.innerHTML = container;
}

function savePhotosToLocalStorage() {
    localStorage.setItem("last_photos", div.innerHTML);
}
function loadPhotosFromLocalStorage() {
    div.innerHTML = localStorage.getItem("last_photos");
    return div.innerHTML;
}