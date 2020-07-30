import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./styles.css";
import {connect} from 'react-redux'
import {setLogin} from '../../actions/loginAction'
import {setRole} from '../../actions/roleAction'
import {
    Redirect,   
  } from 'react-router-dom';  
  import { withToastManager } from 'react-toast-notifications';
  import Grid from '@material-ui/core/Grid';
  import Container from '@material-ui/core/Container';

// Validations added 
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")    
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
    role:Yup.string()
    .required("Required"),
    role:Yup.string()
    .required("Required"),
});

class LoginForm extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            otherLoggedIn:false,
            adminLoggedIn:false,
            wrongPassword:false,
           }
    }
    

  handleSubmit = (values, { setSubmitting }) => {
    // If Admin logged in 
     if(values.password === 'Admin123'){
         
         this.setState({
          adminLoggedIn:true
        });
     this.props.setLogin(values.email,values.password,values.role);
    
     }
     if(values.password === "Password"){
      
      this.setState({
        otherLoggedIn:true
      });
     
      
   this.props.setLogin(values.email,values.password,values.role);
  
   }
  //  If wrong password entered
     else {
    this.setState({
       wrongPassword:true
   });}   

     setSubmitting(false);
  };

  componentDidUpdate(props,prevState) {
    this.toastManager = props.toastManager;

    // Show notifications based on the login status
    if(this.state.adminLoggedIn !== prevState.adminLoggedIn){
      
      if(this.state.adminLoggedIn){
      this.toastManager.add("Admin Login Success", {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  if(this.state.otherLoggedIn !== prevState.otherLoggedIn){
      
    if(this.state.otherLoggedIn){
    this.toastManager.add("Login Success", {
      appearance: 'success',
      autoDismiss: true,
    });
  }
}

if(this.state.wrongPassword !== prevState.wrongPassword){
      
  if(this.state.wrongPassword){
  this.toastManager.add("Wrong Password Entered", {
    appearance: 'warning',
    autoDismiss: true,
  });
}
}
    
  }

  render() {   
       const {otherLoggedIn,adminLoggedIn}= this.state;

      //  redirect 
       if (otherLoggedIn) {
        return <Redirect to='/home' />;
      }
      //  redirect   
      if (adminLoggedIn) {
        return <Redirect to='/home' />;
      } 
    return (
      <>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}   
             
            >
            <Container
              component='main'
              maxWidth='xs'
              className='externalContainer'>
                <h1 className="loginHeader">Log In </h1>
        {/* Login form  */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email: <Field type="email" name="email" className='text-format'/>
                <ErrorMessage name="email" component="div" className='errorStyle'/>
              </label>
              <label>
                Password:
                <Field type="password" name="password" className='text-format' />
                <ErrorMessage name="password" component="div" className='errorStyle'/>
              </label>
              <label>
                Role:
                <Field type="text" name="role" className='text-format' />
                <ErrorMessage name="role" component="div" className='errorStyle'/>
              </label>
              <button type="submit" disabled={isSubmitting}
              className="customButton"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/* </div> */}
            </Container>
          </Grid>          
       
        <Grid>          
        </Grid>
     
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    credentials: [state],
});
const mapDispatchToProps = (dispatch) => ({
    setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
        setRole: (data) =>
        dispatch(setRole(data)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withToastManager(LoginForm));

