// https://jsonplaceholder.typicode.com/users
// city를 가져와서
// 모두 대문자로 바꾸고,
// 알파벳 중 A의 개수를 세서 콘솔에 출력

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = response.json();
  return datas;
}

// "abcdf".

getUsers().then((result) => result.map((users) => users.address.city.toUpperCase()))
  // .then((datas) => datas.join("").split(""))
  // .then((datas) => datas.filter((data) => data === 'A').length)
  .then((datas) => datas.filter((data) => data.includes("A")))
  .then((datas) => datas.map((data) => {
    let result = "";
    for(let s of data){
      if(s === "A"){result += s}
    }
    return result
  }))
  .then((datas) => datas.join("").length)
  .then(console.log)
  .catch(console.error)