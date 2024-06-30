// `async` 키워드는 함수 앞에 붙여서 해당 함수가 비동기 함수임을 선언합니다.
// 이 함수 내에서 명시적으로 값을 반환하면 `Promise.resolve`를 통해 그 값이 프로미스 객체로 감싸지고, 만약 예외가 발생하면 이는 `Promise.reject`를 통해 처리됩니다.
async function asyncFunction(test) {
    if (test) {
        return '성공'; // Promise.resolve('성공')과 동일
    } else {
        throw new Error('실패'); // Promise.reject(new Error('실패'))와 동일
    }
}

// console.log(asyncFunction(true)); // Promise {[[PromiseState]]: "fulfilled", [[PromiseResult]]: "성공" }
// console.log(asyncFunction(false)); // Promise {[[PromiseState]]: "rejected", [[PromiseResult]]: Error: 실패... }

// `await` 키워드는 프로미스 객체를 받아 해당 프로미스 객체가 처리될 때까지 기다립니다.
// 이 키워드는 `async` 함수 내에서만 사용할 수 있습니다.
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('성공');
        }, 2000);
    });
}
function rejectAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('실패'));
        }, 2000);
    });
}

async function asyncCall() {
    console.log('시작');
    try {
        let result = await resolveAfter2Seconds(); // 2초 후에 '성공'을 반환
        console.log(result);
        result = await rejectAfter2Seconds(); // 총 4초 후에 예외 발생
        console.log(result);
    } catch (error) {
        console.error(error.message); // '실패' 출력
    }

    return '완료';
}

asyncCall();