// Components
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { indigo, grey, pink, yellow } from '@material-ui/core/colors';
import { Favorite, NavigateNextOutlined } from '@material-ui/icons';
// Types
import { ProductType } from '../controller/Controller';

// Styles
import { useStyles } from './Product.styles';

const categoryColor = (product: ProductType) => {
  if (product.category === 'jewelery') {
    return yellow[700];
  }
  if (product.category === "men's clothing") {
    return indigo[500];
  }
  if (product.category === "women's clothing") {
    return pink[500];
  }
  return grey[700];
};

type Props = {
  cartItems: ProductType[] | [];
  product: ProductType;
  addToCart: (clickedItem: ProductType) => void;
  getDetails: (selectedItem: ProductType) => void;
};

const Product: React.FC<Props> = ({
  cartItems,
  product,
  addToCart,
  getDetails,
}) => {
  const classes = useStyles();

  const title =
    product.title.length > 30
      ? product.title.substring(0, 33) + '...'
      : product.title;
  const subheader =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const description = product.description.substring(0, 100) + '...';
  const color = cartItems.find((item) => item.id === product.id)
    ? 'secondary'
    : 'inherit';

  return (
    <Card elevation={1} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: categoryColor(product) }}>
            {product.category[0].toUpperCase()}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography
          variant='body1'
          color='textPrimary'
          className={classes.price}
        >
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart' onClick={() => addToCart(product)}>
          <Favorite color={color} />
        </IconButton>
        <Button
          style={{ color: categoryColor(product) }}
          className={classes.left}
          onClick={() => getDetails(product)}
        >
          Show More <NavigateNextOutlined />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
