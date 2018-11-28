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
      console.log("MongoDb Connected - Login")
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
      const token = user._id
      res.send({userData:user, token})
    }else{
      console.log("로그인 실패! 비밀번호와 아이디를 확인해주세요")
      res.send()
    }    
  })
});

router.post('/sign-process',function(req,res){
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - SignProcess")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    var signData = req.body
    console.log("*********** 회원가입 요청 ***********")
    console.log(req.body)
    if(await people.findOne({userId: signData.signId})){
    console.log("회원가입 실패")
      res.send("fail")
    }else{
      var result = await people.insertOne(
        {
          userName:signData.signName,
          userId : signData.signId,
          userPw : signData.signPw,
          userLive : signData.signGender,
          userBirth : signData.signBirth,
          userJob : signData.signJob,
          userLive : signData.signLive,
          userGender: signData.signGender,
          userMarry : signData.signMarry
        })
      console.log("회원가입 성공 : " + result)
      res.send("success")
    }
  })
})


router.post('/me',function(req,res){
  console.log("hi")
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - Me")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    console.log(req.body)
    const user = await people.findOne({userId:req.user.id})
    console.log(user)
    var loginId = req.body.loginId
    var loginPw = req.body.loginPw
    // const accessLog = await db.findAccessLog({userId: user.id})
    const accessLog = "abc"
    console.log(accessLog)
    console.log(user)
    res.json({user, accessLog})
  })
}) 


module.exports = router;
