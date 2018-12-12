var express = require('express');
var router = express.Router();
const auth = require('../auth.js')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//로그인 과정
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
//db에 회원가입한 회원 등록해주는 과정
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
        })
      console.log("회원가입 성공 : " + result)
      res.send("success")
    }
  })
})
//jwt이용해서 인증되는 것 시험해봄
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
//id로 회원 찾아서 유저 정보 반횐
router.post('/find',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - Me")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    console.log(req.body)
    const user = await people.findOne({userId:req.body.id})
    console.log(user)
    res.send(user)
  })
})
//회원 정보 수정
router.post('/modify',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - Me")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    console.log(req.body)
    console.log(req.body.userGender)
    await people.update({userId : req.body.userId}, {$set:
      { 
        userName : req.body.userName,
        userPw: req.body.userPw,
        userGender : req.body.userGender,
        userBirth : req.body.userBirth,
        userJob : req.body.userJob,
        userLive  : req.body.userLive
      }
    })
    res.send("modify complete")
  })
})
//회원 탈퇴 과정
router.post('/withdrawal',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - Me")
    }
    const db = client.db("hci")
    const people = db.collection('people')
    console.log(req.body.userId)
    await people.remove({userId:req.body.userId}) //userdata 삭제
    res.send("withdrawal complete")
  })
})

module.exports = router;
