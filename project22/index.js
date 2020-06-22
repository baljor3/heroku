const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const {Pool} =require('pg');

var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL
  /*
  connectionString: 'postgres://postgres:159159@localhost:5432/users'
  /*
  user: 'username',
  host: 'localhost',
  database: 'users',
  password: '159159',
  port: 5432,
  */
});

var app = express();
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => res.render('pages/index'));
  app.get('/database',(req,res) => {
    var getUsersQuery = `SELECT * FROM usr`;
    pool.query(getUsersQuery,(error,result)=>{
      if(error){
       res.end(error);
     }
      var cake = {'results':result.rows}
      res.render('pages/db',cake);
    })
  });
  app.post('/adduser',(req,res)=>{
    console.log(req.body.name);
    var name = req.body.name;
    var size = req.body.Size;
    var height = req.body.Height;
    var id = req.body.uid;
    var type = req.body.Type;
    var getUsersQuery = `INSERT INTO usr(uid,name,size,height,type) VALUES ('${id}','${name}','${size}','${height}','${type}')`;
    pool.query(getUsersQuery,(err,resu)=>{
      if(err){
       console.error(err)
     }
     res.send("data has been added")
    })
  });
  app.post('/delete',(req,res)=>{
    var id = req.body.uid;
    var deleteUsers = `DELETE from usr where uid = '${id}'`;
    console.log(deleteUsers)
    pool.query(deleteUsers,(err,resu)=>{
      if(err){
       console.error(err)
     }
     console.log(resu)
     res.send("data has been deleted")
    })
  });
  app.post('/modify',(req,res)=>{
    console.log(req.body.name);
    var name = req.body.name;
    var size = req.body.Size;
    var height = req.body.Height;
    var id = req.body.uid;
    var type = req.body.Type;
    var getUsersQuery = `UPDATE usr SET name = '${name}', size = '${size}', height ='${height}',type = '${type}' WHERE uid = '${id}'`;
    pool.query(getUsersQuery,(err,resu)=>{
      if(err){
       console.error(err)
     }
     res.send("data has been modify")
    })
  });

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
