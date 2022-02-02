import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './components/item/Item';
import Cart from './components/cart/Cart';
import {
  Badge,
  Drawer,
  Grid,
  IconButton,
  LinearProgress,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
//Styles
import { useStyles } from './App.styles';
// Types
export type CartItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const classes = useStyles();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { isLoading, data, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getItemsHandler = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity, 0);

  const addToCartHandler = (clickedItem: CartItemType) => {
    setCartItems(prevState => {
      const isItemInCart = prevState.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prevState.map(item =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevState, { ...clickedItem, quantity: 1 }];
    });
  };

  const removeFromCartHandler = (id: number) => {
    setCartItems(prevState =>
      prevState.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <div className={classes.wrapper}>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={addToCartHandler}
          removeFromCart={removeFromCartHandler}
        />
      </Drawer>
      <IconButton
        className={classes.cartBtn}
        onClick={() => setIsCartOpen(true)}
      >
        <Badge badgeContent={getItemsHandler(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </IconButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToCart={addToCartHandler} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
