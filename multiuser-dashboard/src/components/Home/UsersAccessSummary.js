import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteRole } from '../../actions/roleAction';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#e8f0f8",
  }
}));

export default function UsersAccessSummary({ data }) {
  const getUsers = useSelector((state) => state && state.role);
  const dispatch = useDispatch();
  const users = getUsers && getUsers.roleList[0];

  // var userAccess = role.access;
  const handleDelete = (e) => {

    const postDelete = users.filter((user) => {

      return user.id != e.id
    })
    dispatch(deleteRole(postDelete));

  }
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  let iconName = []
  return (
    <>
      <p className='userText'>All user access</p>
      <List className={classes.root}>

        {data && data.map((value) => {
          let access = Object.entries(value && value.access)
          access.map((item) => {

            iconName.push(<div style={{ height: 'fit-content', display: 'block', marginBottom: '20px' }}>{item[0]}</div>)
          })
        })

        }
        <div style={{ marginTop: "43px" }}>
          <div>
            <div style={{ display: 'flex' }}>
              <HomeIcon />
              {iconName[0]}
            </div>
            <div style={{ display: 'flex' }}>
              <LocationOnIcon />
              {iconName[1]}
            </div>
            <div style={{ display: 'flex' }}>
              <LocationOnIcon />
              {iconName[2]}
            </div>
            <div style={{ display: 'flex' }}>
              <LocationOnIcon />
              {iconName[3]}
            </div>
            <div style={{ display: 'flex' }}>
              <NotificationsNoneIcon />
              {iconName[4]}
            </div>
            <div style={{ display: 'flex' }}>
              <NotificationsNoneIcon />
              {iconName[5]}
            </div>

            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[6]}
            </div>
            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[7]}
            </div>
            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[8]}
            </div>
            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[9]}
            </div>
            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[10]}
            </div>
            <div style={{ display: 'flex' }}>
              <DescriptionIcon />
              {iconName[11]}
            </div>
            <div style={{ display: 'flex' }}>
              <AssessmentIcon />
              {iconName[12]}
            </div>
            <div style={{ display: 'flex' }}>
              <AssessmentIcon />
              {iconName[13]}
            </div>
            <div style={{ display: 'flex' }}>
              <SettingsIcon />
              {iconName[14]}
            </div>
          </div>
        </div>
        {data && data.map(value => {

          let access = Object.entries(value && value.access)

          const labelId = `checkbox-list-label-${value.access}`;

          return (
            <ListItem
              key={value.id}
              role={undefined}
              dense
              button
              // onClick={handleToggle(value)}
              style={{ display: 'block' }}
            >

              <div onClick={handleDelete.bind(this, value)} style={{ cursor: 'pointer' }} >
                <DeleteIcon style={{ cursor: 'pointer', fontSize: '1rem' }} ></DeleteIcon><button style={{ border: 'none', backGround: "#cae3f8fd", color: '#8f29ca' }}>Delete Role </button></div>

              <ListItemText id={labelId} primary={`${value.Role}`} />

              {access.map(item => (

                <ListItemIcon style={{ display: 'block' }}>
                  <Checkbox
                    edge="start"
                    checked={item[1]}
                    //   checked={false}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    style={{ color: 'grey' }} />
                </ListItemIcon>

              ))}
            </ListItem>
          );
        })}
      </List>
    </>


  );
}
