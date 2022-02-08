import { useState } from 'react';
// Components
import { Button, Typography, Box, Collapse } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {
  AddShoppingCartOutlined,
  ExpandMoreOutlined,
} from '@material-ui/icons';
// Types
import { ProductType } from '../../components/controller/Controller';
//Styles
import { useStyles } from './DetailsItem.styles';

type Props = {
  product: ProductType;
  addToCart: (clickedItem: ProductType) => void;
};

const DetailsItem: React.FC<Props> = ({ product, addToCart }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const category =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.product}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant='h4' color='primary'>
            {product.title}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            Category: {category}
          </Typography>
        </div>

        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography
            component='legend'
            variant='subtitle2'
            color='textSecondary'
          >
            User ratings:
          </Typography>
          <div className={classes.rating}>
            <Rating
              name='half-rating-read'
              value={product.rating.rate}
              precision={0.5}
              readOnly
            />
            {product.rating.rate} ({product.rating.count})
          </div>
        </Box>
        <Typography variant='subtitle2' color='textSecondary'>
          Product price:
        </Typography>
        <Typography variant='h3' color='primary'>
          ${product.price.toFixed(2)}
        </Typography>
        <div className={classes.action}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<AddShoppingCartOutlined />}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
          <Button
            aria-expanded={expanded}
            endIcon={<ExpandMoreOutlined />}
            onClick={handleExpandClick}
          >
            about
          </Button>
        </div>
        <Typography
          variant='body2'
          color='textSecondary'
          className={classes.text}
        >
          {product.description}
        </Typography>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <Typography variant='body2' color='textSecondary'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quod
            delectus cumque suscipit eaque, rerum sit. Maiores nam, fugiat
            labore ducimus atque sit sunt sapiente quaerat expedita odit quas
            deserunt nulla ex tempore a eos laborum accusantium cum laboriosam
            et consectetur! Hic dolor voluptate maxime cumque cupiditate
            inventore praesentium unde architecto at illum possimus animi natus
            in, esse quo, nam odio eveniet consequuntur repellendus saepe
            explicabo, facilis quibusdam beatae. Qui laboriosam optio magni quo.
            Ex, ipsam nulla blanditiis quidem quos magnam quas, aut debitis
            iusto, sequi assumenda consequuntur saepe necessitatibus consequatur
            rerum cum velit corrupti recusandae culpa impedit iure rem.
          </Typography>
        </Collapse>
      </div>
      <div className={classes.img}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', float: 'right' }}
        />
      </div>
    </div>
  );
};

export default DetailsItem;
