// 폴더 어딘가에 있는 express 꺼내오기.
const express = require("express");
// 설치한 helmet 불러오기.
const helmet = require("helmet");
// 서버 제작에 필요한 도구를 담은 express 함수를 변수 app안에 넣기.
const app = express();
const ejs = require("ejs");

// view file을 전달해주는 엔진(=도구)을 "ejs"로 사용한다고 명시.
// 확장자명이 ejs인 파일만 view engine으로 사용하겠다는 의미.
// ex) index.html(x) --> index.ejs(o)
app.set("view engine", "ejs");
app.set("views", "./views");
// css와 같은 정적 파일(=static file)의 경로 명시.
app.use("/public", express.static(__dirname + "/public"));

// helmet 사용하기.
// express가 제공하는 middleware 설정 함수.
app.use(helmet());

// router 경로 작성.
const mainRouter = require("./router/mainRouter");
app.use("/", mainRouter);

// 스위치 만들기.
// 몇 번 port를 사용하여 서버를 실행할지 명시(여기서는 3000 prot)
app.listen(3000, (req, res) => {
  console.log("서버 실행!");
});
