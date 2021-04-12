setInterval(function(){
  $(".main").css("display","none")
}, 3000)

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function reload(){
  cmt1 = ["멋있는", "귀여운", "큐티한", "내가 좀 ㅎ", "하픽고수", "잘생긴", "초등학생", "13살", "개발하는", "심심한", "냥냥이", "TMI하는", "한국을 사랑하는", "여행 가고싶은", "윈도우를 사랑하는", "와 샌즈라고 외치는", "발로란트 장인", "전교1등(반어법)", "좀 이상한", "전과목 A인"]
  $(".hometxt").text(cmt1[getRandomArbitrary(0, cmt1.length - 1)])
}

reload()
