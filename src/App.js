import React, {useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import Loading from './Loading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 const ApiKey = '56f6937a1d052f6ce1e0056c291d24b3';

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
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?p=${locality}&appid=${ApiKey}`);
        setApiData({
          loading: true
        });
        const data = await response.json();
        setApiData({
          loading: false,
          data: data
        });
        console.log(apiData);
      } catch (error) {
          setApiData({
            loading: false,
            data: 'An error occured'
          });
          console.log(apiData.data);
      }
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
      return (
        <div>
          <Nav value={locality} localHandler={localHandler} handleForm={handleForm}/>
          <Body message={apiData.data}/>
          <Footer/>
        </div>
      );
  }
}

export default App;
