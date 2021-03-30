/*
    Author: Ruizi Han, Yijie Lu
*/

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TerminableCode } from './TerminableCode';
import InterminableCode from './InterminableCode';
import TipFrame from '../../../../../components/TipFrame/TipFrame';
import { color } from '../../../../mainPages/Correctness';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Termination() {
    const classes = useStyles();

    const message = <p>Termination is an important concept in <font style={{ fontWeight: 'bold' }}>algorithm correctness</font>. Here are two examples, which may help you understand <font style={{ fontWeight: 'bold' }}>what is termination.</font></p>

    const size = {
        left: 240,
        top: 45,
        bottom: 45,
    };

    return (
        <div>
            <TipFrame
                message={message}
                size={size}
                btnColor={color}
            />
            <div className={classes.root}>
                <TerminableCode />
                <InterminableCode />
            </div>
        </div>
    );
}
