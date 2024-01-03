const express =require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const router = require('./routers/router')
require('./Db/Db')
const PORT = process.env.PORT


app.use(express.json())
app.use('/auth',router)
app.use(cors({
    origin: 'http://localhost:5173'|| 'https://verdant-treacle-8e0ee4.netlify.app',
    credentials:true,  
}))

app.get('/', (req,res)=>{
    res.send('Server is Connected')
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
