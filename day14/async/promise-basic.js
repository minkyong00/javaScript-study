const promise = new Promise((resolve, reject) => {
  let check = false;
  if(check){
    resolve("결과 성공");
  }else{
    reject("결과 실패");
  }
});

promise.then((result) => {console.log(result)}).catch((error) => {console.error(error)});

// 데이터의 요청사항의 return타입이 promise타입이라서 사용한다. (시간이 얼마나 걸릴지 몰라 promise타입으로 나옴)