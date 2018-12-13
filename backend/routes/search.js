var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;  

router.post('/simple/:search',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - readdeep")
    }
    const db = client.db("hci")
    const simple = db.collection('simple')
    var search = req.params.search
    var searchSimpleList = await simple.find(
      {
        $or :[
          {content:{$regex : search}},
          {O:{$regex : search}},
          {X:{$regex : search}}
        ]
      }
    ).toArray()
    res.send(searchSimpleList)
  })
})

router.post('/deep/:search',(req,res)=>{
  MongoClient.connect("mongodb://localhost:27017",
  {useNewUrlParser:true},async(err,client)=>{
    if(!err){
      console.log("MongoDb Connected - readdeep")
    }
    const db = client.db("hci")
    const deep = db.collection('deep')
    var search = req.params.search
    var searchDeepList = await deep.find(
      {
        $or :[
          {content:{$regex : search}},
          {O:{$regex : search}},
          {X:{$regex : search}}
        ]
      }
    ).toArray()
    res.send(searchDeepList)
  })
})



module.exports = router;
