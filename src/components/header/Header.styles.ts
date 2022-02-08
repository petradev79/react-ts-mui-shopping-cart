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
  };
});
