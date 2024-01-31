var mysql = require('mysql');



var pool = mysql.createPool({
    connectionLimit:4,
    host: "localhost",
  user: "root",
  password: "Piyush@329",
  database:"test"
  });
  
  pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Database connected successfully');
    connection.release();
  });

  query = (sql) =>{
    return new Promise((resolve, reject)=>{
        pool.query(sql,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
  
  module.exports = query;
