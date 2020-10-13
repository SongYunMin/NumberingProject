const mysql = require('mysql');
const express = require('express');
const app = express();
const ejs = require('ejs');
const router = express.Router();

console.log("test Print");

let connection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '',
    database : 'numbering'
});
// TODO : 변수로써 sql에 삽입할 수 있어야 함
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected Success");
    let sql = "INSERT INTO student(name, student_num) VALUES ('Park','Sheep')";
    connection.query(sql,function(err,result){
        if(err)throw err;
        console.log("Insert OK");
    })
});



//
// router.get('/', function(req,res){
//     console.log("get Join URL");
//     res.sendFile(path.join(__dirname,"../../source/index.html"));
// });