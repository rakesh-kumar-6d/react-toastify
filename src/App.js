import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {  toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



class App extends Component {
  notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });
    toast.warn("Stay Alert !!!", {
      position: toast.POSITION.TOP_LEFT
    });
    toast.error("OMG you got an error !", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    toast.info("Required info !", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    toast("Required info !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={this.notify} >Notify !</button>
            <ToastContainer />
          </div>
          <p>npm i react-toastify</p>
          <section>
          <iframe style={{'height':'100vh',"width":"100vw"}}src="https://fkhadra.github.io/react-toastify/" frameborder="0"></iframe>
        </section>
        </header>
       

      </div>
    );
  }
}

export default App;
