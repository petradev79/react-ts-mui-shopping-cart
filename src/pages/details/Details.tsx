// Components
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
    card: {
      marginTop: theme.spacing(8),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '960px',
      marginInline: 'auto',
    },
    content: {
      flex: 0.8,
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    text: {
      marginTop: theme.spacing(3),
    },
    img: {
      height: '500px',
      flex: 1,
    },
  };
});

type Props = {
  product: ProductType;
};

const Details: React.FC<Props> = ({ product }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  console.log(product);

  return (
    <div className={classes.wrapper}>
      <Button onClick={() => navigate('/')}>
        <NavigateBeforeOutlined /> Back to main page
      </Button>
      <div className={classes.card}>
        <div className={classes.content}>
          <Typography variant='h5' color='primary' className={classes.title}>
            {product.title}
          </Typography>
          <Typography variant='subtitle1' color='textPrimary'>
            Category:{' '}
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </Typography>
          <Typography variant='subtitle1' color='textPrimary'>
            Price: ${product.price.toFixed(2)}
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            className={classes.text}
          >
            {product.description}
          </Typography>
        </div>
        <div className={classes.img}>
          <img
            src={product.image}
            alt={product.title}
            style={{ height: '100%', float: 'right' }}
          />
        </div>
      </div>
    </div>
  );
};
export default Details;
