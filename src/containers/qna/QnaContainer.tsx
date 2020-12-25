import React, { useState } from 'react';
import styled from 'styled-components';
// mui
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// component
import Fnq from './Fnq';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
});

const WrapDiv = styled.div`
	position:relative;height:100vh;
`;
const CenterDiv = styled.div`
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;
`;

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
};

const QnaContainer = () => {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return (
        <WrapDiv>
            <CenterDiv>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Fnq />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </CenterDiv>
        </WrapDiv>
    );
};

export default QnaContainer;