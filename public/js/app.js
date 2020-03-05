let ul = document.getElementsByTagName("ul")[0],
  li = ul.children;
  url = location.pathname;

for (let index = 0; index < li.length; index++) {
    if (url.includes(li[index].children[0].pathname)) {
      if (li[0].children[0].classList.contains("active")) {
        console.log(index);
        li[0].children[0].classList.remove("active");     
      }
      li[index].children[0].classList.add("active");
    }    
}
