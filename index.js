const express=require('express')
const path=require('path')

const app=express();
//app.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'public','index.html'))
//})

//Set a static folder:
app.use(express.static(path.join(__dirname,'public')))
const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started at Port : ${PORT}`))