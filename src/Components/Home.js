import React from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CourseCard } from './CourseCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
    <div className="banner">
      <div className="header">
      <Paper square className={classes.root}>
  <Tabs
    value={value}
    onChange={handleChange}
    variant="fullWidth"
    indicatorColor="primary"
    textColor="primary"
    aria-label="icon tabs example"
  >
    <Tab aria-label="phone" label="Home"/>
    <Tab aria-label="favorite" label="All Courses"/>
    <Tab aria-label="person" label="About Us"/>
    <Tab aria-label="person" label="Contact Us"/>
  </Tabs>
</Paper>
      </div>
      <div className="bannerText">
        <h1>Looking For Something?</h1>
        <h3>using react js</h3>      
      </div>
    </div>  
    <CourseCard/>
    </React.Fragment>
  )
}

export default Home
