import React, {useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  let recentSearched;
  localStorage.setItem(recentSearched, locality);
  const recent = localStorage.getItem(recentSearched);
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
