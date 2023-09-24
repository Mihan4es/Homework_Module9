/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  <student>
    <name lang="en">
      <first>Вася</first>
      <second>Васильев</second>
    </name>
    <age>115</age>
    <prof>medic</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const list = xmlDOM.querySelector("list");
const students = xmlDOM.querySelectorAll("student");
let result = { list:[] };
students.forEach(element=>{
    result.list.push({
        name: element.querySelector('name').textContent,
        first: element.querySelector('first').textContent,
        second: element.querySelector('second').textContent,
        age: element.querySelector('age').textContent,
        prof: element.querySelector('prof').textContent,
        lang: element.querySelector('name').getAttribute('lang')
    })
})
console.log(result)



