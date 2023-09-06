import mongoose from "mongoose";

const Schema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            max: 100,
        },
        description: {
            type: String,

        },
        media: {
            type: String,

        },
        likes: {
            type: Array,
            default: []
        },
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                content: {
                    type: String,
                    required: true,
                },
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true }
)
export const StudentPost = mongoose.model("StudentPost", Schema);