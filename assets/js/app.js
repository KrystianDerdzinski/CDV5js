// Zaimplementuj funkcję `getTime`, która zwraca aktualny czas w formacie HH:mm:ss.
// Aby uzyskać informację o aktualnym czasie użyj dostępnej globalnie klasy `Date`.
// Zapoznaj się z dokumentacją `Date` dostępną na MDN Web Docs.
// Wykorzystaj wbudowaną metodę `setInterval` aby co sekundę wyświetlać aktualny czas.

function cl(log) {
    console.log(log);
}

function getTime() {
    const timeNow = new Date();
    let hour = timeNow.getHours();
    if (hour < 10)
        hour = '0' + hour;
    let minute = timeNow.getMinutes();
    if (minute < 10)
        minute = '0' + minute;
    let seconds = timeNow.getSeconds();
    if (seconds < 10)
        seconds = '0' + seconds;
    let timeDisplayed = hour + ':' + minute + ':' + seconds;
    return timeDisplayed;
}

// Zaimplementuj funkcję `intersection`, która przyjmuje dwie tablice a następnie zwraca nową tablicę,
// zawietającą tylko te elementy, które występują w obydwu tablicach wejściowych.

// Przykład użycia:
// ```
// > intersection(['a', 'd', 'f'], ['g', 'd', 'a']);
// < ['a', 'd']
// ```

let btnAdd1 = document.querySelector('#btnAdd1');
let btnAdd2 = document.querySelector('#btnAdd2');
let elements1 = document.querySelector('#elements1')
let elements2 = document.querySelector('#elements2')
let inputAdd1 = document.querySelector('#addElement1')
let inputAdd2 = document.querySelector('#addElement2')
let array1 = [];
let array2 = [];
const go_compare = document.querySelector('#go_compare');

btnAdd1.addEventListener('click', () => addElement(elements1, inputAdd1.value, array1));
btnAdd2.addEventListener('click', () => addElement(elements2, inputAdd2.value, array2));

function addElement(whereAdd, whatAdd, arrToAdd) {
    if (whatAdd == "")
        return;
    if (whereAdd.innerHTML === "") {
        whereAdd.innerHTML += '<span class="mini-header">Current state of the array:</span>';
    }
    whereAdd.innerHTML += '<span class="listElement">' + whatAdd + '</span>';
    arrToAdd.push(whatAdd);
}

function giveComparedArrays() {
    let result = intersection(array1, array2);
    let arraysCompared = document.querySelector('#arraysCompared');
    arraysCompared.innerHTML = '<span class="mini-header">Common elements of the arrays:</span>'
    result.forEach(item =>
        arraysCompared.innerHTML += '<span class="listElement">' + item + '</span>'
    )
}

function intersection(arr1, arr2) {
    let finalArr = [];
    arr1.forEach(element => {
        if (arr2.indexOf(element) != -1) {
            finalArr.push(element);
        }
    });
    return finalArr;
}

// Zaimplementuj funkcję `Person` przyjmującą dwa ciągi znaków jako argumenty, które staną się polami tej klasy o nazwach `name` i `surname`.
// Zaimplementuj funkcję `createPeople`, która dla przekazanej tablicy ciągów znaków zwróci tablicę obiektów klasy typu `Person`,
// ale tylko w przypadku kiedy ciąg znaków to dwa wyrazy zaczynające się wielką literą.

// Przykład użycia:
// ```
// > createPeople(['Sean	Miller', 'adam', 'Russell', 'michael lee', 'Lisa Price']);
// < [Person {name: 'Sean', surname: 'Miller'}, Person {name: 'Lisa', surname: 'Price'}]
// ```

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

function createPeople(arrOfPeople) {
    let resultArr = [];
    arrOfPeople.forEach(item => {
        let splitted = item.split(' ');
        let name = splitted[0];
        let surname = splitted[1];
        let newPerson = new Person(name, surname);
        if (name.charAt(0) == name.charAt(0).toUpperCase() && surname.charAt(0) == surname.charAt(0).toUpperCase())
            resultArr.push(newPerson);
    })
    return resultArr;
}

cl(createPeople(['Mona Lisa', 'Janusz Paździoch', 'Daniel gwizdek', 'Andrzej Gołota']))

// Zaimplementuj funkcję o nazwie `reverse`, który przyjmuje ciąg znaków i zwraca go w odwrotnej kolejności.

// Przykład użycia:

// ```js
// > reverse('Słowo')
// < "owołS"
// ```

function reverse(item) {
    if (item === "")
        return "";
    else
        return reverse(item.substr(1)) + item.charAt(0);
}

const strToReverse = 'dlugi string'

cl(reverse(strToReverse))

window.onload = () => {
    setInterval(() => document.querySelector('#timeResult').innerHTML = getTime(), '1000');
    go_compare.addEventListener('click', () => giveComparedArrays(array1, array2))
}

// Zaimplementuj funkcję `setRandomTimeout` przyjmującą jako argument jedną funkcję wywołania zwrotnego (callback),
// która zostanie wywołana po losowym czasie.

function setRandomTimeout(func) {
    let randNum = Math.floor(Math.random() * 1000);
    setTimeout(func, randNum)
}

cl(setRandomTimeout(testFunction));

function testFunction() {
    cl('Funkcja odpalona po czasie')
}

// Zaimplementuj funkcję `toTitleCase`, która przyjmuje ciąg znaków, zmienia pierwszą literę każdego wyrazu na wielką, a wszystkie pozostałe na małe.
// Funkcja powinna zwracać wynik w postaci pojedynczego ciągu znaków.


// Przykład użycia:

// ```
// > toTitleCase('wolfgang AMADEUSZ moZARt');
// < "Wolfgang Amadeusz Mozart"
// ```

function toTitleCase(str) {
    let separatedWords = str.split(' ');
    let result = [];

    for (let word of separatedWords) {
        let splitted = word.split('');
        let newWord = [];
        for (let i = 0; i < splitted.length; i++) {
            if (i === 0) {
                newWord.push(splitted[0].toUpperCase());
            }
            else {
                newWord.push(splitted[i].toLowerCase())
            }
        }
        result.push(newWord.join(''));
    }
    return (result.join(' '));
}



cl(toTitleCase('miCkiewicz adam'));


// Zaimplementuj funkcję `union` która przyjmuje dwie tablice a następnie zwraca ich sumę,
// czyli tablicę zawierającą elementy obydwu tablic wejściowych, bez powtórzeń.

// Przykład użycia:
// ```
// > union(['a', 'e', 'g', 'b'], ['c', 'g', 'a']);
// < ['a', 'e', 'g', 'b', 'c']
// ```

function union(arr1, arr2) {
    let totalSum = arr1.concat(arr2);
    return new Set(totalSum);
}

cl(union([1, 2, 3, 4], [3, 4, 5, 6]))