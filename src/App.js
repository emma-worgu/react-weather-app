import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 const ApiKey = '56f6937a1d052f6ce1e0056c291d24b3';

  const[locality, setLocality] = useState('');
  const[apiData, setApiData] = useState([]);

  const localHandler = (e) => {
      setLocality(e.target.value);
  };

  const handleForm = (e) => {
      e.preventDefault();
      // console.log(locality);
      console.log('Working');
  };

  // Get User Location And display weather based on their location
  const fetchData = () => {
    // Get the user Location
    console.log('Loading.....')
    const location = navigator.geolocation;
    if(location) {
      location.watchPosition(async(position, err) => {
        if(err) {
          console.log('There Was an error');
        } else {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
          console.log(process.env.ApiKey);
          const response = await fetch(url, { headers: {'Content-type': 'application/json', 'Accept': 'application/json'}});
          const data = await response.json();
          console.log(data);
          setApiData(data);
          console.log(apiData);
        }
        // try {
        //   const lat = position.coords.latitude;
        //   const lon = position.coords.longitude;
        //   // Fetch the Data based on the user location.
        //   const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.ApiKey}`;
        //   const response = await fetch(url);
        //   const data = await response.json();
        //   console.log(data);
        //   setApiData(data);
        //   console.log(apiData);
        // } catch (err) {
        //     setApiData(err);
        // };
      });
    };
  };

  useEffect(fetchData, []);


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
  localStorage.setItem("recentSearched", locality);
  const recent = localStorage.getItem("recentSearched");
  
  return (
    <div>
      <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
      <Body message={logic()}/>
      <Footer/>
    </div>
  );
}

export default App;
