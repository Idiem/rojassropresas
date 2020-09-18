import { createHistory, useBasename } from 'history';

const history = useBasename(createHistory)({
    basename: '/root' 
  });
export default createBrowserHistory();