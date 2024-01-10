// console.log("hello");
// function 나의함수(){
//     console.log('함수의 결과')
// }
// 나의함수();

// function 안녕(파라미터){
//     console.log(파라미터);
//     console.log('hello');
//     return 100;
// }
// let 아규먼트 = 1000;
// 안녕(아규먼트);
// console.log(안녕(아규먼트) + 안녕(아규먼트));

// 함수 선언문
function sum(x, y){
    return x + y;
}

// 함수 표현식
let sumXY = function(x, y){
    return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));