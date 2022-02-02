import { Button } from '@material-ui/core';
// Types
import { CartItemType } from '../../App';
// Styles
import { useStyles } from './Item.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <img className={classes.img} src={item.image} alt={item.title} />
      <div className={classes.wrapper}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
      <Button className={classes.btn} onClick={() => addToCart(item)}>
        Add to cart
      </Button>
    </div>
  );
};

export default Item;
