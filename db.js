const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./cc.db')

db.serialize(function(){
  // 01 - CREATE TABEL
  db.run(`
  CREATE TABLE IF NOT EXISTS ideas(
  img TEXT,
  title TEXT,
  category TEXT,
  description TEXT,
  url TEXT
  );
`)
  // 02 - DELETE DATA
  
  db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
      if (err) return console.log(err)
      
      console.log("DELETED", this)
  })
  
  // 03 - VERIFY DATA IN TABLE
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) return console.log(err)
    
    console.log(rows)
  })
})

module.exports = db