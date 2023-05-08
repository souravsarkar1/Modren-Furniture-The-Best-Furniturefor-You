import styled from 'styled-components';
import './App.css';
import Navbar from './Component/Navbar';
import MainRoutes from './Pages/MainRoutes';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';

function App() {
  return (
    <DIV className="App">
     <Navbar/>
     <Sidebar/>
      <MainRoutes/>
      <Footer/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`

`
