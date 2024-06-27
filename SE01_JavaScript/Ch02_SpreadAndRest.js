// 1. Spread 연산자
// Spread 연산자는 배열이나 문자열과 같이 반복 가능한(iterable) 객체를 요소로 분리한다.

let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

let AddArray = [...arr, 4, 5, 6];
console.log(AddArray); // [1, 2, 3, 4, 5, 6]

let job = {
    jobNum: 1,
    jobName: '학생'
};

let person = {
    uid: 1,
    name: '홍길동',
    age: 16,
    address: '서울',
    ...job
};

console.log(person); // {uid: 1, name: "홍길동", age: 16, address: "서울", jobNum: 1, jobName: "학생"}

// 2. Rest 매개변수
// Rest 매개변수는 함수의 파라미터로 전달된 인수들의 나머지 인수들을 배열로 전달받는다.

let print = (a, b, ...rest) => {    // ...rest 는 나머지 인수들을 전달 받는 역할이기 때문에 마지막 매개변수로 사용해야 한다.
    console.log(a); // 1
    console.log(b); // 2
    console.log(rest); // [3, 4, 5]
}

print(...AddArray); // 1 2 [3, 4, 5]

print(...person);