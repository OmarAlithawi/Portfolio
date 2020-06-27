import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '350px'
      },
      display: 'block',
    },
    submitBtn: {
      margin: theme.spacing(1),
    },
    contactTitle: {
      margin: theme.spacing(1),
    }
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#fff',
        main: '#66A6FF',
        dark: '#fff',
        contrastText: '#fff',
      },
      secondary: {
        light: '#fff',
        main: '#66A6FF',
        dark: '#fff',
        contrastText: '#fff',
      },
    },
  });
  
  export default useStyles;