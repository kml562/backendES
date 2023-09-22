import express from 'express';
import { testfun } from '../controller/testCon.js';
const router= express.Router();

router.get('/get',(req,res)=>{
    try {
        res.status(200).json({"data":"api empliment sucessfully"});
    } catch (error) {
        res.status(500).json({msg:error })
    }
});

router.post('/post',testfun );



export default router;