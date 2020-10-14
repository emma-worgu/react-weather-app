import React, {useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import About from './About';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, 
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  const[locality, setLocality] = useState('');

  const localHandler = (e) => {
      setLocality(e.target.value);
  };

  const handleForm = (e) => {
      e.preventDefault();
      console.log(locality);
  };

  const logic = () => {
    if (locality === '') {
      return (
        <p>This is the weather in your location</p>
      );
    } else if (handleForm === false) {
      return (
        <p>This is the weather in your location</p>
      );
    } else {
      return (
        <p>This is the weather in {locality} </p>
      );
    };
  };
  // This will save the user previous searches
  let recentSearched;
  localStorage.setItem(recentSearched, locality);
  const recent = localStorage.getItem(recentSearched);
  console.log(recent);
  return (
    <div>
      <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
      <Router>
        <Switch>
          <Route path="/" exact render={() =><Body message={logic()}/>} />
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
