const express=require('express');
const cors=require('cors')
const route=require('./routes/route');
const app=express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:false}))
app.use('/github',route)
const PORT=8080
app.listen(PORT,()=>{
  console.log(`Listening at ${PORT}` )
})