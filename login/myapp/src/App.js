import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/layout"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Slidebar from "./components/slidebar"

class App extends Component {
  render() {
    return(
      <div className="App"> 
        
        <Layout/>>.
        {/* <Navbar/> <Footer/>*/}
      </div>
          
    ) 
  }
}

// function App() {
//   return (
    
//         <div className="App">
//           <div>
//             <Footer>
//           </div>
//         </div>
    
//   );
// }

export default App 
