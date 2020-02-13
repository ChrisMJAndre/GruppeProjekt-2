//testede om jeg kunne få noget til at virke, men det gør det ikke kh nillerdrengen

const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/index.ejs'))
    res.render('index')
})
app.get('/about',(req,res)=>{ //kaldes når en request til /about kommer
    //res.sendFile(path.resolve(__dirname,'pages/about.ejs'))
    res.render('about')
})
app.get('/contact',(req,res)=>{ //kaldes når en request til /contact kommer
    //res.sendFile(path.resolve(__dirname,'pages/contact.ejs'))
    res.render('contact')
})
app.get('/post',(req,res)=>{ //kaldes når en request til /about kommer
    //res.sendFile(path.resolve(__dirname,'pages/post.ejs'))
    res.render('post')
})
app.use(express.static('public'))
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})