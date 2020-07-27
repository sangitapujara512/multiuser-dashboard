import React, { Component } from 'react'

import {
  Link as Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin,addRole } from '../../actions/loginAction'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {addRole} from '../../actions/roleAction'
import './styles.css'

 class Home extends Component {
  // logout = () => {
  //   dispatch(setLogin('', '', ''));
  // }
  handleAddRole=()=>{
    
    const data=[      
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
              
    ]


    this.props.addRole(data)


    
  }


  
  render() {
    console.log("date",this.props);
    return (
      <Grid style={{display:'flex'}}>

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
            lg={4}
            md={4} className='homeleft' >
        <h1>HOME</h1>
        </Grid>
        <Grid item           
            lg={8}
            md={8} className='homeCenter' >
          <Grid classname="activeRoles" style={{height:'50%'}}>Active user roles</Grid>
          <Grid className="usersAccess" style={{height:'50%'}}>All users accessgkfdg
         <button onClick={this.handleAddRole}>Add Role</button>
          </Grid>
        </Grid>
        <Grid item           
            lg={2}
            md={2}  style={{textAlign:'center'}}>
          
        </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  role: [state],
});
const mapDispatchToProps = (dispatch) => ({ 
      setRole: (data) =>
      dispatch(setRole(data)),
      setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


