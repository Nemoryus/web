import React from 'react';
import {makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function Slider(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <h1>{title}</h1>
        </Card>
    );
}