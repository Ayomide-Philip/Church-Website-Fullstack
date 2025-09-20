import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Leaders",
        required: true
    },
    secure_url:{
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 1000,
    },
    public_id:{
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 500,
    },
    signature:{
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 1000,
    },
    asset_id:{
        type:String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 500,
    },
    original_filename:{
        type: String,
        required: true,
        trim: true,
        minlength: 20,
        maxlength: 500,
    }
})

const Image = mongoose.model("Image", imagesSchema);
export default Image;