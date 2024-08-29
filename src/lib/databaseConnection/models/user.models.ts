import mongoose, { Model, Schema, Document, models, model } from "mongoose";

const userSchema = new Schema({
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
        type: URL,
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

export const User = models?.User || model("User",userSchema)