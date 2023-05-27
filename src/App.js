import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import Header from './components/header';
import React, { useState, useEffect } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    console.log(saved);
  }, [saved]);

  return (
    <div className="App">
      <Header />
      <SearchBar setBusinesses={setBusinesses}/>
      <BusinessList businesses={businesses} setSaved={setSaved}/>
    </div>
  );
}

export default App;
