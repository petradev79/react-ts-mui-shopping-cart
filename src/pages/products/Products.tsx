// Components
import Product from '../../components/product/Product';
import { Grid, makeStyles } from '@material-ui/core';
// Types
import { ProductType } from '../../components/controller/Controller';
//Styles
const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(13),
    },
  };
});

type Props = {
  cartItems: ProductType[] | [];
  products: ProductType[];
  addToCart: (clickedItem: ProductType) => void;
  getDetails: (selectedItem: ProductType) => void;
};

const Products: React.FC<Props> = ({
  cartItems,
  products,
  addToCart,
  getDetails,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid item key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product
              cartItems={cartItems}
              product={product}
              addToCart={addToCart}
              getDetails={getDetails}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
