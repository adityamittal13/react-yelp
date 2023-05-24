import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import Header from './components/header';

function App() {

  const businessList = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList businesses={businessList} />
    </div>
  );
}

export default App;
