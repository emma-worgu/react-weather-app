import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const[locality, setLocality] = useState('');

  const localHandler = (e) => {
      setLocality(e.target.value);
  };

  const[apiLoading, setApiLoading] = useState({
    loading: false,
    data: null
  })

  const handleForm = (e) => {
      e.preventDefault();
      console.log(locality);
      console.log('Working');
  };

  // Get User Location And display weather based on their location
  useEffect(() => {
    let i = 0
    setApiLoading({loading: true})
    const location = navigator.geolocation;
    if(location) {
      location.watchPosition((position, err) => {
        if(err) {
          console.log(err);
        } else {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.ApiKey}`)
          .then((res, err) => {
            if(err) {
              console.log(err)
            } else {
              return res.json()
            }
          })
            .then((data) => {
              setApiLoading({
                loading: false,
                data: data
              });
              console.log(data)
            });
        }
      }) 
    };
  },[])

  // Handle What will be display on the screen when the user searches through the input and also press the submit button
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
  // This will save and store the user searches on local storage
  let recentSearched;
  localStorage.setItem("recentSearched", locality);
  const recent = localStorage.getItem("recentSearched");
  console.log(recent);
  
  return (
    <div>
      <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
      <Body message={logic()}/>
      <Footer/>
    </div>
  );
}

export default App;
