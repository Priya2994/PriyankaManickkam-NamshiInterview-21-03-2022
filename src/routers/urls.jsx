import GridTask from '../pages/grid-task';
import Checkout from '../pages/checkout';
import { GRID_TASK, CHECKOUT } from './config';

const routes = () => [
  {
    path: GRID_TASK,
    element: <GridTask />
  },
  {
    path: CHECKOUT,
    element: <Checkout />
  },
  {
    path: '*',
    element: <GridTask/>,
  },
];

export default routes;
