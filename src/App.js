import React, { useState, useEffect } from 'react';
import SavedBusiness from './components/savedBusiness';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import LoginForm from './components/LoginForm';
import fetchData from './utils/fetchData';
import updateAccount from './utils/updateAccount';
import addAccount from './utils/addAccount';
import './App.css';
import './sidebar.css'; // Sidebar functionality

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [saved, setSaved] = useState([]);
  const [leftOpen, setLeftOpen] = useState('closed');
  const [newAccount, setNewAccount] = useState(false);
  const [login, setLogin] = useState({
    inLogin: true,
    email: '',
    password: ''
  });
  const [accounts, setAccounts] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchData().then(response => {
      setAccounts(response);
      console.log(accounts);
    })
  // eslint-disable-next-line
  }, []);

  function toggleSidebar(event) {
    setLeftOpen(prev => (prev === 'open') ? 'closed' : 'open');
  }


  function submitHandler(event) {
    event.preventDefault();

    if (clicked) {
      return;
    }

    setClicked(true);

    if (newAccount) {
      addAccount(login.email, login.password, saved).then(response => {});
    } else {
      const userIndex = accounts.findIndex(account => account.email === login.email && account.password === login.password);

      if (userIndex === -1) {
        console.log(accounts);
        console.log(login);
        alert("error");
      }

      accounts[userIndex] = {
        ...accounts[userIndex],
        email: login.email,
        password: login.password,
        saved: saved
      }

      updateAccount(accounts[userIndex]).then(response => {});
    }
  
    setLogin({
        inLogin: true,
        email: '', 
        password: ''});
    setSaved([]);
    setBusinesses([]);
    setLeftOpen('closed');
    setClicked(false);
    setNewAccount(false);
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
              <LoginForm setLogin={setLogin} accounts={accounts} setAccounts={setAccounts} setNewAccount={setNewAccount} setSaved={setSaved}/>
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