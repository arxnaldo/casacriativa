// 00 - CREATE AND CONFIGURE SERVER

const express = require("express")
const server = express()
const db = require("./db")

server.use(express.urlencoded({ extended: true }))

server.use(express.static("public"))

// 01 - NUNJUCKS

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

// 02 - IDEAS ARRAY

/*const ideas = [
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729062.svg",
      title: "Aprenda algo novo",
      category: "Produtividade", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729009.svg",
      title: "Estude culinária",
      category: "Culinária", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
      title: "Aprenda a programar",
      category: "Estudo", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
      title: "Cante em um karaokê",
      category: "Diversão em Família", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
      title: "Pratique meditação",
      category: "Mentalidade", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729076.svg",
      title: "Assista uma série",
      category: "Entretenimento", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis fermentum neque, vitae vulputate purus mattis quis.",
      url: "https://rocketseat.com.br"
    },
]*/

// 03 - ROUTES

server.get("/", function (req, res) {
  
  const reversedIdeas = [...rows].reverse()
  
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) return console.log(err)
    
    let lastIdeas = []
    for (let idea of reversedIdeas) {
      if(lastIdeas.length < 4) {
        lastIdeas.push(idea)
      }
   }
  
  return res.render("index.html", { ideas: lastIdeas })
  })
 
})

server.get("/ideas", function (req, res) {
  
  db.all(`SELECT * FROM ideas`, function (err, rows) {
    
  if (err) return console.log(err)
    
  const reversedIdeas = [...rows].reverse()
    
  return res.render("ideas.html", { ideas: reversedIdeas })
  })
  
})

server.post("/", function (req, res){
  const query = `
  INSERT INTO ideas(
    img,
    title,
    category,
    description,
    url,
  ) VALUES (?,?,?,?,?);
 `
 
  const = values [
    req.body.img,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.url,
    ]
    
  db.run(query, values function(err){
    if (err) return console.log(err)
    
    console.log (this)
    
    return res.redirect ("/ideas")
  })
})

server.listen(3000)