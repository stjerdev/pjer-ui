import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import { memo } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 7px",
    fontSize: 11,
    fontWeight: 600,
    height: 20,
    minWidth: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}))

type TFuseNavBadge = {
  title: string
  bg: string
  fg: string
}

function FuseNavBadge(props: TFuseNavBadge) {
  const { title, bg, fg } = props
  const classes = useStyles(props)

  return (
    <div
      className={clsx(classes.root, "item-badge")}
      style={{
        backgroundColor: bg,
        color: fg,
      }}
    >
      {title}
    </div>
  )
}

FuseNavBadge.defaultProps = {}

export default memo(FuseNavBadge)
