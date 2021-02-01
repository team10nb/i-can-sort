import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import { CardContent } from '@material-ui/core';

const iconStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    justifyContent: 'center',
    '& > svg': {
        margin: theme.spacing(1),
        
    },
  },
}));

const divStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',    
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));

const cardOneStyles = makeStyles({
    root: {
      background: "#DDDDDD",
      width: "30%",
      height: 600
    },
  });

const cardTwoStyles = makeStyles({
    root: {
        background: "#DDDDDD",
        width: "70%",
        height: 600
    },
});

getTextInfo=(file)=>{
  const reader=new FileReader();
  reader.readAsText(file);
  reader.onload=(result)=>{
      let targetNum=result.target.result;
      targetNum=targetNum.replace(/[\n\r]/g,'');//对获取的内容进行修改
      targetNum=targetNum.replace(/[ ]/g,'');//对获取内容进行修改
      this.props.dispatch({
          type:'model/save',
          payload:targetNum,
      })
  
  }
  return false;
}

  export default function SubScenes(props) {
    const iconClasses = iconStyles();
    const divClasses = divStyles();
    const cardOneClasses = cardOneStyles();
    const cardTwoClasses = cardTwoStyles();
    
    
    getTextInfo = (props.text) => {
      const reader=new FileReader();
      reader.readAsText(file);
      reader.onload=(result)=>{
          let targetNum=result.target.result;
          targetNum=targetNum.replace(/[\n\r]/g,'');//对获取的内容进行修改
          targetNum=targetNum.replace(/[ ]/g,'');//对获取内容进行修改
          this.props.dispatch({
              type:'model/save',
              payload:targetNum,
          })
      
      }
      return false;
    }

  
        return(
            
            <div>
                <div class ={iconClasses.root}>
                  <AppBar position="static" color= {props.color}>
                    <Tabs >
                      <Tab icon = {<HomeIcon />} />
                      <Tab label="Introduction"  />
                      <Tab label="Operation" />
                      <Tab label="Implementation"  />
                    </Tabs>
                  </AppBar>
                  {/* <TabPanel value={value} index={0}>
                  Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  Item Three
                  </TabPanel> */}
                                        
                
                </div>

                <div className = {divClasses.root}>
                <Card className={cardOneClasses.root}>
                  <CardContent action="" accept="text/plain" beforeUpload={this.getTextInfo} showUploadList={false}>
                  {/* <Upload action="" accept="text/plain" beforeUpload={this.getTextInfo} showUploadList={false}>
        <Button icon='upload'>导入</Button>
    </Upload> */}
                  </CardContent>
                </Card>
                <Card className={cardTwoClasses.root}></Card>
                </div>
                
          
               
            </div>
        );
        
    
}

