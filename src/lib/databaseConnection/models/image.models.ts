import mongoose, { Model, Schema, Document } from "mongoose";


interface ImageTypes extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: URL;
    width?: number;
    height?: number;
    config?: object;
    author: {
        _id: string,
        firstName: string,
        lastName: string
    };
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    createdAt: Date;
    updatedAt: Date;
}


const imageSchema: Schema<ImageTypes> = new Schema({
    title: {type: String, required: true},
    transformationType:  {type: String, required: true}, 
    publicId:  {type: String, required: true},
    secureURL:  {type: URL, required: true},
    width:  {type:  Number},
    height:   {type:  Number},
    author: {
     type: Schema.Types.ObjectId, ref: "User"
    },
    config:  {type: Object},
    transformationUrl:  {type: URL},
    aspectRatio: {type:  String},
    color: {type:  String},
    prompt: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})


export const Image = (mongoose.models.images as Model<ImageTypes>) || (mongoose.model<ImageTypes>("images",imageSchema))