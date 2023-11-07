import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users/user', (req, res) => {
   res.send("hello");
})

const PORT = 3000;
app.listen(PORT, function(){
   console.log("app listening on port " + PORT );
});