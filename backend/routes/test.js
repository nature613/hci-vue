var express = require('express');
var router = express.Router();
const auth = require('../auth.js')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/* GET users listing. */
router.post('/login', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - Login (test)")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    var loginId = req.body.loginId
    var loginPw = req.body.loginPw
    console.log("사용자가 로그인시에 입력한 아이디 : " + loginId)
    console.log("사용자가 로그인시에 입력한 비밀번호 : " + loginPw)
    var user = await people.findOne({userId:loginId, userPw:loginPw})
    if(user){
      console.log("로그인 성공!")
      console.log("*********** 일치하는 유저 ***********")
      console.log(user)
      const token = "abc"
      res.send({userData:user, token})
    }else{
      console.log("로그인 실패! 비밀번호와 아이디를 확인해주세요")
    }    
  })
});

module.exports = router;
