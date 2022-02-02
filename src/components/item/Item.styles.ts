import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid lightblue',
    borderRadius: '20px',
    height: '100%',
  },
  btn: {
    borderRadius: '0 0 20px 20px',
  },
  img: {
    maxHeight: '250px',
    objectFit: 'cover',
    borderRadius: '20px 20px 0 0',
  },
  wrapper: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '1rem',
    height: '100%',
  },
});
