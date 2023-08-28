import React, { useState } from "react";
import { getCurrentPage } from "../../../../state/selectorsUsers";
import cl from "./Paginator.module.css";
import cn from "classnames";

let Paginator=({totalUsersCount,pageSize,currentPage,onPageChanged,portionSize=10})=>{

    let pagesCount= Math.ceil(totalUsersCount / pageSize);
    let pages =[];
    for(let i = 1 ; i <= pagesCount; i++){
        pages.push(i);
    }

/*let portionCount= Math.ceil(pagesCount/portionSize);
let [portionNumber,setPortionNumber]=useState(Math.floor(getCurrentPage/10)+1);
let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
let rightPortionNumber = portionNumber*portionSize;*/

    pages.length=10
    if(currentPage===1){
     pages[1]=currentPage+1
     pages[2]=currentPage+2
     pages[3]=currentPage+3
     pages[4]=currentPage+4
   }else if(currentPage>=3){
     pages[0]=currentPage-2
     pages[1]=currentPage-1
     pages[2]=currentPage
     pages[3]=currentPage+1
     pages[4]=currentPage+2
   }else if(currentPage===pages.length){
     pages[0]=currentPage-4
     pages[1]=currentPage-3
     pages[2]=currentPage-2
     pages[3]=currentPage-1
     pages[4]=currentPage
   }

 /* return(
        <div>
        <div className={cl.pages}>
          {portionNumber > 1 &&
          <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
        {pages
      .filter( p => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map( p => {
          return <span className={cl.page}><span className={currentPage === p && cl.selectedPage}
         key={p}  onClick={ (e) => {onPageChanged(p)}}>{p}</span></span>       
        })}
        {portionCount > portionNumber && 
        <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button> }
  </div>  
      </div>
    )*/

   return(
        <div>
        <div className={cn(cl.pages,cl.pagesCount)}>
        {pages.map( p => {
          return <span className={cl.page}><span className={currentPage === p && cl.selectedPage}
           onClick={ (e) => {onPageChanged(p)}}>{p}</span></span>       
        })}
  </div>  
      </div>
    )
}

export default Paginator;

