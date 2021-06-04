import React from 'react';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green, orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        
    },
}));

const ValidationTextField = withStyles({
    root: {
        fieldset: {
            borderColor: '#FF9800',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: '#FF9800',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);



export default function CustomizedInputs({validator,label,getText,type,width,height}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <ValidationTextField
            style={{width:width || "300px", height:height || '50px'}}
                className={classes.margin}
                label={label}
                required
                variant="outlined" 
                id="validation-outlined-input"
                type= {type || 'text'}
                onChange={(e) => { getText(e.target.value) }}
            />
        </div>
    );
}