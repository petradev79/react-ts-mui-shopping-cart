import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardActions,
  Typography,
} from '@material-ui/core';
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from '@material-ui/icons';
// Types
import { ProductType } from '../controller/Controller';
// Styles
import { useStyles } from './CartItem.styles';

type Props = {
  item: ProductType;
  addToCart: (clickedItem: ProductType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.cartItem}>
      <CardHeader
        className={classes.header}
        avatar={<Avatar src={item.image} />}
        title={
          item.title.length > 30
            ? item.title.substring(0, 33) + '...'
            : item.title
        }
        subheader={`Price: $${item.price.toFixed(2)}`}
      />
      <CardActions disableSpacing className={classes.actions}>
        <Typography variant='body1' color='textPrimary'>
          Total: ${(item.quantity * item.price).toFixed(2)}
        </Typography>
        <div className={classes.btns}>
          <IconButton
            aria-label='settings'
            className={classes.btn}
            onClick={() => removeFromCart(item.id)}
          >
            <RemoveCircleOutlineOutlined />
          </IconButton>
          <Typography variant='body1' color='textPrimary'>
            {item.quantity}
          </Typography>
          <IconButton
            aria-label='settings'
            className={classes.btn}
            onClick={() => addToCart(item)}
          >
            <AddCircleOutlineOutlined />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
