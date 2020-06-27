import React from 'react'

import { makeStyles , useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from "./style";



export default function ContactForm() {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
        <ThemeProvider theme={theme}>
        
        <div className="contactus-text-container">
          <div className={classes.contactTitle}>
          <h1>Contact Me</h1>
          </div>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Full Name"
                multiline
                rowsMax={4}
                variant="outlined"
              /> <br/>
              <TextField
                id="outlined-multiline-flexible"
                label="E-mail Address"
                multiline
                rowsMax={4}
                variant="outlined"
              /> <br/>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                label="Your Message"
                variant="outlined"
              /><br/>
              <Button variant="contained" className={classes.submitBtn} color="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
        </ThemeProvider>
      </div>
    );
    
}
