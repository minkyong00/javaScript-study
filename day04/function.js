// 이름을 1번 출력해주는 함수
// function printName(){
//   console.log("김민경");
// }

// printName();
// console.log(printName()); //undefined

//100이라는 값을 주는 함수
// function get100(){
//   return 100;
// }

// console.log(get100());


//두 수를 합쳐서 결과값을 주는 함수
// function add(num1, num2){
//   return num1 + num2;
// }

// console.log(add(10, 20));

//성과 이름을 받아서 붙여주는 함수
// function getFullName(firstName, lastName){
//   let fullName = firstName + lastName;
//   return fullName;
// }

// console.log("김", "민경");

//이름을 출력해주는 함수
// function printName(){
//   console.log("김민경");
// }

// printName();

//이름을 10번 반복해주는 함수
// function get10Name(){
//   for (let i = 0; i < 10; i++) {
//     console.log("김민경");
//   }
// }

// get10Name();


// 숫자 5개를 받아서 모두 더해주는 함수
// 매개변수, 파라미터, 파람, 인자
// 디폴트 파라미터(초기값을 0으로 넣어줌)
// function fiveAdd(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
//   return num1 + num2 + num3 + num4 + num5;
// }

// console.log(fiveAdd(1, 2, 3, 4, 5));


// 숫자 3개를 받아서 모두 곱해주는 함수
// function threeNum(num1, num2, num3){
//   return num1 * num2 * num3;
// }

// console.log(threeNum(1, 2, 3));


// 숫자 2개를 받아서 더하고 출력해주는 함수
// function twoNumAdd(num1, num2){
//   let sum = 0;
//   sum = num1 + num2;
//   console.log(sum);
// }

// twoNumAdd(1, 2);

// 즉시 사용함수()() (함수 이름없음, 일회성 함수, 페이지 첫 접속 시 팝업 or 로그파악할 때 사용)

(
  function(){
  console.log("선언과 동시에 사용")
}
)();

// 화살표 함수 () => {} (ES6)
// 숫자 2개를 받아서 더하고 출력해주는 함수
function addPrintNum(num1, num2){

};

const addPtrintNum2 = (num1, num2) => {

};


