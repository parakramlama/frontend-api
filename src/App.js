import './App.css';
import 'jquery';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Container from './Container/Container'


function App() {
  return (
    <BrowserRouter>
 
      <Header/> 
      <Container/>
      <Footer/>
   
    </BrowserRouter>
  );
}

export default App;
