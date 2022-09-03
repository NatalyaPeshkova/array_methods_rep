
// 1.
// С помощью методов массивов, найдите элемент массива, который удовлетворяет условию item === '3'. 
// Результат присвойте переменной и выведите ее в консоль.

const arr = ['1', '2', '3', '4'];
const result = arr.find((item) => item === '3');
console.log('Первое задание: ', result);

// 2.
// Создайте массив
// С помощью методов массивов, отфильтруйте массив по id, где id - должен быть id > 2. Выведите новый массив в консоль

const peopleList = [
    {
    name: 'Max',
    age: 25,
    id: 1,
    },
    {
    name: 'Nik',
    age: 30,
    id: 3,
    },
    {
    name: 'Jack',
    age: 32,
    id: 4
    },
    {
    name: 'Harry',
    age: 10,
    id: 5
    }
];


let res = peopleList.filter(item => item.id > 2);
console.log('Второе задание: ', res);

//3. С помощью метода fetch получите список персонажей с бекенда https://rickandmortyapi.com/api/character. 
// Отфильтруйте массив персонажей по id, где id должен быть id > 5 && id < 20. 
// Выведите новый отфильтрованный массив в консоль.

fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        return response.json()
    }).then(function(responseJSON) {
        showCharacters(responseJSON)
    })
    .catch((error) => {
        console.log(error);
    });

function showCharacters (JSONObj) {
    const characters = JSONObj.results;
    let resultRaM = characters.filter(item => item.id > 5 && item.id < 20);
    console.log('Третье задание: ', resultRaM);
}

// 4. Создайте объект
// С помощью методов объекта и метода alert(), покажите всплывающие окно (alert()), для каждого свойства объекта.
// Показать нужно и ключ и его значение.

const obj = {
    name: 'Jacob',
    age: 20,
    id: 1
};
console.log(Object.entries(obj));
Object.entries(obj).forEach(([key, value]) => alert(`ключ: ${key} /  значение: ${value}`));
