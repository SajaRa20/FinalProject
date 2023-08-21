import React, { useState } from 'react';

import { Tabs, Typography, Tab, Avatar , Box } from '@mui/material';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FavoriteList from '../FavoriteList';
import Houses from '../Houses';
import UserInfo from '../UserInfo';

import './style.css'

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function SideBar() {
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sideBarroot">
      <div className="sideBarContainer">
        <div className="userAvatar">
          <Avatar className="avatar">H</Avatar>
          <Typography variant="h3">
           
          </Typography>
        </div>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="tabs"
        >
          <Tab
            label="Personal Inforamtion "
            icon={<PersonOutlineIcon />}
            className="tab"
            {...a11yProps(0)}
          />
          <Tab
            label="Houses"
            icon={<HouseSidingIcon />}
            className="tab"
            {...a11yProps(1)}
          />
          <Tab
            label="Favorites House"
            icon={<FavoriteBorderIcon />}
            className="tab"
            {...a11yProps(2)}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0} className="mainContent">
        {/* <UserInfo getUserName={setUsername} /> */}
        <UserInfo />
      </TabPanel>
      <TabPanel value={value} index={1} className="mainContent">
        <Houses />
      </TabPanel>
      <TabPanel value={value} index={2} className="mainContent">
        <FavoriteList />
      </TabPanel>
    </div>
  );
}

export default SideBar;
