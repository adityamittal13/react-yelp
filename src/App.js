import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import Header from './components/header';
import React, { useState } from 'react';

function App() {
  const [businesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setBusinesses={setBusinesses}/>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
