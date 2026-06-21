import mongoose, {Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const videoSchema = new Schema({

    videfile:{
        type: String,
        required: true
    },
     thumbnail:{
        type: String,
        required: true
    },
     title:{
        type: String,
        required: true
    },
     duration:{
        type: Number,
        required: true
    },
    view:{
        type:Number,
        default: 0
    },
    isPublished:{
        type:Boolean,
        default: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},{
    timestamps: true
})

videoSchema.plugin(mongoosePaginate)


export const video = mongoose.model("Video", videoSchema)