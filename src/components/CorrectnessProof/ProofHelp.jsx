/*
    Author:Shiliang Chen,  Yijie Lu
*/
import React from 'react';
import Typography from '@material-ui/core/Typography';
import logo0 from '../../Resource/correctnessProve.png';
import {color} from '../../scenes/mainPages/Correctness';
import ExplanationFrame from '../ExplanationFrame/ExplanationFrame';


  const content0 =  <Typography variant="body2" color="textSecondary" component="p">
  As picture shown, when the sorting is at a specific state, the pseudo and assertion will be highlighted, which are labeled as "compiling pseudo" and "compiling assertion" in the picture. As normal, they would look like "pesudo" and "assertion" in the picture.
</Typography>  
 
  export  default function Explanation() {
    const data = {
        color:color,   
        logoFinal:logo0,
        stepNumber:1,       
        contentFinal:content0,
        picHeight:'415',
        contentMarginBottom:'0',
        contentMarginTop:'0',
    }
  
    return(
      <div>
        <ExplanationFrame {...data} />
      </div>
    )
  }

