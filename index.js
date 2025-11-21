const express=require('express')
const app=express()
app.use(express.urlencoded())
app.use(express.static('public'))
app.set('view engine','ejs')


const home=require('./routers/home')
app.use('/',home)

const game=require('./routers/gamerouter')
app.use('/game',game)

app.use((req,res)=>{
    res.send('page not found')
})
app.listen(3000,()=>{
    console.log('started..')
})