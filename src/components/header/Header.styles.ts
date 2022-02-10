import { makeStyles } from '@material-ui/core';
import { drawerWidth } from '../controller/Controller';

export const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: '#fefefe',
      paddingTop: theme.spacing(2),
    },
    date: {
      flexGrow: 1,
    },
    btn: {
      marginLeft: theme.spacing(2),
    },
    bump: {
      animation: '$bump 300ms ease-out',
    },
    '@keyframes bump': {
      '0%': {
        transform: 'scale(1)',
      },
      '10%': {
        transform: 'scale(0.9)',
      },
      '30%': {
        transform: 'scale(1.1)',
      },
      '50%': {
        transform: 'scale(1.15)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  };
});
