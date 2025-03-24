import GlobalStyles from './GlobalStyles'
import store from '../store/index'
import { Provider } from 'react-redux'
import LandingPage from './Pages/landingPage';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Provider store={store}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
