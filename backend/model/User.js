import mongoose from "mongoose";
const Schema=mongoose.Schema; //to get schema class of mongoose
const userSchema=new Schema({ //creating a collection
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true}],
});
export default mongoose.model("User",userSchema); //created a model and stored a collection by the name of users.