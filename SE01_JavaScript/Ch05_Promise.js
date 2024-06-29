// Promise : 비동기 처리를 위한 객체
function testPromise(num) {
    return new Promise((resolve, reject) => {  // executor 함수: 비동기 작업을 수행하는 함수
        // 비동기 작업
        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject(new Error('숫자가 아닙니다.'));
            }
        }, 2000);
    });
}

// console.log(testPromise(10));  // Promise { <pending> }

// then() : Promise 객체의 작업이 끝나면 호출되는 메서드
// testPromise(10)
//     .then((result) => {
//         console.log(result); // 20
//     });

// then()의 두 번째 인자로 reject 콜백 함수를 전달할 수 있다.
// testPromise('Hello')
//     .then((result) => {
//         console.log(result);
//     }, (error) => {
//         console.error(error); // Error: 숫자가 아닙니다.
//     });

// catch() : Promise 객체에서 에러가 발생하면 호출되는 메서드
// testPromise('Hello')
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// then()에서 error를 처리했을 때, catch() 메서드는 호출되지 않는다.
// testPromise('Hello')
//     .then((result) => {
//         console.log(result);
//     }, (error) => {
//         console.error('then()에서 에러 처리' + error); // then()에서 에러 처리Error: 숫자가 아닙니다.
//     })
//     .catch((error) => {
//         console.error('catch()에서 에러 처리' + error);
//     });

// 만약, Promise 체이닝을 사용하고 then() 메서드에서 에러를 처리하지 않으면 catch() 메서드가 호출된다.
// testPromise(10)
//     .then((result) => {
//         console.log(result);    // 1. 20
//         return testPromise('Hello');
//     }, (error) => {
//         console.error('then()에서 에러 처리' + error);
//     })
//     .then((result) => {
//         console.log(result);
//         return testPromise(undefined);
//     })
//     .catch((error) => {
//         console.error('catch()에서 에러 처리' + error);   // 2. catch()에서 에러 처리Error: 숫자가 아닙니다.
//     });


// finally() : Promise 객체의 작업이 끝나면 호출되는 메서드
// testPromise(10)
//     .then((result) => {
//         console.log(result);    // 1. 20
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('작업 완료');   // 2. 작업 완료
//     });

// Promise 체인
// testPromise(10)
//     .then((result) => {
//         console.log(result);    // 1. 20
//         return result * 2;
//     })
//     .then((result) => {
//         console.log(result);    // 2. 40
//         return undefined;
//     })
//     .then((result) => {
//         console.log(result);    // 3. undefined
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('작업 완료'); // 4. 작업 완료
//     });

// testPromise(10)
//     .then((result) => {
//         console.log(result);    // 1. 20
//         return testPromise(result);
//     })
//     .then((result) => {
//         console.log(result);    // 2. 30
//         return testPromise(undefined);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);   // 3. Error: 숫자가 아닙니다.
//     })
//     .finally(() => {
//         console.log('작업 완료'); // 4. 작업 완료
//     });
// Promise 객체의 then() 메서드는 Promise 객체를 반환하므로 then() 메서드를 연속해서 호출할 수 있다.
// Promise 체인을 사용하면 콜백 지옥을 방지할 수 있다.
// Promise 체인 중 하나라도 에러가 발생하면 catch() 메서드가 호출된다.
// finally() 메서드는 Promise 객체의 작업이 성공하든 실패하든 호출된다.


// Promise를 동기 함수로 사용한다면?
// const promise = new Promise((resolve, reject) => {
//     resolve('동기 함수에서 성공?');
// });
//
// console.log(promise);  // Promise { '성공' }

// Promise.all() : 여러 개의 Promise 객체를 모두 실행한 후 결과를 배열로 반환
// const promise1 = Promise.resolve('성공1');
// const promise2 = Promise.resolve('성공2');
// const promise3 = Promise.resolve('성공3');
// const promise4 = Promise.reject('실패1');
//
// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result); // [ '성공1', '성공2', '성공3' ]
//     });
//
// Promise.all([promise1, promise2, promise3, promise4])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);   // 실패1
//     });

// Promise.rae() : 여러 개의 Promise 객체 중 가장 먼저 성공한 Promise 객체의 결과를 반환
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('성공1'), 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('성공2'), 2000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('성공3'), 500);
// });
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('실패1'), 100);
// });
//
// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result); // 성공3
//     });
//
// Promise.race([promise1, promise2, promise3, promise4])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);   // 실패1
//     });

// Promise.allSettled() : 모든 Promise 객체의 처리가 완료되면 결과를 배열로 반환
// const promise1 = Promise.resolve('성공1');
// const promise2 = Promise.resolve('성공2');
// const promise3 = Promise.reject('실패1');
//
// Promise.allSettled([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// // [
// //   { status: 'fulfilled', value: '성공1' },
// //   { status: 'fulfilled', value: '성공2' },
// //   { status: 'rejected', reason: '실패1' }
// // ]

// Promise.any() : 여러 개의 Promise 객체 중 가장 먼저 성공한 Promise 객체의 결과를 반환
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('성공1'), 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('성공2'), 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('실패1'), 500);
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject('실패2'), 100);
});

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // 성공1
    });

Promise.any([promise1, promise2, promise3, promise4])
    .then((result) => {
        console.log(result); // 성공1
    })
    .catch((error) => {
        console.error(error);
});

// Promise.any() 메서드는 모든 Promise 객체가 실패할 때만 에러를 반환한다.
Promise.any([promise3, promise4])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);   // [AggregateError: All promises were rejected] { [errors]: [ '실패1', '실패2' ] }
    });