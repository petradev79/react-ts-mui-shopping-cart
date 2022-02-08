import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => {
  return {
    product: {
      marginTop: theme.spacing(8),
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      width: '100%',
      maxWidth: '960px',
      marginInline: 'auto',
    },
    content: {
      flex: 1,
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
    action: {
      marginBlock: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      marginBottom: theme.spacing(1),
    },
    img: {
      flex: 1,
    },
  };
});
