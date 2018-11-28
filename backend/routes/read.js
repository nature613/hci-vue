var express = require('express');
var router = express.Router();
const auth = require('../auth.js')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;  

/* GET users listing. */
router.post('/simple', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - readSimple")
    }
    const db = client.db("hci")
    const simple = db.collection('simple')
    console.log("simple list 불러오기 ")
    var simpleList = await simple.find().toArray()
    console.log("simpleList " + simpleList);
    console.log(simpleList)
    // if(user){
    //   console.log("로그인 성공!")
    //   console.log("*********** 일치하는 유저 ***********")
    //   console.log(user)
    //   const token = user._id
    //   res.send({userData:user, token})
    // }else{
    //   console.log("로그인 실패! 비밀번호와 아이디를 확인해주세요")
    //   res.send()
    // }    
    res.send(simpleList)
  })
});

router.post('/simple/vote-o/:contentId', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - simple vote-o")
    }
    const db = client.db("hci")
    const simple = db.collection('simple')
    var contentId = req.params.contentId
    console.log("찾으려는 글의 _id 값 : " + contentId)
    // var ObjectId = require('mongodb').ObjectId;       
    var oContentId = new ObjectId(contentId);
    await simple.update({_id:oContentId},{ $inc: { oVote: 1} })
    res.send("good")
  })
});

router.post('/simple/vote-x/:contentId', function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - simple vote-x")
    }
    const db = client.db("hci")
    const simple = db.collection('simple')
    var contentId = req.params.contentId
    console.log("찾으려는 글의 _id 값 : " + contentId)
    var xContentId = new ObjectId(contentId);
    await simple.update({_id:xContentId},{ $inc: { xVote: 1} })
    res.send("stupid")
  })
});



module.exports = router;
