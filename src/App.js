import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import About from './About';
import Footer from './Footer';
import NotFoundPage from './404';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, 
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
 // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const[locality, setLocality] = useState('');

  const localHandler = (e) => {
      setLocality(e.target.value);
  };

  const handleForm = (e) => {
      e.preventDefault();
      console.log(locality);
  };

  useEffect(() => {
    const location = navigator.geolocation;
    if(location) {
      location.watchPosition((position, err) => {
        if(err) {
          console.log(err);
        } else {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.ApiKey}`;
          fetch(url)
            .then((res) => {
              console.log(res);
            })
              .then((data) => {
                console.log(data);
              })
        }
      }) 
    };
  }, [])

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
  //console.log(recent);
  return (
    <div>
      <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
      <Router>
        <Switch>
          <Route path="/" exact render={() =><Body message={logic()}/>} />
          <Route path="/about" component={About}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
