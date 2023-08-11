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

export const Input=({input,meta,...props})=>{
    const hasError=meta.touched && meta.error;  
return(
    <div >
        <div >
        <input {...input}{...props}
        className={cl.formControl + " "+ (hasError ? cl.error:"")} {...props.input}/>
        </div>
       {hasError && <span>{meta.error}</span>}
    </div>
)
}

/*
const FormControl =(input,meta,children,...props)=>{
    const hasError=meta.touched && meta.error;  
    return(
        <div >
            <div className={cl.formControl + " "+ (hasError ? cl.error:"")}>
           {props.children}
            </div>
           {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea=(props)=>{
    const {input,meta,child,...restProps}=props;
return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}
export const Input=(props)=>{
    const {input,meta,child,...restProps}=props;
return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}*/