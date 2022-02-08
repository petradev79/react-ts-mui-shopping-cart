import { makeStyles } from '@material-ui/core';
import { drawerWidth } from '../controller/Controller';

export const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    title: {
      paddingBlock: theme.spacing(4),
      paddingInline: theme.spacing(2),
    },
    active: {
      background: '#f4f4f4',
    },
  };
});
