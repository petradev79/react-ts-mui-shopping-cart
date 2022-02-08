// Components
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  SubjectOutlined,
  RedeemOutlined,
  FlipToBackOutlined,
  FlipToFrontOutlined,
  IndeterminateCheckBoxOutlined,
} from '@material-ui/icons';
//Styles
import { useStyles } from './Sidebar.styles';

type Props = {
  category: string;
  getCategory: (category: string) => void;
};

const Sidebar: React.FC<Props> = ({ category, getCategory }) => {
  const classes = useStyles();

  const categories = [
    {
      text: 'All Products',
      icon: <SubjectOutlined color='secondary' />,
      value: '',
    },
    {
      text: 'Electronics',
      icon: <IndeterminateCheckBoxOutlined color='secondary' />,
      value: 'electronics',
    },
    {
      text: 'Jewelery',
      icon: <RedeemOutlined color='secondary' />,
      value: 'jewelery',
    },
    {
      text: "Men's clothing",
      icon: <FlipToFrontOutlined color='secondary' />,
      value: "men's clothing",
    },
    {
      text: "Women's clothing",
      icon: <FlipToBackOutlined color='secondary' />,
      value: "women's clothing",
    },
  ];

  const formatCategory = (value: string) => {
    if (value === '') return '';
    return `category/${value}`;
  };

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      anchor='left'
      classes={{ paper: classes.drawerPaper }}
    >
      <Typography variant='h5' className={classes.title}>
        Filter by Categories
      </Typography>
      <List>
        {categories.map((item) => (
          <div
            key={item.text}
            onClick={() => getCategory(`${item.value}`)}
            className={
              category === formatCategory(item.value) ? classes.active : ''
            }
          >
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
