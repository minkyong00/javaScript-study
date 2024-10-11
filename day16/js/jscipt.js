// 1)
  const $input = $("#input");
  const $button = $("input[type='button']");
  const $teen = $("#teenager");
  const $star = $("#star");

  $button.on("click", (e) => {
    const check = $input.val() === "청소년";
    if(!check){
      alert("다시 입력해주세요");
    }else{
      $star.text("★청소년");
      $teen.css("background-color", "red");
    }
  })

// ====================================================================

// 2)
  globalThis.$temp; //전역변수

  function confirm(){
    let flag = false;
    const $input = $("#input");
    const $tbs = $("tbody tr td:first-child");

    if(globalThis.$temp) {
      globalThis.$temp.closest("tr").css("background-color", "white");
      globalThis.$temp.text(globalThis.$temp.text.replaceAll("★", ""))
    }

    $tbs.each((i, td) => {
      const $td = $("td"); //jQuery 문법을 사용하고 싶어 다시 감쌈
      if($td.text() === $input.val()){
        let flag = true;
        $td.text("★" + $td.text());
        globalThis.$temp = $td;
        $td.closest("tr").css("background-color", "red");
      }
    })

    if(!flag){
      alert("다시입력해주세요")
    }
    $input.val("");
  }

