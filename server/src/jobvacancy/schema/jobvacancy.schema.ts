import * as mongoose from 'mongoose';
import { UserRepository } from 'src/auth/user.repostitory';

export const jobvacancySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    company:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})