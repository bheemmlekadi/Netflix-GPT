import { Provider } from 'react';
import Body from './components/Body'

import appStore from './utils/appStore';

function App() {
  return (
    <Provider  store={appStore}>
      <Body/>
    </Provider>
   
  );
}

export default App;
