import React from 'react';
import { render } from 'react-dom';
import root from './modules/root';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Header from './components/Header.jsx';
import EditForm from './components/EditForm.jsx';

const store = createStore(root);

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <EditForm />
      </div>
    );
  }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));