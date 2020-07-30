import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid';
import { setRole, addRole } from '../../actions/roleAction'
import TextField from "@material-ui/core/TextField";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      username: '',
      password: '',
      roleName: '',
      roleStatus: 'active',
      // 
      home: 0,
      trips: 0,
      pastTrips: 0,
      createTrip: 0,
      alerts: 0,
      alertManagement: 0,
      sensors: 0,
      addSensors: 0,
      routes: 0,
      addRoutes: 0,
      users: 0,
      addUsers: 0,
      dashboard: 0,
      report: 0,
      roleSettings: 0,

    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    if (event.name == 'trips') {
      this.setState({
        trips: 1
      });
    }
  }

  // Multiple handle change for access
  handleAddChange = (e) => {

    if (e == 'home') {
      this.setState({
        home: 1,
      });
    }
    if (e == 'trips') {
      this.setState({
        trips: 1,
      });
    }
    if (e == 'pastTrips') {
      this.setState({
        pastTrips: 1,
      });
    }
    if (e == 'createTrip') {
      this.setState({
        createTrip: 1,
      });
    }
    if (e == 'alerts') {
      this.setState({
        alerts: 1,
      });
    }
    if (e == 'alertManagement') {
      this.setState({
        alertManagement: 1,
      });
    }
    if (e == 'sensors') {
      this.setState({
        sensors: 1,
      });
    }
    if (e == 'addSensors') {
      this.setState({
        addSensors: 1,
      });
    }
    if (e == 'routes') {
      this.setState({
        routes: 1,
      });
    }
    if (e == 'addRoutes') {
      this.setState({
        addRoutes: 1,
      });
    }
    if (e == 'users') {
      this.setState({
        users: 1,
      });
    }
    if (e == 'addUsers') {
      this.setState({
        addUsers: 1,
      });
    }
    if (e == 'dashboard') {
      this.setState({
        dashboard: 1,
      });
    }
    if (e == 'report') {
      this.setState({
        report: 1,
      });
    }
    if (e == 'roleSettings') {
      this.setState({
        roleSettings: 1,
      });
    }
  }

  handleSubmit = (values) => {
    values.preventDefault()
    const data =
    {
      Role: this.state.roleName,
      access: {
        "home": this.state.home,
        "trips": this.state.trips,
        "pastTrips": this.state.pastTrips,
        "createTrip": this.state.createTrip,
        "alerts": this.state.alerts,
        "alertManagement": this.state.alertManagement,
        "sensors": this.state.sensors,
        "addSensors": this.state.addSensors,
        "routes": this.state.routes,
        "addRoutes": this.state.addRoutes,
        "users": this.state.users,
        "addUsers": this.state.addUsers,
        "dashBoard": this.state.dashboard,
        "report": this.state.report,
        "roleSettings": this.state.roleSettings,
      }
    }


    const roleList = this.props && this.props.role[0] && this.props.role[0].roleList[0]
    const roleAdd = data;


    const key = shortid.generate()
    data.id = key;

    const finalAdd = [...roleList, roleAdd]
    // Trigger Add action
    this.props.addRole(finalAdd)
    this.props.closeAddModal();
  };

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1 ? 2 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary customButton"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <button
          className="btn btn-primary float-right customButton"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>

        <h1>Step {this.state.currentStep} </h1>

        <form onSubmit={this.handleSubmit} className="addForm externalContainer">
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            roleName={this.state.roleName}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleAddChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}

        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="roleName">Role Name</label>
      <TextField
        required
        id="outlined-required"
        label="Required"
        variant="outlined"
        className="form-control"
        id="roleName"
        name="roleName"
        type="text"
        placeholder="Role Name"
        value={props.roleName}
        onChange={props.handleChange}
      />
      <br /><br />

    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <React.Fragment>

      {/* <div style={{margin: "1px solid green"}} className="externalContainer"> */}
      <div style={{ padding: "20px", fontWeight: 'bold', fontSize: "18px", color: 'grey' }}>2.ACCESS POINTS</div>
      <div style={{ display: 'flex', color: 'grey', padding: "10px", backgroundColor: '#e8f0f8' }}>
        <div>Description</div>
        <div style={{ marginLeft: "15%" }}>Access</div>
      </div>

      <div style={{ display: 'flex' }}><label for="home" className='addUserForm'><HomeIcon /> Home</label>
        <input type="checkbox" id="home" name="home" value={props.home} onClick={props.handleChange.bind(this, "home")} /></div><br />

      <div style={{ display: 'flex' }}>
        <label for="trips" className='addUserForm'><LocationOnIcon />Trips</label>
        <input type="checkbox" id="trips" name="trips" value={props.trips} onClick={props.handleChange.bind(this, "trips")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="pastTrips" className='addUserForm'> <LocationOnIcon /> Past Trips</label>
        <input type="checkbox" id="pastTrips" name="pastTrips" value={props.pastTrips} onClick={props.handleChange.bind(this, "pastTrips")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="createTrip" className='addUserForm'> <LocationOnIcon /> Create a Trip</label>
        <input type="checkbox" id="createTrip" name="createTrip" value={props.createTrip} onClick={props.handleChange.bind(this, "createTrip")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="alerts" className='addUserForm'><NotificationsNoneIcon /> Alerts</label>
        <input type="checkbox" id="alerts" name="alerts" value={props.alerts} onClick={props.handleChange.bind(this, "alerts")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="alertManagement" className='addUserForm'> <NotificationsNoneIcon />Alert Management</label>
        <input type="checkbox" id="alertManagement" name="alertManagement" value={props.alertManagement} onClick={props.handleChange.bind(this, "alertManagement")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="sensors" className='addUserForm'><DescriptionIcon /> Sensors</label>
        <input type="checkbox" id="sensors" name="sensors" value={props.sensors} onClick={props.handleChange.bind(this, "sensors")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="addSensors" className='addUserForm'> <DescriptionIcon /> Add Sensors</label>
        <input type="checkbox" id="addSensors" name="addSensors" value={props.addSensors} onClick={props.handleChange.bind(this, "addSensors")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="routes" className='addUserForm'><DescriptionIcon /> Routes</label>
        <input type="checkbox" id="routes" name="routes" value={props.routes} onClick={props.handleChange.bind(this, "routes")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="addRoutes" className='addUserForm'> <DescriptionIcon /> Add Routes</label>
        <input type="checkbox" id="addRoutes" name="addRoutes" value={props.addRoutes} onClick={props.handleChange.bind(this, "addRoutes")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="users" className='addUserForm'> <DescriptionIcon /> Users</label>
        <input type="checkbox" id="users" name="users" value={props.users} onClick={props.handleChange.bind(this, "users")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="addUsers" className='addUserForm'> <DescriptionIcon /> Add Users</label>
        <input type="checkbox" id="addUsers" name="addUsers" value={props.addUsers} onClick={props.handleChange.bind(this, "addUsers")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="dashboard" className='addUserForm'><AssessmentIcon /> Dashboard</label>
        <input type="checkbox" id="dashboard" name="dashboard" value={props.dashboard} onClick={props.handleChange.bind(this, "dashboard")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="report" className='addUserForm'> <AssessmentIcon /> Report</label>
        <input type="checkbox" id="report" name="report" value={props.report} onClick={props.handleChange.bind(this, "report")} />
      </div><br />

      <div style={{ display: 'flex' }}>
        <label for="roleSettings" className='addUserForm'> <SettingsIcon /> Role Settings</label>
        <input type="checkbox" id="roleSettings" name="roleSettings" value={props.roleSettings} onClick={props.handleChange.bind(this, "roleSettings")} /><br /><br />
      </div><br />
      <button className="btn btn-success btn-block customButton">Create</button>
      {/* </div> */}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  role: [state.role],
});
const mapDispatchToProps = (dispatch) => ({
  setRole: (data) =>
    dispatch(setRole(data)),
  addRole: (data) =>
    dispatch(addRole(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterForm);
