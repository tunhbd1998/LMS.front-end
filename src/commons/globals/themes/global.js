import { createMuiTheme } from '@material-ui/core/styles';
import color from '@supporters/utils/color';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    text: { primary: color.text, secondary: color.text },
    primary: { main: color.main }
  }
});
