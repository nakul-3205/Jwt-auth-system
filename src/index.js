import express from 'express'
import cors from 'cors'
import router from './routes/healthcheck.routes.js'

// const cors=cors()
const app=express()
const port =3000

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(',') ||"http://localhost:4000",
    credentials:true,
    methods:['GET','POST','PUT','PATCH'],
    allowedHeaders:['Content-Type','Authorization']
}))


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/api/v1/healthcheck',router)
app.listen(port,()=>{
    console.log('app is litening on: ',`http://localhost:${port}`)
})