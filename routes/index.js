const express = require("express");
const url = require("url");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Gaya Blog"
  });
});

router.get("/categories/portfolio", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 포트폴리오",
    heading: "포트폴리오",
    pathname: req.url,
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/categories/develop", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 개발공부",
    heading: "개발공부",
    pathname: req.url,
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/categories/art", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 문화예술",
    heading: "문화예술",
    pathname: req.url,
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/categories/account", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 재무/회계",
    heading: "재무/회계",
    pathname: req.url,
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/categories/language", (req, res, next) => {
  res.render("thumbnails", {
    title: "Gaya - 외국어공부",
    heading: "외국어공부",
    pathname: req.url,
    number: 0,
    content:
      "테스트중입니다...테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다....테스트중입니다...."
  });
});

router.get("/categories/blog", (req, res, next) => {
  res.render("blog", {
    title: "Gaya - 블로그"
  });
});

router.get("/archives", (req, res, next) => {
  res.render("about", {
    title: "Gaya - About"
  });
});

router.get("/categories", (req, res, next) => {
  res.render("about", {
    title: "Gaya - About"
  });
});

router.get("/tags", (req, res, next) => {
  res.render("about", {
    title: "Gaya - About"
  });
});

router.get("/about", (req, res, next) => {
  res.render("about", {
    title: "Gaya - About"
  });
});

router.get("/categories/:id/page/:id", (req, res, next) => {
  res.render("page", {
    title: "Gaya - page"
  });
});

router.get("*", (req, res, next) => {
  res.send("404 not found");
});

module.exports = router;
