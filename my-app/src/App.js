import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contextprovider } from './context/Context';

function App() {
  return (
    
      <div className="App">
        <Contextprovider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}/>
            </Routes>
          </BrowserRouter>

        </Contextprovider>
      </div>

    
  );
}

export default App;
