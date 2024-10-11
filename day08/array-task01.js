// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = array.filter((data, i, datas) => data % 2 == 0);
// console.log(result);

// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((datas)=>data % 2 == 0);
// result.forEach((data) => {
//   console.log(data)
// })

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const array1 = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
// let result1 = "";
// const changeToInt = (str) => {
//   for(let i = 0; i < str.length; i++){
//     result1 += str.indexOf(array1[i].charAt(i));
//   }
//   return result1
// }
// let result = changeToInt("일이삼사");
// console.log(result);

const hangle = "공일이삼사오육칠팔구";
const input = "일이삼사";
input.indexOf();


// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"
// const array1 = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
// const changeToHangle = (number) => {
//   let result1 = "";
//   for (let i = 0; i < number.length; i++) {
//     result1 += array1[number.charAt(i)];
//   }
//   return result1;
// }
// let result = changeToHangle("6666");
// console.log(result);

// 4) 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.
// const array2 = new Array(100).fill(0);
// let result = array2.map((data, i) => i + 1);

// let sum = 0;
// result.forEach((data) => {
//     sum += data;
// });

// console.log(sum);

// 5) 문자열을 반대로 출력하기 .reverse()
// "apple"
// const input = "apple".split("");

// const array2 = ["a", "p", "p", "l", "e"];
// let result = "";
// array2.forEach((data, i) => {
//   result = array2.reverse().join("");
// })
//   console.log(result);

// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455
const phone = "010-1111-4455";
// let result = phone.replaceAll("1", "*").replace("*", "1");
// console.log(result);


let parsePhone = phone.split("-");
parsePhone[1] = "****";
console.log(parsePhone.join("-"));