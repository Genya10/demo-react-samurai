import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/Preloader/FormsControls/FormsControls";
import { required,maxLengthCreator } from "../../utils/validators/validator";

const maxLength40= maxLengthCreator(40);

/*
const LoginForm=(props)=>{
    return (    
       <form onSubmit={props.handleSubmit}>
  <div> <Field placeholder={"Login"} name={'login'} component={'input'}/></div> 
   <div><Field placeholder={"Password"} name={'password'} component={'input'}/></div>
   <div><Field component={'input'} name={'remember me'} type="checkbox" />remember me</div>
   <div><button>Login</button></div>
   </form>   
    )
    }*/

    const LoginForm=(props)=>{
        return (    
           <form onSubmit={props.handleSubmit}>
       <div><Field placeholder={"Login"} name={'login'} component={Input}
       validate={[required,maxLength40]}/></div> 
       <div><Field placeholder={"Password"} name={'password'} component={Input}
       validate={[required,maxLength40]}/></div>
       <div><Field type="checkbox" name={'remember me'}  component={Input}
       validate={[required]} />remember me</div>
       <div><button>Login</button></div>
       </form>   
        )
        }
    

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;