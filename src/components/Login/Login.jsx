import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/Preloader/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { login } from "../../state/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import cl from "./Login.module.css";
import { createField } from "../common/Preloader/FormsControls/FormsControls";

const maxLength40 = maxLengthCreator(40);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength40]}/>        
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required, maxLength40]}/>       
      </div>
      <div>
        <Field
          type="checkbox"
          name={"rememberMe"}
          component={Input}
          validate={[required]} />remember me               
      </div>

      {props.captchaUrl && <img src={props.captchaUrl}/>}
      {props.captchaUrl && createField('Symbol from image','captcha',[required],Input,{})}
 
      {props.error && <div className={cl.formError}>{props.error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl:state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
