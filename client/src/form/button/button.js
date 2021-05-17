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
function ButtonCustom({ label, onClickFunction, type }) {
    const classes = useStyles();
    
    return (
        <div>
            <ThemeProvider theme={theme}>
               

                <Button type={type || "submit"} variant="contained" color="primary" className={classes.margin} onClick={!!onClickFunction?  onClickFunction : ()=>console.log("clicked") } >
                    {label}
                </Button>


            </ThemeProvider>
        </div>
    )
}

export default withRouter(ButtonCustom);
