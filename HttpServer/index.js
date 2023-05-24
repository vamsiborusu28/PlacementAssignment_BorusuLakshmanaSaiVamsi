
// declare 
import express from 'express';
const PORT=3000;

// assign the express app
const app=express();


// listen
app.listen(PORT, () => {console.log(`application is running on port ${PORT}`)});

// routes

app.get('/data',(req,res)=> {
    res.status(200).send("given name is vamsi");
})

app.get('/',(req,res) => {
    res.status(200).send(`<h1>Welcome to Backend App</h1>`)
})
app.get('/posts' , (req,res) => {
    const posts=[
        {
            title: "This is the first post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the second post",
            body: "This is the body of the second post",
          },
          {
            title: "This is the third post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the fourth post",
            body: "This is the body of the second post",
          },{
            title: "This is the fifth post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the sixth post",
            body: "This is the body of the second post",
          },{
            title: "This is the seventh post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the eighth post",
            body: "This is the body of the second post",
          },{
            title: "This is the nineth post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the tenth post",
            body: "This is the body of the second post",
          },{
            title: "This is the eleventh post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the twelth post",
            body: "This is the body of the second post",
          },{
            title: "This is the thirteen post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the second post",
            body: "This is the body of the second post",
          },{
            title: "This is the first post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the second post",
            body: "This is the body of the second post",
          },{
            title: "This is the first post",
            body: "This is the body of the first post",
          },
          {
            title: "This is the second post",
            body: "This is the body of the second post",
          },
        ]
    res.status(200).send(`posts are sent `);
    res.json(posts);
})


