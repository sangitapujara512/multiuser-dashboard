import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import RoleCards from './RoleCards'
import './styles.css'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ActiveUsers({ data }) {
  const classes = useStyles();

  // set variables as per data
  let numberRoles = data && data.length;

  return (
    <div className={classes.root}>
      <Accordion style={{ backgroundColor: '#e8f0f8' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className='activeText'>Active Users Role</div>

        </AccordionSummary>
        <div className='roleNumber'> Total of <strong>{numberRoles} </strong>roles</div>
        <div>
          <input type="text" placeholder="Serch not functional" className='searchStyle' />
        </div>
        <AccordionDetails>
          <Grid style={{ marginBottom: 20, width: '100%' }}>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className='rolesLayout'>
              {data && data.map((role) => <RoleCards role={role} key={role.id} />)}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
