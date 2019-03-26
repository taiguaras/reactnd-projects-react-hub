import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Prepare store
import reducers from './reducers';
import middlewares from './middlewares';

// Init Store
const store = createStore(reducers, middlewares);

console.log(store.getState(),'BORA VER ESSA STORE AE')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA