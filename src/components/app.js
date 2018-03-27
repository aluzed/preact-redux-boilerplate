import { h, Component } from 'preact';
import { Provider } from 'preact-redux';
import Store from './store';
import AppRouter from './router';

export default class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    );
  }

}
