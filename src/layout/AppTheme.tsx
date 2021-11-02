import React from "react"
import PropTypes from "prop-types"
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles"

const defaultTheme = createTheme()

export default function AppTheme(props: any) {
  const { children } = props

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
}
