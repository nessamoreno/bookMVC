import express from "express";

const app = express();

app.get('/book/list',(req, response)=> response.send("listing all books"));
app.post('/boo/create',(req, response)=> response.send("creating books"));
app.put('/book/update',(req, response)=> response.send("updating book information"));
app.delete('/book/delete',(req, response)=> response.send("removed books"));

app.listen(3000);
console.log('server running on port 3000')