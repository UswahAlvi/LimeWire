import GlobalStyles from './GlobalStyles'
import LimeWireUI from './Components/LimeWireUI'
import store from '../store/index'
import { Provider } from 'react-redux'

function App() {

  return (
   <Provider store={store}>
   <GlobalStyles />
   <LimeWireUI />
   </Provider>
  )
}

export default App
