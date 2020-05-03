import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const userSchema = new mongoose.Schema({
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
    },

});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password,this.password);
}