require("dotenv").config();

const express = require("express");

const shapeAI = express();

const mongoose = require("mongoose");

// Microservices Routes
const Books = require("./API/Book");
const Authors = require("./API/Author");
const Publications = require("./API/Publication");

//mongodb connection
mongoose
.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify: true,
  useCreateIndex: true,
})
.then (() => console.log("connected to mongodb"))

shapeAI.use(express.json());



// Initializing Microservices
shapeAI.use("/book", Books);
shapeAI.use("/author", Authors);
shapeAI.use("/publication", Publications);

shapeAI.listen(3000, () => console.log("Server running!!😎"));




/*
Route           /
Description     get all books 
Access          PUBLIC
Parameters      NONE
Method          GET
*/
// shapeAI.get("/", (req, res) => {
//     return res.json({ books: database.books });
//   });

/*
Route           /is/:isbn
Description     get all books for the isbn
Access          PUBLIC
Parameters      isbn
Method          GET
*/
// shapeAI.get("is/:isbn",(req,res) => {
//     const getSpecificBooks = database.books.filter((book) => {
//       book.ISBN === req.params.isbn
//     });

//     if(getSpecificBooks.length === 0){
//       return res.json(
//         {error : `No book found for the isbn ${req.params.isbn}`}
//       )
//     }


//   return res.json({books : getSpecificBooks})
// })
/*
Route           /c/:category
Description     get all books for the category
Access          PUBLIC
Parameters      category
Method          GET
*/
// shapeAI.get("/c/:category",(req,res) => {
//   const getSpecificBooks = database.books.filter((book) => 
//     book.category.includes(req.params.category)
//   );

//   if (getSpecificBooks.length === 0) {
//     return res.json({
//       error: `No book found for the category of ${req.params.category}`,
//     });
//   }
//   return res.json({books:getSpecificBooks})
// });

/*
Route           /author
Description     get all books for the author
Access          PUBLIC
Parameters      none
Method          GET
*/
// shapeAI.get("/author",(req,res) => {
//   return res.json({authors : database.authors})
// });

/*
Route           /author/book
Description     get all books for the author
Access          PUBLIC
Parameters      ISBN
Method          GET
*/
// shapeAI.get("/author/book" , (req,res) => {
//      const getSpecificAuthor = database.authors.filter((author) => {
//        author.books.includes(req.params.isbn)
//      });

//      if(getSpecificAuthor.length === 0){
//        return res.json({
//          error : `no author found for this ${req.params.isbn}`
//        })
//      }

//      return res.json({authors : getSpecificAuthor })
// });
/*
Route           /publication
Description     get all publications 
Access          PUBLIC
Parameters      NONE
Method          GET
*/
// shapeAI.get("/publications" , (req,res)=>{
//   return res.json({publications : database.publications})
// });
/*
Route           /author/book
Description     get all books for the author
Access          PUBLIC
Parameters      ISBN
Method          GET
*/
// shapeAI.get("/publications/book" , (req,res) => {
//   const getSpecificPublications = database.publications.filter((publication) => {
//     publication.books.includes(req.params.isbn)
//   });

//   if(getSpecificPublications.length === 0){
//     return res.json({
//       error : `no author found for this ${req.params.isbn}`
//     })
//   }

//   return res.json({publications : getSpecificPublications })
// });

// post method

// shapeAI.post("/book/new",(req,res) => {
//   const {newbook} = req.body;
  
//   database.books.push(newbook);
//   return res.json({ books : database.books, message : "book is added!"});
// });

//   shapeAI.listen(3000,(req,res) => {
//     console.log("server is running!!")
//   })