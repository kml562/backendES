import Test from '../model/testSecma.js';


export const testfun=async(req,res)=>{
    try {
        const data= req.body;
        //validator if you want to apply that 

        const userdata= await Test.create(data);
        return res.status(201).json({data:data,message:'succfuly uplaod data '});
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}