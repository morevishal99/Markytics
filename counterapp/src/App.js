import logo from './logo.svg';
import './App.css';
import CounterPage from './Pages/CounterPage';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Component/Navbar';

function App() {
  
  return (
    <div className="App" >
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
