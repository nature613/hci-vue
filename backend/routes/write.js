var express = require('express');
var router = express.Router();
const auth = require('../auth.js')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/* GET users listing. */
router.post('/simple',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - SimpleWrite")
    }
    const db = client.db("hci")
    const simple = db.collection('simple')
    var simpleWriteContent = req.body.simpleWriteContent
    var simpleWriteO = req.body.simpleWriteO
    var simpleWriteX = req.body.simpleWriteX
    console.log("사용자가 입력한 글 조건 : " + simpleWriteContent)
    console.log("사용자가 입력한 O : " + simpleWriteO)
    console.log("사용자가 입력한 X : " + simpleWriteX)
    console.log("사용자의 성별 : " )
    console.log("사용자의 직업 : ")
    console.log("사용자가 사는 곳 : ")
    console.log("사용자의 결혼 여부 : ")
    console.log("사용자의 나이 : ")
    

    // var user = await people.findOne({userId:loginId, userPw:loginPw})
    // if(user){
    //   console.log("로그인 성공!")
    //   console.log("*********** 일치하는 유저 ***********")
    //   console.log(user)
    //   const token = "abc"
    //   res.send({userData:user, token})
    // }else{
    //   console.log("로그인 실패! 비밀번호와 아이디를 확인해주세요")
    //   res.send()
    // }    
    await simple.insertOne(
      {
        content:simpleWriteContent, 
        O:simpleWriteO, 
        X:simpleWriteX, 
        oVote:0, 
        xVote:0,
        gender:{
          male:0,
          female:0
        },
        job:{
          none:0,
          middle:0,
          high:0,
          univ:0,
          houseWife:0,
          company:0,
          self:0,
          art:0,
          etc:0,
        },
        marry:{
          yes:0,
          no:0
        },
        live:{
          ss:0,
          gg:0,
          gw:0,
          cn:0,
          cb:0,
          jb:0,
          jn:0,
          gb:0,
          gn:0,
          jj:0
        },
        age:{
          one:0,
          two:0,
          three:0,
          four:0,
          five:0,
          upSix:0,
        }
      })
    res.send("good")
  })
})


module.exports = router;
