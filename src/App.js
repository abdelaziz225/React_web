// App.js

import React, { Component } from 'react';
import Navbar from './components/Nav';
import Header from './components/Header';
import Skills from './components/Skills';
import Threesections from './components/Threesections';
import './App.css';
import Getinfo from './components/Getinfo';
import Footer from './components/Footer';
import { ReactDOM,CreateHashRouter,RouterProvider } from 'react';


class App extends Component {

  render() { 
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Skills />
        <Threesections />
        <Getinfo></Getinfo>
        <Footer></Footer>
      </div>
    );
  }
}

const router =CreateHashRouter([

  {
    path:"/",
    element:<Root/>,
    loader:rootloader,
    children:[
      {
        path:"team",
        element:<Team/>,
        loader:TeamLoader,
      }
    ]
  }
  ]
)




 
export default App;