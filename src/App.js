import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import Iframe from "react-iframe";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  gazeta: {
    width: "100vw",
    height: "90vh",
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Ведомости" {...a11yProps(0)} />
          <Tab label="Вести" {...a11yProps(1)} />
          <Tab label="фонтанка.ру" {...a11yProps(2)} />
          <Tab label="Мир Новостей" {...a11yProps(3)} />
          <Tab label="РБК" {...a11yProps(4)} />
          <Tab label="MK.RU" {...a11yProps(5)} />
          <Tab label="Коммерсант" {...a11yProps(6)} />
          <Tab label="The Journal" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.vedomosti.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.vesti.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.fontanka.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://mirnov.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.rbc.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.mk-pskov.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.kommersant.ru/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div className={classes.gazeta}>
          <Iframe
            url="https://www.thejournal.ie/"
            width="100%"
            height="100%"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </TabPanel>
    </div>
  );
}
