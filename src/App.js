import Header from './components/header'
import Map from './components/map'
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Outlet />
      <Header />
      <Map />
    </div>
  );
}

export default App;
