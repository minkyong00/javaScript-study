
//1부터 100까지 출력
// for (let i = 0; i < 100; i++) {
//   console.log(i + 1);
// }
  
  
//1부터 100까지 짝수만 출력
// for (let i = 0; i < 50; i++) {
//   console.log((i * 2));
// }

// for(let i = 1; i <= 100; i++){
//   let even = i % 2 == 0;
//   even ? console.log(i) : "";
// }

// for(let i = 1; i <= 50; i++){
//   let even = i * 2;
//   console.log(even);
// }

// for(let i = 0; i < 100; i++){
//   let even = i % 2 == 0;
//   if(even){ console.log(i) };
// }

// for(let i = 0; i < 100; i++){
//   let even = i % 2 == 0;
//   if(!even){ continue; };
//   console.log(i);
// }


    
//1부터 100까지 홀수만 출력
// for (let i = 0; i < 100; i++) {
//   let even = i % 2 == 0;
//   if(even){ continue; }
//   console.log(i);
// }

//0~10까지 5만뺴고 출력
// for (let i = 0; i < 11; i++) {
//   if(i == 5){ continue; }
//   console.log(i) 
// }

//1~10까지 모든 합 출력
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//     sum += i + 1;
//   }
//   console.log(sum);
  
//1~n까지 합의 출력
// let input = 10;
// let result = 0;
// for (let i = 0; i < input; i++) {
//     result += i + 1;
//   }
//   console.log(result);


//012340123401234 출력
// for (let i = 0; i < 3; i++) {
//   for(let j = 0; j < 5; j++){
//     console.log(j);
//   }
// }

// 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1는 홀수입니다.
// ex) 2는 짝수입니다.
// ...
// for (let i = 0; i < 10; i++) {
//     let even = i % 2 == 0;
//     if(even){
//       console.log(i + 1 + "는 홀수입니다");
//     }
//     console.log(i + 1 + "는 짝수입니다.");
// }

// 100 ~ 1까지 출력
// for (let i = 0; i < 100; i++) {
//   console.log(100 - i);
// }


// 1~10까지 5부터는 +2를 시켜서 출력
for (let i = 0; i < 10; i++) {
  if(i > 3){
    console.log(i + 3);
  }else{
    console.log(i + 1);
  }
}