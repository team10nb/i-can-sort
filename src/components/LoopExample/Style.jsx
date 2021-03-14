import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>({
    root: {
        '& > * + *': {     
            marginTop: theme.spacing(3),
        },
        width: 380,    
    },
    bars: {
        listStyle: "none",
        padding: 0,
        marginBottom: -10,
        position: "relative",
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
    },
    bar: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        boxShadow: "0px 0px 2px 2px #88888833",
        borderRadius: "10px",
        marginTop: 32,
        marginBottom: "5px",
        marginRight: "15px",
        marginLeft: "15px",
        width: "30px",
        height: "140px",
        fontSize: "0.1em",
        justifyContent: "center",
    },
    barNumber: {
        fontSize: "16px",
        marginTop: "-23px",
        textAlign: "center",
        fontWeight: "600",
    },
    cardOne:{
        width: 380, 
        height: 240,
        display: 'grid',
        alignContent: 'flex-end',
        justifyContent: 'center',
    },
    cardTwo:{
        width: 380, 
        height: 260,
        background: "#F0F0F0",        
    },
    slider:{
        marginLeft: 82,
        marginBottom: -10,
    },
    box:{
        marginBottom: -20,
    },
    control:{
        marginBottom: 5,
    },
    title:{
        display:"flex",
        fontFamily: "inherit",
        fontWeight: "700",
        fontSize:"16px",
        justifyContent: "center",
    },
}));



export {useStyles};