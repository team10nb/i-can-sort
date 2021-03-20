/*
    Author: Yijie Lu, Shiliang Chen
*/
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExplanationFrame from '../ExplanationFrame/ExplanationFrame';


  const content0 = <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: "20px", marginRight: "20px" }}>
  This a entry for each sorting algorithm.
  Choose one and click it to enter next Page.
  A progress bar is at the bottom, it shows how much you have learnt.      
</Typography>
  const content1 = <Typography variant="body2" color="textSecondary" component="p">
  The left one is a setting button, click it to modify settings. <br></br>
  The right one is a help button, click it to see how to use the software.          
</Typography> 
  const content2 = <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft: "8px" }}>
  This a section menu. Choose one of the sections Tutorial, Procedure and Correctness to begin your journey.
</Typography>                


 
  export  default function CHelp(props) {
    const{logo0, logo1, logo2, color} = props;

    const data = {
      color:color,
      logo0:logo0,
      logo1:logo1,
      logoFinal:logo2,
      stepNumber:3,
      content0:content0,
      content1:content1,
      contentFinal:content2,
      picHeight:'403',
      contentMarginBottom:"-70px",
      contentMarginTop:"60px",
    }

    return(
      <div>
        <ExplanationFrame {...data} />
      </div>
    )
  }

