import React from "react";
import cl from "./Post.module.css"

const Post =(props)=>{

    return(      
      <div className={cl.post}>
        <img src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"/>
          <div className={`${cl.pop} ${cl.gold}`}>
            {props.message} 
          </div>   
          <div>
            <span>like</span>
           <span className={cl.sp}> {props.like}</span>
          </div>
           </div>          
    )
}

export default Post;