const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogdb");
const blogSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }
    }

)
const blog=mongoose.model("blog",blogSchema);
exports.putBlog=async function(newBlog){
    let nBlog=new blog({
        title:newBlog.title,
        content:newBlog.content
    });
  await  nBlog.save();
}
exports.getBlogs=async function(){
    return await blog.find({});
}
exports.getBlogById=async function(id){
    return await blog.findOne({_id:id});
}