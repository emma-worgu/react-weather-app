import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import Loading from './Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 const ApiKey = '56f6937a1d052f6ce1e005bc291d24b3';

  const[locality, setLocality] = useState('');
  const[apiData, setApiData] = useState({
    loading: false,
    data: []
  });

  const localHandler = (e) => {
      setLocality(e.target.value);
  };

  const handleForm = async (e) => {
      e.preventDefault();
      setApiData({
        loading: true,
        data: []
      });
      //console.log(apiData);
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Nigeria,${locality}&appid=${ApiKey}`;
        const response = await fetch(url);
        setApiData({
          loading: true,
        });
        console.log(`This is response ${response}`);
        const data = await response.json();
        setApiData({
          loading: false,
          data: data.weather[0].main
        });
        console.log(data);
        console.log(apiData.data);
      } catch (error) {
          setApiData({
            loading: false,
            data: 'An error Occured'
          });
          console.log(apiData.data);
      };
      console.log('Working');
  };

  const fetchData = () => {
    // Get the Location of the User
    const showPosition = async (position) => {
      console.log('The show position is working');
      setApiData({
        loading: true,
        data: 'Please Wait While we get the weather using your location'
      });
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(`This is your latitude ${lat} and longitude ${lon}`);
      const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`
      try {
        const response = await fetch(url, {headers: {'Content-type': 'application/json', 'Accept': 'application/json'}});
        setApiData({
          loading: true,
        });
        const data = await response.json();
        setApiData({
          loading: false,
          data: data.weather[0].main
        });
      } catch (error) {
        setApiData({
          loading: false,
          data: 'An error occured'
        })
      };
    };
    
    // Handles the error if the location is not available
    const errorHandler = err => {
      console.log('The error function is working')
      if (err.code === 1) {
        console.log('Access Denied');
        setApiData({
          loading: false,
          data: 'Access denied'
        });
      } else if (err.code === 2) {
        console.log('Position is Unavailable');
        setApiData({
          loading: false,
          data: 'Position is Unavailable....Please Check your internet connection!!'
        });
      } else {
        console.log('Something went wrong...')
      };
    };
    
    const location = navigator.geolocation;
    if (location) {
      console.log('Getting the location');
      location.watchPosition(showPosition, errorHandler);
    } else {
      console.log('Your browser does not support Geolocation');
    };
  };


  // Get User Location And display weather based on their location
  // const fetchData = () => {
  //   // Get the user Location
  //   console.log('Loading.....')
  //   const location = navigator.geolocation;
  //   console.log(location);
  //   if(location) {
  //     console.log('Geolocation is Supported in this browser');
  //     location.watchPosition(async(position, err) => {
  //       console.log('The browser is watching your location');
  //       console.log(position);
  //       if(err) {
  //         console.log('There Was an error');
  //       } else {
  //         console.log('Trying to get weather information...')
  //         try {
  //           const lat = position.coords.latitude;
  //           const lon = position.coords.longitude;
  //           const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
  //           console.log(process.env.ApiKey);
  //           const response = await fetch(url, { headers: {'Content-type': 'application/json', 'Accept': 'application/json'}});
  //           setApiData({
  //             loading: true
  //           });
  //           const data = await response.json();
  //           setApiData({
  //             loading: false,
  //             data
  //           });
  //           console.log(apiData);
  //         } catch (error) {
  //           setApiData({
  //             loading: false,
  //             data: 'There was error connecting the srever'
  //           });
  //         };
  //       };
  //       // try {
  //       //   const lat = position.coords.latitude;
  //       //   const lon = position.coords.longitude;
  //       //   // Fetch the Data based on the user location.
  //       //   const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.ApiKey}`;
  //       //   const response = await fetch(url);
  //       //   const data = await response.json();
  //       //   console.log(data);
  //       //   setApiData(data);
  //       //   console.log(apiData);
  //       // } catch (err) {
  //       //     setApiData(err);
  //       // };
  //     });
  //   } else {
  //     console.log('Your Browser Does not support Geolocation');
  //   };
  // };

  useEffect(fetchData, []);


  // Handle What will be display on the screen when the user searches through the input and also press the submit button
  // const logic = () => {
  //   <p>{apiData.data}</p>
  // };
  // This will save and store the user searches on local storage
  localStorage.setItem("recentSearched", locality);
  const recent = localStorage.getItem("recentSearched");

  if (apiData.loading) {
    return (
      <Loading/>
    );
  } else {
    //const weatherData = apiData.data.map(data => data);
    //const weatherData = apiData.data.map(data => data);

      return (
        <div>
          <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
          <Body message={typeof(apiData.data) === 'string' ? apiData.data : console.log(apiData.data)}/>
          <Footer/>
        </div>
      );
  };
};

export default App;
