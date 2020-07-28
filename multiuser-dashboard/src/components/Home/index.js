import React, { Component } from 'react'

import {
  Link as Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../../actions/loginAction'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {setRole,addRole} from '../../actions/roleAction'
import './styles.css'
import data from './data'
import ActiveUsers from './ActiveUsers'
import UsersAccessSummary from './UsersAccessSummary'
import shortid from 'shortid';
import MultiStep from 'react-multistep';
import Modal from 'react-modal';
import MasterForm from './MasterForm'

 class Home extends Component {
  // logout = () => {
  //   dispatch(setLogin('', '', ''));
  // }

componentDidMount(){
  console.log("mount",data)
  this.props.setRole(data);
}
componentDidUpdate(){
  console.log("mount",data)
 console.log("UPDATED",this.props)
}

// handleAddRole = (values, { setSubmitting }) => {
  handleAddRole = (values) => {
    const data=      
      {
        Role: "New1Admin",
        access:{
          "home": 1,
          "trips": 1,
          "pastTrips": 1,
          "createTrip": 1,
          "alerts": 1,
          "alertManagement":1,
          "sensors": 1,
          "addSensors": 1,
          "routes" : 1,
          "addRoutes": 1,
          "users": 1,
          "addUsers":1,
          "dashBoard": 1,
          "report": 1,
          "roleSettings":1,
          }
        }
      

const roleList=this.props && this.props.role[0] &&  this.props.role[0].roleList[0]
    const roleAdd = data;
    console.log(roleList)
   
    const key=shortid.generate()
    data.id=key;

    const finalAdd=[...roleList,roleAdd]
    // Trigger Add action
  this.props.addRole(finalAdd)  
    
    //  setSubmitting(false);
    // this.props.closeAddModal();
    
  };


  
  render() {
   
    const roles =  this.props && this.props.role[0] && this.props.role[0].roleList[0]
    console.log("data",roles);
    // const steps = [
    //   {name: 'StepOne', component: <div>1</div>},
    //   {name: 'StepTwo', component:<div>2</div>},     
    // ];
    // <Multistep showNavigation={true} steps={steps}/>


    return (
      



      <Grid className= "homePage" style={{display:'flex',height:'100%'}}>
      




      {/* <p style={{ textAlign: 'center' }}> Welcome to Home Page</p>
      <div style={{ display: 'flex' }}>
        {(getRole === undefined || getRole == '') && <Link to='/login' style={{ padding: '20px' }}>
          Login
                      </Link>}
                      <Link to='/login' style={{ padding: '20px' }} onClick={logout}>
          Logout
                      </Link>
       
      </div> */}
      <Grid item           
            lg={3}
            md={3} className='homeleft' >
        <h1>HOME</h1>
        <MasterForm/>
        </Grid>
        <Grid item           
            lg={8}
            md={8} className='homeCenter' >
          <Grid className="activeRoles" style={{height:'50%'}}>
          <button onClick={this.handleAddRole}>Add Role</button>
          <ActiveUsers data={data}/>
          
          
          </Grid>
          <Grid className="usersAccess" style={{height:'50%'}}>All users access
          <UsersAccessSummary data={data}/>
        
          </Grid>
        </Grid>
        <Grid item           
            lg={1}
            md={1}  style={{textAlign:'center'}}>
          
        </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  role: [state.role],
});
const mapDispatchToProps = (dispatch) => ({ 
      setRole: (data) =>
      dispatch(setRole(data)),
      addRole: (data) =>
      dispatch(addRole(data)),
      setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


