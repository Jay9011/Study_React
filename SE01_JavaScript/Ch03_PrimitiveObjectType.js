// 원시 타입은 값 자체가 복사되기 때문에 새로운 변수에 할당하더라도 복사된 값이 저장되고, 따라서 서로 다른 값을 가지게 됩니다.
let a = 10; // 스택에 10을 저장하고 a가 참조.
let b = a; // a의 값인 10을 b에 복사한다.
a = 20; // 새로운 값 20을 스택의 다른 위치에 저장되고, a는 이제 20을 참조.

console.log(a); // 20
console.log(b); // 10

// 객체 타입은 값이 저장된 주소를 참조하기 때문에 새로운 변수에 할당하면 같은 주소를 참조하게 되어 서로 같은 값을 가지게 됩니다.
let obj1 = {num : 10}; // 힙에 {num : 10}을 저장하고, 스택에서 obj1이 힙의 주소를 참조.
let obj2 = obj1; // obj1의 주소를 obj2에 복사한다.
obj1.num = 20; // 힙에 저장된 {num : 10}의 값을 20으로 변경한다.

console.log(obj1.num); // 20
console.log(obj2.num); // 20 : obj1을 통해 수정된 값이 obj2에도 반영된다.

let obj3 = {num : 10};
function changeValue(param) {
    param.num = 30; // param이 참조하는 주소의 객체 값을 변경한다.
}
changeValue(obj3);

console.log(obj3.num); // 30


// 객체 타입 사용시 주의사항
// 1. 의도치 않은 변경에 주의: 같은 템플릿을 사용하고 싶어서 객체를 미리 만들어두고, 이를 복사하여 사용하는 경우 같은 주소를 참조하게 되어 의도치 않은 변경이 발생할 수 있다.
// let address = { city: '서울', dong: '역삼동' };
// let person1 = { name: '홍길동', age: 16, address: address };
// let person2 = { name: '김철수', age: 21, address: address };
//
// // 각 사람의 실제 주소를 반영하려고 시도
// person1.address.city = '인천';
// person1.address.dong = '마전동';
// person2.address.city = '부산';
// person2.address.dong = '광안동';
//
// console.log(person1); // { name: '홍길동', age: 16, address: { city: '부산', dong: '광안동' } }
// console.log(person2); // { name: '김철수', age: 21, address: { city: '부산', dong: '광안동' } }

// Spread 연산자를 사용하여 해결
let address = { city: '서울', dong: '역삼동' };
let person1 = { name: '홍길동', age: 16, address: { ...address } };
let person2 = { name: '김철수', age: 21, address: { ...address } };

// 각 사람의 실제 주소를 반영하려고 시도
person1.address.city = '인천';
person1.address.dong = '마전동';
person2.address.city = '부산';
person2.address.dong = '광안동';

console.log(person1); // { name: '홍길동', age: 16, address: { city: '인천', dong: '마전동' } }
console.log(person2); // { name: '김철수', age: 21, address: { city: '부산', dong: '광안동' } }

// 2. 객체 타입 비교
let obj4 = { num: 10 };
let obj5 = { num: 10 };
let obj6 = obj4;

console.log(obj4 === obj5); // false : 서로 다른 주소를 참조하고 있기 때문에 false
console.log(obj4 === obj6); // true : obj6은 obj4와 같은 주소를 참조하고 있기 때문에 true

// 깊은 비교
console.log(JSON.stringify(obj4) === JSON.stringify(obj5)); // true : JSON.stringify()를 사용하여 객체를 문자열로 변환한 뒤 비교