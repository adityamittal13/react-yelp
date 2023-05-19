import './App.css';
import BusinessList from './components/businessList';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
