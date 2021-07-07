const books =[
    {
    ISBN: "12345ONE",
    title: "Node JS",
    author: [1,2],
    language: "en",
    publication:"2020-07-07",
    numOfPage: 225,
    category:["programming","web dev", "tech","Node JS"],
    publication:1,
    },
    {
        ISBN: "12345TWO",
        title: "REACT JS",
        author: [1,2,3],
        language: "en",
        publication:"2022-01-30",
        numOfPage: 200,
        category:["programming","web dev", "tech","REACT JS"],
        publication:1,
        },
        {
            ISBN: "12345THREE",
            title: "NODE JS",
            author: [2,3],
            language: "en",
            publication:"2018-10-07",
            numOfPage: 200,
            category:["programming","web dev", "tech","REACT JS"],
            publication:1,
            }

];

const authors = [
    {
    id: 1,
    name:"Ankita",
    book: "12345ONE",
},
{
    id: 2,
    name:"Nikita",
    book: "12345TWO",
},
{
    id: 3,
    name:"Mehul",
    book: "12345ONE"
}

];

const publications =[{
    id:1,
    name:"Harara",
    books: "12345ONE",
}];

module.exports={
    books,authors,publications
}