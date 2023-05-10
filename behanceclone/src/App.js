import './App.css';
import  MainRoutes  from './Pages/MainRoutes';
//import './App.css';
import Navbar from './Component/Navbar';
//import MainRoutes from './Pages/MainRoutes';
//import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import styled from 'styled-components';
import Sidebar from './Component/SidebarforNav';

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
