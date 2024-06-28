// 배열 탐색 및 검사 메서드
// 1. includes() : 배열에 특정 요소가 포함되어 있는지 확인

const fruits = ['apple', 'banana', 'mango', 'orange', 'banana'];

const sentence = 'The quick brown fox jumps over the lazy dog';

// 배열에서 사용
console.log(fruits.includes('banana'));  // true
console.log(fruits.includes('grape'));   // false
console.log(fruits.includes('mango', 2)); // true
console.log(fruits.includes('mango', 3)); // false

// 문자열에서 사용
console.log(sentence.includes('quick')); // true
console.log(sentence.includes('Quick')); // false
console.log(sentence.includes('fox', 10)); // true
console.log(sentence.includes('fox', 20)); // false
console.log(sentence.includes('Th')); // true


// 2. indexOf() : 배열에서 특정 요소의 인덱스를 검색

// 배열에서 사용
console.log(fruits.indexOf('banana'));  // 1
console.log(fruits.indexOf('grape'));   // -1
console.log(fruits.indexOf('banana', 2)); // 4

// 문자열에서 사용
console.log(sentence.indexOf('quick')); // 4
console.log(sentence.indexOf('Quick')); // -1
console.log(sentence.indexOf('fox', 10)); // 16
console.log(sentence.indexOf('fox', 20)); // -1

// 3. findIndex() : 배열에서 특정 요소를 찾아 인덱스를 반환
const numbers = [5, 12, 8, 130, 44];
const callback_findIndex = (element) => element > 15;

console.log(numbers.findIndex(callback_findIndex)); // 3 : 15보다 큰 요소들 중 첫번째 요소인 130의 인덱스를 반환

// 3.1. callback 함수의 매개변수
// - element : 배열 요소
// - index : 배열 요소의 인덱스
// - array : 배열 자체
const callback_test = (element, index, array) => {
    console.log(`element: ${element}, index: ${index}, array: ${array}`);
    return element > 15;
}

console.log(numbers.findIndex(callback_test));
// element: 5, index: 0, array: 5,12,8,130,44
// element: 12, index: 1, array: 5,12,8,130,44
// element: 8, index: 2, array: 5,12,8,130,44
// element: 130, index: 3, array: 5,12,8,130,44

// 4. find() : 배열에서 특정 요소를 찾아 반환

const inventory = [
    {name: 'health potion', quantity: 20},
    {name: 'mana potion', quantity: 15},
    {name: 'sword', quantity: 1}
];

const result = inventory.find(item => item.name === 'mana potion');

console.log(result); // {name: 'mana potion', quantity: 15}

// 배열 순회 및 조작 메서드
// 1. map() : 배열 요소를 순회하며 새로운 배열을 반환
const squaredNumbers = numbers.map(number => number * number);

console.log(numbers); // [5, 12, 8, 130, 44]
console.log(squaredNumbers); // [25, 144, 64, 16900, 1936]

// 2. filter() : 배열 요소를 순회하며 조건에 맞는 요소만 추출
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [12, 8, 130, 44]
console.log(numbers); // [5, 12, 8, 130, 44]


// 4. join() : 배열 요소를 연결하여 문자열로 반환
const urlParts = ['https:', '', 'www.example.com', 'page'];

const url = urlParts.join('/');

console.log(url); // "https://www.example.com/page"