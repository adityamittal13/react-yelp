import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
