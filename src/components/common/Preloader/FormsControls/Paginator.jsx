import React from "react";
import cl from "./Paginator.module.css";

let Paginator=(props)=>{

    let pagesCount= Math.ceil(props.totalUsersCount / props.pageSize);
    let pages =[];
    for(let i = 1 ; i <= pagesCount; i++){
        pages.push(i);
    }
    pages.length=5
    if(props.currentPage===1){
     pages[1]=props.currentPage+1
     pages[2]=props.currentPage+2
     pages[3]=props.currentPage+3
     pages[4]=props.currentPage+4
   
   }else if(props.currentPage>=3){
     pages[0]=props.currentPage-2
     pages[1]=props.currentPage-1
     pages[2]=props.currentPage
     pages[3]=props.currentPage+1
     pages[4]=props.currentPage+2
   }else if(props.currentPage===pages.length){
     pages[0]=props.currentPage-4
     pages[1]=props.currentPage-3
     pages[2]=props.currentPage-2
     pages[3]=props.currentPage-1
     pages[4]=props.currentPage
   }

    return(
        <div>
        <div className={cl.pages}>
        {pages.map( p => {
          return <span className={cl.page}><span className={props.currentPage === p && cl.selectedPage}
           onClick={ (e) => {props.onPageChanged(p)}}>{p}</span></span>       
        })}
  </div>  
      </div>
    )
}

export default Paginator;