import React from "react";
import cl from "./FormsControls.module.css"
 import { Field } from "redux-form";

export const Textarea=({input,meta:{touched,error},...props})=>{
    const hasError=touched && error;  
return(
    <div >
        <div >
        <textarea {...input}{...props}
        className={cl.formControl + " "+ (hasError ? cl.error:"")} {...props.input}/>
        </div>
       {hasError && <span>{error}</span>}
    </div>
)
}

export const Input=({input,meta:{touched,error},...props})=>{
    const hasError=touched && error;  
return(
    <div >
        <div >
        <input {...input}{...props}
        className={cl.formControl + " "+ (hasError ? cl.error:"")} {...props.input}/>
        </div>
       {hasError && <span>{error}</span>}
    </div>
)
}

export const createField=(placeholder,name,validators,component,props={},text="")=>(
<div>
    <Field placeholder={placeholder} name={name}
    validate={validators}
    component={component}
    {...props} />{text}
</div>
)
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