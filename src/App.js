import React, { useState, useEffect } from 'react';
import SavedBusiness from './components/savedBusiness';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import LoginForm from './components/LoginForm';
import users from './data/users'
import './App.css';
import './sidebar.css'; // Sidebar functionality

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [saved, setSaved] = useState([]);
  const [leftOpen, setLeftOpen] = useState('closed');
  const [login, setLogin] = useState({
    inLogin: true,
    email: '',
    password: ''
  });
  const [accounts, setAccounts] = useState(users);

  useEffect(() => {
    console.log(users);
  }, [accounts])

  function toggleSidebar(event) {
    setLeftOpen(prev => (prev === 'open') ? 'closed' : 'open');
  }


  function submitHandler(event) {
    event.preventDefault();

    setLogin(prev => {
      const userIndex = accounts.findIndex(account => account.email === prev.email && account.password === prev.password);
      
      if (userIndex === -1) {
        alert("error");
      }

      accounts[userIndex] = {
        email: prev.email,
        password: prev.password,
        saved: saved
      }

      return {
        inLogin: true,
        email: '', 
        password: ''
      }
    });

    setSaved([]);
    setBusinesses([]);
    setLeftOpen('closed');
  }

  if (login.inLogin) {
    return (
      <div className="App">
        <div id="layout">
          <div id="main">
            <div className='header'>
                <div className="header-bg">
                  <h1 className={`header-title title${'left-'+leftOpen}`}>ravenous</h1>
                </div>
            </div>
            <div className="content">
              <LoginForm setLogin={setLogin} accounts={accounts} setAccounts={setAccounts} setSaved={setSaved}/>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div id="layout">
          <div id='left' className={leftOpen} >
            <button className='icon left-margin'
                onClick={toggleSidebar} >Saved
            </button>
            <button className='icon' onClick={submitHandler}>Sign Out</button>
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
                <BusinessList businesses={businesses} saved={saved} setSaved={setSaved} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;