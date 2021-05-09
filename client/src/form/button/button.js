import React from 'react'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

    },
}));

const theme = createMuiTheme({
    palette: {
        primary: lightGreen
    },
});
function ButtonCustom({ label, onClickFunction }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>

                <Button variant="contained" color="primary" className={classes.margin} onClick={() => onClickFunction()}>
                    {label}
                </Button>


            </ThemeProvider>
        </React.Fragment>
    )
}

export default withRouter(ButtonCustom);
