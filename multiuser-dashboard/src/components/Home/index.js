import React, { Component } from 'react'
import {
  Link as Link,
} from 'react-router-dom';
import { setLogin } from '../../actions/loginAction'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { setRole, addRole } from '../../actions/roleAction'
import './styles.css'
import data from './data'
import ActiveUsers from './ActiveUsers'
import UsersAccessSummary from './UsersAccessSummary'
import Modal from 'react-modal';
import MasterForm from './MasterForm'
import AddIcon from '@material-ui/icons/AddOutlined';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      showAddModal: false,
      roles: data,
    }
  }
  logout = () => {
    this.props.setLogin("", "", "")
  }

  componentDidMount() {
    this.props.setRole(data);
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps && prevProps.role[0] && prevProps.role[0].roleList[0] && prevProps.role[0].roleList[0];
    const latest = this.props && this.props.role[0] && this.props.role[0].roleList[0] && this.props.role[0].roleList[0];


    if (prev && prev.length < latest && latest.length) {

      this.setState({
        roles: latest,

      });
      this.props.setRole(latest);

    }

  }

  handleAddButton = () => {
    this.setState({
      showAddModal: true
    })
  }

  closeAddModal = () => {
    this.setState({
      showAddModal: false
    })

  }

  render() {
    const data = this.props && this.props.role[0] && this.props.role[0].roleList[0]

    return (
      <Grid className="homePage" style={{ display: 'flex', height: '100%' }}>
        <Grid item
          lg={3}
          md={3} className='homeleft addBorderRadius' >
          <Link to='/' style={{ padding: '20px', fontSize: '20px' }} onClick={this.logout}>
            Logout
                    </Link>
          <h1>HOME</h1>

          <Modal
            isOpen={this.state.showAddModal}

            onRequestClose={this.closeAddModal}

            contentLabel="Example Modal"
          >
            <MasterForm closeAddModal={this.closeAddModal} />
          </Modal>


        </Grid>
        <Grid item
          lg={8}
          md={8} className='homeCenter addBorderRadius' >
          <Grid className="activeRoles" >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div ></div>
              <div style={{ border: "1px solid #1b138a", width: '100px', borderRadius: '4px', margin: '10px', color: '#8f29ca' }} onClick={this.handleAddButton}>
                <AddIcon style={{ cursor: 'pointer', fontSize: '1rem' }} ></AddIcon><button style={{ border: 'none', backGround: "#cae3f8fd", color: '#8f29ca' }}>Add Role </button>
              </div>
            </div>

            <ActiveUsers data={data} />

          </Grid>
          <Grid className="usersAccess">
            <UsersAccessSummary data={data} />
          </Grid>
        </Grid>

        <Grid item
          lg={1}
          md={1} style={{ textAlign: 'center' }} className='addBorderRadius' >
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
  setLogin: (email, password, role) =>
    dispatch(setLogin(email, password, role)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


