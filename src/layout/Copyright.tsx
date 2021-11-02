import { Typography } from "@material-ui/core"
import { memo } from "react"

type Props = {
  titulo?: string
}

function Copyright(props: Props) {
  const { titulo } = props
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Desarrollo "}
      {titulo} {new Date().getFullYear()} - Versión:{" "}
      {process.env.NEXT_PUBLIC_APP_VERSION}
      {"."}
    </Typography>
  )
}

export default memo(Copyright)
