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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function UsersAccessSummary({data}) {
    console.log("acccs",data)
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

  return (
    <List className={classes.root}>
      {data && data.map(value => {
        const labelId = `checkbox-list-label-${value.access}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            // onClick={handleToggle(value)}
          >
            <ListItemText id={labelId} primary={`Line item ${value.access}`} />
            {[0, 1, 2, 3].map(item => (
              <ListItemIcon>
                <Checkbox
                  edge="start"
                //   checked={checked.indexOf(value) !== -1}
                checked={false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
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
  );
}
