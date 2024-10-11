// async await
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이를 "제목 : title" 내용으로 변경하여 출력하기

const getTitles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const datas = await response.json()
  return datas;
}

getTitles().then((reuslt) => reuslt.map((todos) => todos.title))
  // .then((titles) => console.log(titles))
  .then((five) => five.filter((data, i, datas) => i < 5) )
  .then((a) => a.forEach(element => {
    console.log("제목 : " + element)
  }));


  