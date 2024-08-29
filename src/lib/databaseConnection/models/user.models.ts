import mongoose, { Model, Schema, Document, models, model } from "mongoose";

interface UserTypes extends Document{
    clerkId: string; // String type, required and unique
    isAdmin: boolean; // Boolean type, defaults to false
    email: string; // String type, required
    username: string; // String type, required and unique
    photo: string; // String type, required
    lastName: string; // String type, required
    firstName: string; // String type, required
    planId?: number; // Number type, defaults to 1
    creditBalance?: number; // Number type, defaults to 10
}


const userSchema: Schema<UserTypes> = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
    ,
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    planId: {
        type: Number,
        default : 1
    },
    creditBalance: {
        type: Number,
        default : 10
    }


})

export const User = models?.users as Model<UserTypes> || model<UserTypes>("users",userSchema)