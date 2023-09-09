import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Contextprovider } from './context/Context';

function App() {
  return (
    <Contextprovider>
      <div className="App">
        <Header/>
      </div>
    </Contextprovider>
    
  );
}

export default App;
