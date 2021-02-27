import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import backgroundImage from '../../Resource/run.png';
// const color = '#FEE5D4'

export default function AlgorithmButton(props) {
  const {title, code, paddingLeft, paddingRight, onClick, } = props;
  const styles = {
    div:{
      textAlign: 'left',
      paddingLeft:paddingLeft,
      paddingRight:paddingRight,
    },
  };

//   const [onHover,setOnHover] = useState(true);

//   function handleHover(){
//       let image;
//         if(onHover){
//             image = backgroundImage;
//         }else{
//             image =  null;
//         }
//         // setOnHover(false);
//         return image;
//     }

//   const image = handleHover();

  const useStyles = makeStyles((theme) => ({
    buttonBase: {
        width: 270,
        height: 250,
        borderRadius: 15,
        justifyContent: 'left',
        textAlign: 'left',
        '&:hover':{
            backgroundImage: `url(${backgroundImage})`,
        },
    }
  }));
  const classes = useStyles();

  return (
      <div style={styles.div}> 
          <ButtonBase className={classes.buttonBase} onClick={onClick}>
            <Typography variant="body2" align='left'>
                {title}
                {code}
            </Typography> 
          </ButtonBase>
      </div>
  );
}
