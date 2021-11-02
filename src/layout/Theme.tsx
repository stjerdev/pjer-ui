import { createTheme } from '@material-ui/core/styles'
import { red } from "@material-ui/core/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
