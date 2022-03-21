import { useRoutes } from 'react-router-dom';
import routes from './urls';

const Routers = () => {
  const routing = useRoutes(routes());
  return routing;
};

export default Routers;
