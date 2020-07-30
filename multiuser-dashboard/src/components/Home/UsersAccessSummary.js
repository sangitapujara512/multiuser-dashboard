import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#e8f0f8",
    
    // maxWidth: 360,
    // backgroundColor: "cae3f8fd",
    // height: "100%",
    // padding:'20px',
    // margin:"20px"
   

  }
}));

export default function UsersAccessSummary({data}) {
    // console.log("acccs",data)
    let mydata=data;
//   var myArr = Object.keys(data && data)

    console.log("acccs",mydata)
    // var userAccess = role.access;
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
let iconName=[]
  return (
   <>
    <p className='userText'>All user access</p> 
    <List className={classes.root}>
     

   {data && data.map((value)=>{
       let access=Object.entries(value && value.access)
       access.map((item)=>{
           console.log("item[0]",item[0])
        iconName.push(<div style={{height:'fit-content',display:'block',marginBottom:'20px'}}>{item[0]}</div>)
       })
   })        

     }
     <div style={{marginTop:"43px"}}>
     <div>
         <div style={{display:'flex'}}>
     <HomeIcon />
      {iconName[0]}
      </div>
      <div style={{display:'flex'}}>
     <LocationOnIcon />
     {iconName[1]}
      </div>
      <div style={{display:'flex'}}>
     <LocationOnIcon />
     {iconName[2]}
      </div>
      <div style={{display:'flex'}}>
     <LocationOnIcon />
     {iconName[3]}
      </div>
      <div style={{display:'flex'}}>
     <NotificationsNoneIcon />
     {iconName[4]}
      </div>
      <div style={{display:'flex'}}>
     <NotificationsNoneIcon />
     {iconName[5]}
      </div>
      
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[6]}
      </div>
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[7]}
      </div>
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[8]}
      </div>
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[9]}
      </div>
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[10]}
      </div>
      <div style={{display:'flex'}}>
     <DescriptionIcon />
     {iconName[11]}
      </div>        
    <div style={{display:'flex'}}>
     <AssessmentIcon />
     {iconName[12]}
      </div>
      <div style={{display:'flex'}}>
     <AssessmentIcon />
     {iconName[13]}
      </div>
      <div style={{display:'flex'}}>
     <SettingsIcon />
     {iconName[14]}
      </div>
     </div>
     </div>
      {data && data.map(value => {
         
          let access=Object.entries(value && value.access)
          console.log("value",access[0][1])
        const labelId = `checkbox-list-label-${value.access}`;

        return (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            // onClick={handleToggle(value)}
            style={{display:'block'}}
          >
            <ListItemText id={labelId} primary={`${value.Role}`} />
            {access.map(item => (
               
              <ListItemIcon  style={{display:'block'}}>
              {/* {item} */}
              {/* {item[0]} */}
                  {/* {item.key} */}
                <Checkbox
                  edge="start"
                   checked={item[1]}
                //   checked={false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                 style={{color:'grey'}}/>
              </ListItemIcon>
            ))}

            {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
          </ListItem>
        );
      })}
    </List>
    </>
    
    
  );
}
