import {
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
  Theme,
  Tooltip,
} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Router from 'next/router'
import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import IconButton from '@material-ui/core/IconButton'
import { IRuta } from '../store/reducers/rutasReducer'
import { setearRutaAction } from '../store/actions/rutasActions'
import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fondo: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      display: 'flex',
      marginRight: theme.spacing(1),
      alignItems: 'center',
    },
  }),
)

interface HeaderProps {
  visible?: boolean
  selectorOrganismos?: React.ReactNode;
  avisosPanel?: React.ReactNode;
}

function Header(props: HeaderProps) {
  const { visible,selectorOrganismos, avisosPanel } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { keycloak } = useKeycloak<KeycloakInstance>()
  const dispatch = useDispatch()
  const setNuevaRuta = (ruta: IRuta) => dispatch(setearRutaAction(ruta))

  // NOTE GetRuta from Store
  // Si la ruta es igual a Inicio no muestro Boton de volver atras.

  const getRuta = useSelector<any, IRuta>((state) => {
    return state.storeRuta
  })

  const handleCloseSession = async () => {
    localStorage.removeItem('token')
    // FIXME  no borra el state
    localStorage.removeItem('state')
    // Limpio completo el store
    localStorage.clear()
    sessionStorage.clear()
    setAnchorEl(null)
    setNuevaRuta(null)
    // Envio a Home antes de cerrar logout
    await Router.push({ pathname: '/', query: {} })
    keycloak.logout()
  }

  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid
          item
          style={{ width: '100%', display: 'flex', flexDirection: 'row' }}
        >
          {getRuta[0]?.ruta === 'Inicio' ? (
            <></>
          ) : (
            <Tooltip title="Volver atras">
              <IconButton
                color={'inherit'}
                aria-label="volver atras"
                component="span"
                onClick={() => Router.back()}
              >
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
          )}
          <Grid style={{ flexGrow: 1 }}>
           {selectorOrganismos}
          </Grid>

          <Grid item md={2} className={classes.fondo}>
            <Grid item>
            {avisosPanel}
            </Grid>

            <Grid item>
              <Tooltip title="Salir">
                <MenuItem onClick={handleCloseSession}>
                  <ExitToAppIcon />
                </MenuItem>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default memo(Header)
