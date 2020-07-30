import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  //   

});
const useStyles1 = makeStyles((theme) => ({

  root: {
    height: '100%',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },

  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));


export default function RoleCards({ role }) {
  const classes = useStyles();
  const classes1 = useStyles1();

  const [checked, setChecked] = React.useState(true);
  const bull = <span className={classes.bullet}>•</span>;
  //   const role=role;

  const roledetails = role;
  const roleName = roledetails.Role;
  const roleInitial = roleName[0];
  var userAccess = role.access;
  var accessTrue = Object.values(userAccess)

  const setAcessTrueArray = accessTrue.filter((x) => {
    if (x == 1) {
      return true

    }
  });
  const accessPoints = setAcessTrueArray.length;


  // *****************
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes1.root}>

      <div className={classes1.container}>

        <Fade in={checked}>
          <Paper elevation={4} className={classes1.paper} style={{ color: 'green' }}>

            <Grid >
              <Card className={classes.root} variant="outlined" style={{ margin: '10px', width: "10%" }}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <div data-initials={roleInitial}></div>
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {roleName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {accessPoints} access points
        </Typography>

                </CardContent>

              </Card>

            </Grid>

          </Paper>
        </Fade>
      </div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Active"
        className='switchStyle'
      />
    </div>

  );
}
