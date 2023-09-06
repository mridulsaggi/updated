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
        poll: {
            question: String,
            options: [
                {
                    optionText: String,
                    votes: {
                        type: Number,
                        default: 0,
                    },
                },
            ],
        },
        likes: {
            type: Array,
            default: []
        },
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId, //User
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
    {timestamps:true}
)
export const TutorPost = mongoose.model("TutorPost",Schema);