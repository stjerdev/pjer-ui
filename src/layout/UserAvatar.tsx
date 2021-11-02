import {
  Avatar,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core"
import Link from "next/link"
import React from "react"


const useStyles = makeStyles((theme) => ({
  user: {
    paddingBottom: 1,
    color: "#ffffff",
    textDecoration: "none",
    flexDirection: "column",
    listStyle: "none",
    "&:hover,&:focus": {
      backgroundColor: "#404854",
    },
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(1),
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  organismo: {
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
}))

type UserAvatarProps = {
  user: any
  loadingContext: any
  agenteCtx: any
}
const UserAvatar = (props: UserAvatarProps) => {
  const {user , agenteCtx, loadingContext} = props
  const classes = useStyles()
  // Recupero el usuario desde el contexto
  const agente = agenteCtx?.agente

  return (
    <>
      <Link key="perfil" href="/usuarios/profile">
        <ListItem key="perfil" className={classes.user} button>
          {loadingContext ? (
            <>Cargando..</>
          ) : !agente?.fotoAgente ? (
            <Avatar
              src={"/static/images/avatar/avatar1.png"}
              title={user.name}
              alt={user.name}
              className={classes.large}
            />
          ) : (
            <Avatar
              src={agente.fotoAgente.base64}
              title={user.name}
              alt={user.name}
              className={classes.large}
            />
          )}
          <ListItemText>
            <Grid container alignItems="center" direction="column">
              <Grid item>{open && `${user.name}`}</Grid>
              <Grid item xs style={{ display: "flex" }}>
                {!agente ? (
                  <></>
                ) : loadingContext ? (
                  <>Cargando..</>
                ) : (
                  <Typography variant="caption" className={classes.organismo}>
                    {open &&
                      `${agente?.organismoActual?.nombre_largo} (${agente.organismoActual?.gral_localidad?.descripcion})`}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </ListItemText>
        </ListItem>
      </Link>
    </>
  )
}

export default UserAvatar
