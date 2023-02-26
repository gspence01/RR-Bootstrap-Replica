import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './components/TopBar';
import MainTitle from './components/MainTitle';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <MainTitle/>
      <StoreListings/>
    </div>
  );
}

export default App;
