import {
  Breadcrumbs,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import React, { memo } from 'react';
import { IRuta } from '../store/reducers/rutasReducer';

type TEnlaces = {
  enlaces: IRuta;
};
const ColorDesktop = '#fff';
const ColorMobile = '#fff';
const useStyles = makeStyles((theme: Theme) => ({
  linkDesktop: {
    textDecoration: 'none',
    color: ColorDesktop,
    '&:hover': {
      color: 'blue',
    },
    maxWidth: '30em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  linkMobile: {
    textDecoration: 'none',

    textIndent: '18px',
    color: ColorMobile,
    width: '120px',
    overflowInline: 'hidden',
    '&:hover': {
      color: 'blue',
    },
    maxWidth: '30em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  itemsAlineados: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));
function BreadCrumb(props: TEnlaces) {
  const { enlaces } = props;
  const classes = useStyles(props);
  const matches = useMediaQuery('(min-width:800px)');

  if (enlaces && enlaces[0]) {
    let link = enlaces[0].link.split('/');
    let as = enlaces[0].as ? enlaces[0].as.split('/') : [];
    let ruta = enlaces[0].ruta.split('|');

    return (
      <Grid>
        <Breadcrumbs
          separator={<Typography variant="subtitle1">›</Typography>}
          aria-label="breadcrumb"
        >
          {ruta.map((_, index) => {
            let asRef = `/${link.slice(0, index + 1).join('/')}`;
            let href = `/${as.slice(0, index + 1).join('/')}`;
            return (
              ruta[index] &&
              ruta[index] !== 'undefined' && (
                <Link href={href} as={asRef} key={index}>
                  <MaterialLink
                    color="inherit"
                    href="#"
                    className={
                      matches ? classes.linkDesktop : classes.linkMobile
                    }
                  >
                    {matches ? (
                      <Tooltip title={ruta[index]}>
                        <Typography
                          variant="subtitle1"
                          className={classes.linkDesktop}
                        >
                          {ruta[index]}
                        </Typography>
                      </Tooltip>
                    ) : (
                      <Typography
                        variant="body2"
                        className={classes.linkMobile}
                      >
                        {ruta[index]}
                      </Typography>
                    )}
                  </MaterialLink>
                </Link>
              )
            );
          })}
        </Breadcrumbs>
      </Grid>
    );
  } else return <p></p>;
}

export default memo(BreadCrumb);
