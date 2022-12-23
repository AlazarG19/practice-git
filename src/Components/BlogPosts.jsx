import React, {useState, useEffect} from 'react';

import BlogDetail from './BlogDetail';
import data from './jsonapi/data.json';
const BlogPosts = () => {
    const [blog, Setblog] = useState([])
    useEffect(()=>{
      console.log(data.blogdata[0].id)
      Setblog(data)
    }, [])
    return (
        <div class="blogcontainer">
        {data.blogdata.map((blog)=>{
          return(
            <div class="col-lg-12 card cardmodification">
              <img class="card-img-top img-responsive" src={blog.blogImage} alt=''/>
              {/* style="margin-top: 55px;" */}
              <div class="card-body" >
                <p>by {blog.author}</p>
                <h2 class="card-title">{blog.blogTitle}</h2>
                <p class="card-text">{blog.blogDescription}</p>
                
                <a href="./moreblog.html"> <button class="btn btn-primary btnmodify">ReadMore</button></a>
              </div>
            </div>
          )
        })}
              
         
            
            
            <div class="paging">
              <div class="paginationactive"><h5>1</h5></div>
              <div class="circle"><h5>2</h5></div>
              <div class="nxtbtn"><h5>Next</h5></div>
            </div>
          </div>
    );
}


export default BlogPosts;
