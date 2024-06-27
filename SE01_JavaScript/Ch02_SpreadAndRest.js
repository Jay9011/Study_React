// 1. Spread 연산자
// Spread 연산자는 배열이나 문자열과 같이 반복 가능한(iterable) 객체를 요소로 분리한다.

// let str = 'Hello';
// console.log(...str); // H e l l o
//
// let arr = [1, 2, 3];
// console.log(...arr); // 1 2 3
//
// let AddArray = [...arr, 4, 5, 6];
// console.log(AddArray); // [1, 2, 3, 4, 5, 6]
//
// let job = {
//     jobNum: 1,
//     jobName: '학생'
// };
//
// let person = {
//     uid: 1,
//     name: '홍길동',
//     age: 16,
//     address: '서울',
//     ...job
// };
//
// console.log(person); // {uid: 1, name: "홍길동", age: 16, address: "서울", jobNum: 1, jobName: "학생"}

let address = { city: '서울', dong: '역삼동' };
let person1 = { name: '홍길동', age: 16, address: address };
let person2 = { ...person1 };

person1.name = '김철수';
person1.age = 20;
person1.address.city = '인천';
person1.address.dong = '마전동';

// person1에 대한 변경만 시도했으나 person2도 같이 변경되어 의도치 않은 변경이 발생하게 된다.
console.log(person1); // { name: '김철수', age: 20, address: { city: '인천', dong: '마전동' } }
console.log(person2); // { name: '홍길동', age: 16, address: { city: '인천', dong: '마전동' } }

// 2. Rest 매개변수
// Rest 매개변수는 함수의 파라미터로 전달된 인수들의 나머지 인수들을 배열로 전달받는다.

// let arr2 = [1, 2, 3, 4, 5];
//
// let print = (a, b, ...rest) => {    // ...rest 는 나머지 인수들을 전달 받는 역할이기 때문에 마지막 매개변수로 사용해야 한다.
//     console.log(a); // 1
//     console.log(b); // 2
//     console.log(rest); // [3, 4, 5]
// }
//
// print(...arr2);
//
// // 일반 object 객체는 Iterable 객체가 아니기 때문에 Spread 연산자를 사용할 수 없다.
// let person2 = {
//     uid: 1,
//     name: '홍길동',
//     age: 16,
//     address: '서울'
// };
//
// console.log(...person2); // TypeError: person2 is not iterable

// 배열 분해 할당에서의 Rest 매개변수 사용
let arr3 = [1, 2, 3, 4, 5];
let [a, b, ...rest] = arr3;

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// 객체 분해 할당에서의 Rest 매개변수 사용
let person3 = {
    uid: 1,
    name: '홍길동',
    age: 16,
    address: '서울'
};
let { uid, name, ...rest2 } = person3;

console.log(uid); // 1
console.log(name); // 홍길동
console.log(rest2); // { age: 16, address: '서울' }