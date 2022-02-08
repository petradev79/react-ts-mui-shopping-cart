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

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar>
        <Typography variant='h5' color='textPrimary' className={classes.date}>
          Like to add to shopping cart
        </Typography>
        <Typography>Mario</Typography>
        <IconButton className={classes.btn} onClick={openCart}>
          <Badge badgeContent={getItems} color='primary'>
            <ShoppingCartOutlined color='secondary' />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
