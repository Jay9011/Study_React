// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;  // 배열의 각 요소를 one, two, three 변수에 할당
                                                                        // four 변수에는 arr 4번 요소가 없는 경우 4를 할당
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4

// 2. 객체의 구조 분해 할당
let obj = {
    a: 1,
    b: 2,
    c: 3
};

let {
    a : o_one,
    b : o_two,
    c : o_three,
    d : o_four = 'New Property'
} = obj; // 객체의 각 프로퍼티를 o_one, o_two, o_three 변수에 할당
         // o_four 변수에는 obj에 d 프로퍼티가 없는 경우 'New Property'를 할당

console.log(o_one); // 1
console.log(o_two); // 2
console.log(o_three); // 3
console.log(o_four); // New Property

// 3. 객체의 구조 분해 할당을 함수의 파라미터로 사용
let person = {
    name: '홍길동',
    age: 16,
    job: '학생',
    address: {
        city: '서울',
        dong: '역삼동'
    }
};

let {name, age, address: {city, dong}} = person; // 객체의 프로퍼티를 변수로 사용
console.log(name); // 홍길동
console.log(age); // 16
console.log(city); // 서울
console.log(dong); // 역삼동

function print({name, age, address, job = '백수'}) {  // 구조 분해 할당을 함수의 파라미터로 사용하여 객체의 프로퍼티를 변수로 사용
    console.log(`${name}은 ${address}에 사는 ${age}살 ${job}입니다.`);
}

print(person); // 홍길동은 서울에 사는 16살 학생입니다.