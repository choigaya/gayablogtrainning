let url = location.pathname;
    sideBar = document.getElementsByTagName('ul');
    childList = sideBar[0].childNodes;

// pathname color setting
if (url === '/') {
  childList[0].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/portfolio') {
  childList[1].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/develop') {
  childList[2].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/art') {
  childList[3].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/account') {
  childList[4].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/language') {
  childList[5].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/blog') {
  childList[6].childNodes[0].style.color = "rgba(51,51,51,.7)";
} else if (url === '/about') {
  childList[7].childNodes[0].style.color = "rgba(51,51,51,.7)";
}
 