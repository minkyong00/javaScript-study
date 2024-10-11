// 1번 문제
// https://jsonplaceholder.typicode.com/comments
// email 10개만 가져온 후 email에서 아이디만 가져오기
// ex) ["Eliseo@gardner.biz"] => ["Eliseo"]
// 아이디만 출력

const getId = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const datas = await response.json();
  return datas;
}

getId().then((result) => result.map((comments) => comments.email))
  // .then((emails) => console.log(emails))
  .then((ten) => ten.filter((data, i) => i < 10))
  // .then((result) => console.log(result))
  // .then((id) => id.forEach(element => {
  //   console.log(element);
  // }))
  .then((id) => id.map((email) => email.split("@")[0]))
  .then((result) => result.forEach(element => {
    console.log(element)
  }))
  .catch((error) => console.error(error))


// 2번 문제
// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// ["Leanne Graham", ...] => ["maharG ennaeL", ...]

const getName = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await response.json();
  return datas;
}

getName().then((result) => result.map((users) => users.name))
  // .then((names) => console.log(names))
  .then((result) => result.map((element) => 
    element.split("").reverse().join("")))
  .then((result) => console.log(result))
  // then(console.log) 참조형
  // catch(console.error)
  
  