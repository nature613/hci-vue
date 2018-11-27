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
    var user = await people.findOne({userId:loginId, userPw:loginPw})
    console.log(user)
    const accessToken = auth.signToken(user.id)
    res.json({accessToken})
  })
});

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
