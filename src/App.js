import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import Nav from './Navigation/Navigation';
import Details from './Components/Details';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
