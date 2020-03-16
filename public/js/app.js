let headerNavUl = document.getElementsByTagName("ul")[0],
    headerNavLi = headerNavUl.children,
    categoryUl = document.getElementsByTagName("ul")[2],
    categoryLi = categoryUl.children,
    url = location.pathname;
     
for (let i = 0; i < headerNavLi.length; i++) {
    if (url.includes(headerNavLi[i].children[0].pathname)) {
      if (headerNavLi[0].children[0].classList.contains("active")) {
        headerNavLi[0].children[0].classList.remove("active");     
      }
      headerNavLi[i].children[0].classList.add("active");
    }    
}

for (let j = 0; j < categoryLi.length; j++) {
  if (url.includes(categoryLi[j].children[0].pathname)) {
    if (categoryLi[0].children[0].classList.contains("active")) {
      categoryLi[0].children[0].classList.remove("active");     
    }
    categoryLi[j].children[0].classList.add("active");
  }    
}

