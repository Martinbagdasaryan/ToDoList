import mongoose from "mongoose";

const To_Do_List = new mongoose.Schema({
    text:{type:String,required:true},
    userId:{type:String,required:true},
    checked:{type:Boolean,required:true}
})
export default mongoose.model('To_Do_List',To_Do_List)