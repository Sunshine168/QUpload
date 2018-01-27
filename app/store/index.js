import { useStrict } from 'mobx';
import { enableLogging } from 'mobx-logger';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import counter from './counter';

useStrict(true);
enableLogging({ reaction: false });

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  counter,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

export default { stores, history };
