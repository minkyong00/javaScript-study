// async await (ES8)
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); //const response : 동기로직 , fetch : 비동기 로직
  const datas = await response.json()
  return datas;
}

getUsers().then((result) => console.log(result))
// console.log(getUsers());