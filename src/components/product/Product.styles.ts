import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderRadius: '20px',
      height: '100%',
    },
    price: {
      paddingBottom: theme.spacing(2),
    },
    left: {
      marginLeft: 'auto',
    },
    media: {
      height: '200px',
    },
  };
});
