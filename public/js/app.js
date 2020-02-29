// TODO_BUG: nav 리스트 글자색 바꾸기
let url = location.pathname,
    sideBar = document.getElementsByTagName("ul"),
    list = sideBar[0].childNodes;    

list.forEach((elm, index) => {
  let aList = [];
      path = elm.childNodes[0].pathname;

  aList.push(path);
  console.log(aList.indexOf(url));
});
