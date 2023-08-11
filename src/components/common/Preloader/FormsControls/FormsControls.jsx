import React from "react";
import cl from "./FormsControls.module.css"

export const Textarea=({input,meta,...props})=>{

    const hasError=meta.touched && meta.error;
    
return(
    <div >
        <div >
        <textarea {...input}{...props}
        className={cl.formControl + " "+ (hasError ? cl.error:"")} {...props.input}/>
        </div>
       {hasError && <span>{meta.error}</span>}
    </div>
)
}