import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container-fluid">
        <div className="row">
        
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
