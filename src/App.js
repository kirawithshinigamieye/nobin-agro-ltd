import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="fixed-top"><Header></Header></div>


      
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
