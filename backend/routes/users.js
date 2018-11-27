var express = require('express');
var router = express.Router();
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
    res.send('abc')
  })
});


module.exports = router;
