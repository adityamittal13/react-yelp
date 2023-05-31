import './App.css';
import SavedBusiness from './components/savedBusiness';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import React, { useState, useEffect } from 'react';
import './sidebar.css'; // Sidebar functionality

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [saved, setSaved] = useState([]);
  const [leftOpen, setLeftOpen] = useState('closed');

  
  useEffect(() => {
    console.log(saved);
  }, [saved]);

  function toggleSidebar(event) {
    setLeftOpen(prev => (prev === 'open') ? 'closed' : 'open');
  }


  return (
    <div className="App">
      <div id="layout">
        <div id='left' className={leftOpen} >
          <button className='icon'
              onClick={toggleSidebar} >Saved
          </button>
          <div className={`sidebar ${leftOpen}`} >
            <div className='header'>
            </div>
            <div className='content sidebar-content line'>
                <h2 className="header">{`Saved Count: ${saved.length}`}</h2>
                {saved.map(data => (
                  <div>
                    <SavedBusiness businessInfo={data}/>
                    <br/>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div id="main">
          <div className='header'>
              <div className="header-bg">
                  <h1 className={`header-title title${'left-'+leftOpen}`}>ravenous</h1>
              </div>
          </div>
          <div className='content'>
              <SearchBar setBusinesses={setBusinesses}/>
              <BusinessList businesses={businesses} setSaved={setSaved} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
