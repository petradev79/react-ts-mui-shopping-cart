import { makeStyles } from '@material-ui/core';
const cartWidth = '400px';

export const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: cartWidth,
    },
    drawerPaper: {
      width: cartWidth,
      padding: theme.spacing(2),
    },
    title: {
      paddingBlock: theme.spacing(2),
    },
  };
});
