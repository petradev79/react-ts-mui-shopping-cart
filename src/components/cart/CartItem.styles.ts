import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Arial, Helvetica, sans-serif',
    paddingBottom: '20px',
    borderBottom: '1px solid lightblue',
  },
  wrapper: {
    flex: 1,
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    maxWidth: '80px',
    objectFit: 'cover',
    marginLeft: '40px',
  },
});
