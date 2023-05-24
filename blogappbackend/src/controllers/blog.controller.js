import {BlogPost} from '../models/blog.schema.js';




export const addBlog=async function(req,res){
    try{
        const blogPost = new BlogPost({
            title: req.body.title,
            content: req.body.content
          });
        
          await blogPost.save();
        
          res.status(201).json(blogPost);
    }catch(error){
        res.status(401).json({
            success:false,
            message:"blog not created",
        })
    }
}


export const deleteBlog= async function(req,res){
    const blogPost = await BlogPost.findById(req.params.id);

  if (!blogPost) {
    res.status(404).send('Blog post not found');
    return;
  }

  await blogPost.remove();

  res.status(200).send('Blog post deleted');
}


export const getBlog= async function(req,res){
    try{
    const blogPosts = await BlogPost.find();

    res.status(200).json(blogPosts);
    }catch(error){
        res.status(400).send("blog not found");
    }
}


export const updateBlog= async function(req,res){
    const blogPost = await BlogPost.findById(req.params.id);

  if (!blogPost) {
    res.status(404).send('Blog post not found');
    return;
  }

  blogPost.title = req.body.title;
  blogPost.content = req.body.content;

  await blogPost.save();

  res.status(200).json(blogPost);
}

