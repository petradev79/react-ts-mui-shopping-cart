import { useEffect, useState } from 'react';
// Components
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
//Styles
import { useStyles } from './Header.styles';

type Props = {
  getItems: number;
  openCart: () => void;
};

const Header: React.FC<Props> = ({ getItems, openCart }) => {
  const classes = useStyles();
  const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);

  const cartBtnClasses = `${classes.btn} ${
    buttonIsHighLighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (getItems === 0) {
      return;
    }
    setButtonIsHighLighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [getItems]);

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography variant='h5' color='textPrimary' className={classes.date}>
          Like to add to shopping cart
        </Typography>
        <Typography>Mario</Typography>
        <IconButton className={cartBtnClasses} onClick={openCart}>
          <Badge badgeContent={getItems} color='primary'>
            <ShoppingCartOutlined color='secondary' />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
