// https://jsonplaceholder.typicode.com/posts

// get 요청
// fetch(backendUrl)
// fetch(backendUrl, option)

// console.log(fetch("https://jsonplaceholder.typicode.com/posts")); //pending 대기상태

// fetch("https://jsonplaceholder.typicode.com/posts") //비동기코드(데이터를 가져옴)
//   .then((response) => response.json())
//   .then((result) => console.log(result))

// https://jsonplaceholder.typicode.com/albums 
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    if(!response.ok){
      throw new Error(`response Error : ${response.status}`)
    }
    // .json() : response 객체를 -> object 객체로 바꿔서 데이터를 리턴해주는 메소드
    return response.json();
  }) //위의 코드 전체가 리턴값
  .then((result) => result.map((albums) => albums.title))
  .then((titles) => {console.log(titles)})
  .catch((error) => {
    console.error(error)
  });

