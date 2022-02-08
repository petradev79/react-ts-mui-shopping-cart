import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  cartItem: {
    marginBlock: '8px',
  },
  header: {
    paddingBottom: '8px',
  },
  actions: {
    paddingInline: '16px',
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    marginLeft: 'auto',
  },
  btn: {
    padding: 0,
  },
});
