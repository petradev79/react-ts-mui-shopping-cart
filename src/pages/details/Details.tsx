// Components
import DetailsItem from '../../components/details-item/DetailsItem';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { NavigateBeforeOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
// Types
import { ProductType } from '../../components/controller/Controller';
//Styles
const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(13),
      width: '100%',
    },
    noProduct: {
      textAlign: 'center',
      marginTop: theme.spacing(8),
    },
    puls: {
      animation: `$pulsing 2s infinite ${theme.transitions.easing.easeInOut}`,
      background: `linear-gradient(to right, transparent 50%, ${theme.palette.secondary.light} 50%) left`,
      'background-size': '200%',
    },
    '@keyframes pulsing': {
      '100%': {
        'background-position': 'right',
      },
    },
  };
});

type Props = {
  product: ProductType;
  addToCart: (clickedItem: ProductType) => void;
};

const Details: React.FC<Props> = ({ product, addToCart }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const noProduct = Object.keys(product).length === 0;

  return (
    <div className={classes.wrapper}>
      <Button
        onClick={() => navigate('/')}
        className={noProduct ? classes.puls : ''}
      >
        <NavigateBeforeOutlined /> Back to home page
      </Button>
      {noProduct && (
        <Typography
          variant='h5'
          color='textSecondary'
          className={classes.noProduct}
        >
          Please go to home page and choose product
        </Typography>
      )}
      {!noProduct && <DetailsItem product={product} addToCart={addToCart} />}
    </div>
  );
};
export default Details;
