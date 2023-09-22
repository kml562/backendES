import express from 'express';
const router= express.Router();

router.get('.get',(req,res)=>{
    try {
        res.status(200).json({"data":"api empliment sucessfully"});
    } catch (error) {
        res.status(500).json({msg:error })
    }
})
export default router;