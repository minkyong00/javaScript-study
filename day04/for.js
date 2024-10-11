// for(초기식; 조건식; 증감식){}
// ex) for(let i = 0; i < 10; i++){
// 	조건식이 참일 때 실행할 문장;
//     }

//이름 10번 출력하기
// console.log("김민경");

// for(let i = 0; i < 10; i++){
//   console.log("김민경");
// }
//둘의 값은 같다
// for(let i = 0; i < 10; ++i){
//   console.log("김민경");
// }

//1부터 10까지 출력
for(let i = 0; i < 10; i++){
  if(i == 5){ continue; }
  console.log(i + 1);
}


