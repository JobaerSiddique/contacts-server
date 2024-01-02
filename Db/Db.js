const mongoose = require('mongoose')

const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5yaibgn.mongodb.net/ContactDb?retryWrites=true&w=majority`

mongoose.connect(url)
.then(()=>{
    
    
    console.log('database Connected')
})
.catch((err)=>{
    console.log(err)
})