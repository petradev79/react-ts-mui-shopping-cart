//Components
import CartItem from '../cart-item/CartItem';
import { Typography, Drawer } from '@material-ui/core';
// Types
import { ProductType } from '../controller/Controller';
// Styles
import { useStyles } from './Cart.styles';

type Props = {
  isCartOpen: boolean;
  cartItems: ProductType[];
  closeCart: (clickedItem: boolean) => void;
  addToCart: (clickedItem: ProductType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({
  isCartOpen,
  cartItems,
  closeCart,
  addToCart,
  removeFromCart,
}) => {
  const classes = useStyles();
  const calculateTotal = (items: ProductType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor='right'
      open={isCartOpen}
      onClose={() => closeCart(false)}
    >
      <Typography variant='h5' className={classes.title}>
        Your Cart List
      </Typography>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Typography variant='h5' className={classes.title}>
        Total: ${calculateTotal(cartItems).toFixed(2)}
      </Typography>
    </Drawer>
  );
};

export default Cart;
