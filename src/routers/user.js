const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/users',async(req,res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.send(user)
    }catch(e){
        res.send(e)
    }
})


module.exports = router