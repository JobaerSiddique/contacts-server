const express = require('express')
const router = new express.Router()
const contactDb = require('../model/ContactSchema')
const cors = require('cors')
router.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,  
}))

router.post('/addcontact', async(req,res)=>{
    const {name,phone,address,photo,email} = req.body
    if(!name || ! phone || !address || ! photo){
       return res.status(422).send({message:"Fill all the details"})
    }
    try {
        const alreadyAddContact = await contactDb.findOne({name:name,email:email})
        if(alreadyAddContact){
           return res.send({message:"Alredy Add This Contact"})
        }
        const result = await contactDb.create({name,email,phone,address,photo,})

    res.status(200).send(result)
    } catch (error) {
        res.status(404).send({message:"Server Site Error"})
    }
    
})

router.get('/allcontacts', async(req,res)=>{
    const result = await contactDb.find({})
    res.send(result)
})
router.delete('/allcontacts/:id', async(req,res)=>{
    const id = req.params.id
    const deleteContact = await contactDb.findByIdAndDelete(id)
    res.send(deleteContact)
    
    console.log(deleteContact)
})


module.exports = router