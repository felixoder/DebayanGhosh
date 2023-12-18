const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
  
    obj={
        name:" Debayan",
        title:"Ghosh",
        number:89
    }
    res.json(obj)
})

module.exports = router
