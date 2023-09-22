import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema = new Schema({
    Name:{
        type:String,
        require:true,
      minLength:[3,"more than or epual to 3 words "]
    },
    Age:{
        type:Number,
        min:[18,"min age 18"],
        max:[45,"max age limit is 45"]
    }
});

const Test= model('test',userSchema);
export default Test;