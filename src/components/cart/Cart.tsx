import CartItem from './CartItem';
// Types
import { CartItemType } from '../../App';
// Styles
import { useStyles } from './Cart.styles';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const classes = useStyles();
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity * item.price, 0);

  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: {`$${calculateTotal(cartItems).toFixed(2)}`}</h2>
    </div>
  );
};

export default Cart;
