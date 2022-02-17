import {
  // BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Products from '../../pages/products/Products';
import Details from '../../pages/details/Details';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { LinearProgress, makeStyles } from '@material-ui/core';
import Cart from '../cart/Cart';
//Styles
export const drawerWidth = 260;
const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});
// Types
export type ProductType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

const getProducts = async (category: string): Promise<ProductType[]> =>
  await (await fetch(`https://fakestoreapi.com/products/${category}`)).json();

const Controller = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductType[]);
  const [category, setCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState({} as ProductType);

  const { isLoading, data, error } = useQuery<ProductType[]>(
    ['products', category],
    () => getProducts(category)
  );

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  const getCategoryHandler = (category: string) => {
    if (category) {
      setCategory(`category/${category}`);
    } else {
      setCategory('');
    }
    navigate('/');
  };

  const getItemsHandler = (items: ProductType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity, 0);

  const addToCartHandler = (clickedItem: ProductType) => {
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevState, { ...clickedItem, quantity: 1 }];
    });
  };

  const removeFromCartHandler = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as ProductType[])
    );
  };

  const getDetailsHandler = (selectedItem: ProductType) => {
    setSelectedProduct(selectedItem);
    navigate('/details');
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <div className={classes.root}>
      <Cart
        closeCart={setIsCartOpen}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        addToCart={addToCartHandler}
        removeFromCart={removeFromCartHandler}
      />
      <Header
        getItems={getItemsHandler(cartItems)}
        openCart={openCartHandler}
      />
      <Sidebar category={category} getCategory={getCategoryHandler} />

      <Routes>
        <Route
          path='/'
          element={
            data && (
              <Products
                cartItems={cartItems}
                products={data}
                addToCart={addToCartHandler}
                getDetails={getDetailsHandler}
              />
            )
          }
        />
        <Route
          path='/details'
          element={
            <Details product={selectedProduct} addToCart={addToCartHandler} />
          }
        />
      </Routes>
    </div>
  );
};

export default Controller;
