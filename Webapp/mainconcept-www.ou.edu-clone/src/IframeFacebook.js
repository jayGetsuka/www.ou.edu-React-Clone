import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '25%', typography: 'body1', mt:4, position: 'relative', left: -120 }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className="text-white" label="Twitter" value="1" />
            <Tab label="Facebook" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><iframe width="400" height="400" data-tweet-url="https://twitter.com/OU_HRL" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/OU_HRL%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20OU_HRL%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe></TabPanel>
        <TabPanel value="2"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuofoklahoma%2F&tabs=timeline&width=400&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="400" height="400"></iframe></TabPanel>
      </TabContext>
    </Box>
  );
}


