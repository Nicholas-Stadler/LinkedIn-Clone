import React from 'react';
import './App.css';
import { selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {
  

  return (
    <div className="app">
      {/* Header */}
      <Header /> 

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
