const {Pool} = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'database-1.cq8gyfeqr0yv.us-west-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'zzyzx941203',
  port: 5432,
})
const get_all = (req, res, next) => {
    pool.query('select * from test;', (err, res)=>{
    if(err) {
      throw err;
    }
    console.log(res);
  });
  res.send('./view/index.pug')
};
module.exports = get_all;