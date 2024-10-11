// 이름 : 
// 국어 : 80점
//수학 : 70점
//영어 : 90점
//과학 : 20점

//평균, 학점 구하기
// if문을 사용해서 평균이 60점이면 합격, 60점 이하는 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.

const name = "김민경";
const kor = 60;
const math = 70;
const eng = 90;
const sc = 20;

const total = kor + math + eng + sc;
const avg = total / 4;

const pass = "합격";
const notPass = "불합격";
const cutline = avg >= 60;
const passIsResult = cutline ? pass : notPass;

const result = `${name}님의 이번 총점은 ${total}점, 평균은 ${avg}점으로 ${passIsResult}입니다`;

if(cutline){
  console.log(result)
}else{
  console.log(result)
}