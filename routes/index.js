const express = require("express");
const url = require("url");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(req.url);
  res.render("index", { 
     title: "Gaya Blog",
    });
});

router.get("/portfolio", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 포트폴리오",
    heading: "포트폴리오",
    pathname: "portfolio", 
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/develop", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 개발공부",
    heading: "개발공부",
    pathname: "develop", 
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/art", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 문화예술",
    heading: "문화예술",
    pathname: "art",
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/account", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 재무/회계",
    heading: "재무/회계",
    pathname: "account",
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/language", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 외국어공부",
    heading: "외국어공부",
    pathname: "language",
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/blog", (req, res, next) => {
  res.render("blog", { 
    title: "Gaya - 블로그", 
  });
});

router.get("/about", (req, res, next) => {
  res.render("about", { 
    title: "Gaya - About",
   });
});

router.get("/:id/page/:id", (req, res, next) => {
  /* console.log(url.parse(req.url).pathname); */
  res.render("page", {
     title: "Gaya - page" 
    });
});

router.get("*", (req, res, next) => {
  res.send("404 not found");
});

module.exports = router;
