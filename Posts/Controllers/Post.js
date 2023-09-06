
export const newPost = async (req, res, Db) => {
    const newPost = new Db(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePost = async (req, res, Db) => {
    try {
        const post = await Db.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("the post has been updated.")
        } else {
            res.status(403).json("you can update only your post.")
        }

    } catch (error) {
        res.status(500).json(error);
    }
}
export const deletePost = async (req, res, Db) => {
    try {
        const post = await Db.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne()
            res.status(200).json("the post has been deleted.")
        } else {
            res.status(403).json("you can delete only your post.")
        }

    } catch (error) {
        res.status(500).json(error);
    }
}
export const likePost = async (req, res, Db) => {
    try {
        const post = await Db.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("The Post has been liked.")
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("The Post has been disliked.")
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
export const getPost = async (req, res, Db) => {
    try {
        const post = await Db.findById(req.params.id);
        res.status(200).json(post);  
    } catch (error) {
        res.status(500).json(error);
    }
}
export const timelinePost = async (req, res, Db) =>{
    let postArray = [];
    try {
        const currentUser = await User.findById(req.body.userId);  //User schema is used in this line of code.
        const userPosts = await Db.find({userId: currentUser._id});
        const friendPosts = await Promise.all(  // this is for the posts which will be shown to the user 
            currentUser.followings.map((friendId) =>{  //followings give all the data of the person which are being followed.
                return Db.find({userId: friendId});
            })
        )
        res.json(userPosts.concat(...friendPosts))

    } catch (error) {
        res.status(500).json(error);
    }
} 
