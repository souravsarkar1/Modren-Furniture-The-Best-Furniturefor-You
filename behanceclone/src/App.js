import styled from 'styled-components';
import './App.css';
import Navbar from './Component/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <DIV className="App">
     <Navbar/>
      <MainRoutes/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`

`
