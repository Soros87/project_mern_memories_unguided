import express from 'express'

const router = express.Router();

//call back function that is executed once someone visits the route in localhost:5100
router.get('/',(req,res)=>{
res.send('THIS WORKS')
})

export default router;