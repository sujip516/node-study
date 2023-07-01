const express = require("express");
// 주소를 만들때 사용하는 도구.
const router = express.Router();

// 주소 만들기(router) : get 방식의 API 만들기.
// router 안에서 주소를 만들어주는 get 도구를 꺼낸 후, 주소를 작성하고,
// req를 받았을 때, 어떻게 res 할 것인지의 로직을 함수 안에 작성.
router.get("/", (req, res) => {
  // 그림 파일을 전달할때는 render() 함수 사용.
  // app.js에서 view 파일이 views 폴더에 있다고 작성해주었기 때문에,
  // render() 함수 안에 view 파일명만 적어주면 된다.
  res.render("index", { title: "Main Page" });
});

// 페이지 안에 추가 카테고리 페이지 만들기.
router.get("/about", (req, res) => {
  res.send("About Page");
});

// (app.js에서 사용하기 위해)변수 router 밖으로 내보내기.
module.exports = router;
